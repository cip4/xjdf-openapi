package org.cip4.xjdf.json.openapi;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Discriminator;
import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.w3c.dom.Attr;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public class ComplexType implements Modelable {

    @NonNull
    private final Context context;
    private final String elementName;

    public ComplexType(@NonNull Context context) {
        this.context = context;
        this.elementName = null;
    }

    public String getName() {
        Node nameNode = context.getNode().getAttributes().getNamedItem("name");
        return nameNode != null ? nameNode.getNodeValue() :
            elementName != null ? elementName :
                UUID.randomUUID().toString();
    }

    @Override
    public Model getModel() {
        Schema schema = new Schema()
            .type("object");

        addAttributes(schema);
        addLocalElements(schema);
        applyChoicePolymorphism(schema, context.getNameTranslator());
        applySimpleContent(schema);

        String parent = inheritingFrom();
        if (parent != null) {
            Schema parentRef = context.getNameTranslator().translate(parent);
            if (schemaIsEmpty(schema)) {
                schema = parentRef;
            } else {
                schema = new Schema()
                    .allOf(
                        parentRef,
                        schema
                    );
            }
        }

        return new Model(getName(), schema);
    }

    private void addAttributes(Schema schema) {
        List<Attribute> attributes = getAttributes();
        if (!attributes.isEmpty()) {
            schema.properties(
                new Schemas(
                    attributes.stream()
                        .map(Attribute::getModel)
                        .collect(Collectors.toMap(Model::getName, Model::getSchema))
                )
            ).required().addAll(
                attributes.stream()
                    .filter(Attribute::isRequired)
                    .map(Attribute::getName)
                    .toList()
            );
        }
    }

    private boolean schemaIsEmpty(Schema schema) {
        return (schema.properties() == null || schema.properties().isEmpty())
            && (schema.required() == null || schema.required().isEmpty())
            && (schema.oneOf() == null || schema.oneOf().isEmpty());
    }

    private void addLocalElements(Schema schema) {
        NodeList elementNodes = context.evaluateNodeList(
            "(. | xs:complexContent/xs:extension | xs:simpleContent/xs:extension)/xs:sequence/xs:element");

        getChoiceElements().forEach(element -> addPropertyToSchema(element, schema));

        for (int i = 0; i < elementNodes.getLength(); i++) {
            Node element = elementNodes.item(i);
            Schema substitution = getSubstitution(element);
            if (substitution != null) {
                schema.propertiesPutAll(substitution.properties());
                schema.oneOfAdd(substitution.oneOf());
            } else {
                addPropertyToSchema(
                    new LocalElement(element, context.descendant(element)),
                    schema
                );
            }
        }
    }

    private void addPropertyToSchema(LocalElement element, Schema schema) {
        Model model = element.getModel();
        schema.propertiesPut(model.getName(), model.getSchema());
        if (element.isRequired()) {
            schema.required().add(model.getName());
        }
    }

    private Schema getSubstitution(Node node) {
        Node refNode = node.getAttributes().getNamedItem("ref");
        if (refNode == null) {
            return null;
        }
        String ref = refNode.getNodeValue();

        Schemas substitutes = context.getSubstitutes(ref, context.getNameTranslator());
        if (substitutes == null) {
            return null;
        }

        List<Schema> oneOf = substitutes.keySet().stream()
            .map(key -> new Schema().required(List.of(key))).collect(Collectors.toList());

        Node minOccurs = node.getAttributes().getNamedItem("minOccurs");
        if (minOccurs != null && minOccurs.getNodeValue().equals("0")) {
            oneOf.add(new Schema()
                .not(
                    new Schema().anyOf(
                        substitutes.keySet()
                            .stream()
                            .map(key -> new Schema().required(List.of(key)))
                            .collect(Collectors.toList())
                    )
                )
            );
        }

        return new Schema()
            .properties(substitutes)
            .oneOf(oneOf);
    }

    private List<LocalElement> getChoiceElements() {
        Node choice = context.evaluateNode(
            "(. | xs:complexContent/xs:extension | xs:simpleContent/xs:extension)/xs:sequence/xs:choice");
        if (choice == null) return Collections.emptyList();

        NodeList elementNodes = context.descendant(choice)
            .evaluateNodeList("xs:element");

        List<LocalElement> elements = new ArrayList<>();
        for (int i = 0; i < elementNodes.getLength(); i++) {
            Node elementNode = elementNodes.item(i);
            Attr minOccursAttr = context.getNode().getOwnerDocument().createAttribute("minOccurs");
            minOccursAttr.setValue("0");
            elementNode.getAttributes().setNamedItem(minOccursAttr);
            elements.add(new LocalElement(elementNode, context.descendant(elementNode)));
        }

        return elements;
    }

    private List<Attribute> getAttributes() {
        NodeList attributeNodes = context.evaluateNodeList(
            "(. | xs:complexContent/xs:extension | xs:simpleContent/xs:extension)/xs:attribute");

        List<Attribute> attributes = new ArrayList<>(attributeNodes.getLength());
        for (int i = 0; i < attributeNodes.getLength(); i++) {
            attributes.add(new Attribute(attributeNodes.item(i), context.descendant(attributeNodes.item(i))));
        }
        return attributes;
    }

    private String inheritingFrom() {
        Node baseNode = context.evaluateNode("xs:complexContent/xs:extension/@base");
        return baseNode != null ? baseNode.getNodeValue() : null;
    }

    private void applyChoicePolymorphism(Schema schema, TypeTranslator nameTranslator) {
        Node choice = context.evaluateNode("xs:choice");
        if (choice == null) {
            return;
        }

        if (!"0".equals(choice.getAttributes().getNamedItem("minOccurs").getNodeValue())) {
            throw new RuntimeException("Handling of xs:choice/@minOccurs != 0 is not implemented.");
        }

        if (!"unbounded".equals(choice.getAttributes().getNamedItem("maxOccurs").getNodeValue())) {
            throw new RuntimeException("Handling of xs:choice/@maxOccurs != unbounded is not implemented.");
        }

        schema.type("array");

        NodeList choices = context.descendant(choice).evaluateNodeList("xs:element");
        List<Schema> oneOfSchemas = new ArrayList<>(choices.getLength());
        for (int i = 0; i < choices.getLength(); i++) {
            String reference = choices.item(i).getAttributes().getNamedItem("ref").getNodeValue();
            oneOfSchemas.add(new Schema()
                .allOf(
                    nameTranslator.translate(reference),
                    new Schema()
                        .properties(new Schemas(
                                Collections.singletonMap(
                                    "Name",
                                    new Schema().constValue(reference)
                                )
                            )
                        )
                )
            );
        }

        schema.items(
            new Schema()
                .oneOf(oneOfSchemas)
                .discriminator(new Discriminator("Name"))
                .required(Collections.singletonList("Name"))
        );
    }

    private void applySimpleContent(Schema schema) {
        Node extensionNode = context.evaluateNode("xs:simpleContent/xs:extension");
        if (extensionNode == null) {
            return;
        }

        String base = extensionNode.getAttributes().getNamedItem("base").getNodeValue();
        if (!base.equals("xs:string")) {
            throw new RuntimeException("Unknown simple content '%s'.".formatted(extensionNode.getNodeValue()));
        }

        schema.propertiesPut("Text", context.getNameTranslator().translate(base));
    }
}
