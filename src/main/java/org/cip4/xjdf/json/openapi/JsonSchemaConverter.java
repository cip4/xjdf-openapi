package org.cip4.xjdf.json.openapi;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class JsonSchemaConverter {

    public static final String PREFIX = "#/$defs/";
    private final Document doc;
    private final XPath xPath;

    public static final String XJDF_SCHEMA = "https://schema.cip4.org/jdfschema_2_2/xjdf.json";
    public static final String XJMF_SCHEMA = "https://schema.cip4.org/jdfschema_2_2/xjmf.json";

    public JsonSchemaConverter(InputStream sourceXsd) {
        SchemaReader reader = new SchemaReader();
        this.doc = reader.readXml(sourceXsd);
        this.xPath = reader.getXPath();
    }

    public Schemas convert(OutputStream xjdfOutputStream, OutputStream xjmfOutputStream) {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_DEFAULT);

        ObjectWriter objectWriter = objectMapper.writerWithDefaultPrettyPrinter();

        Schema xjdfSchema = convertModel("XJDF");
        xjdfSchema.id("https://schema.cip4.org/jdfschema_2_2/xjdf.json");

        try (OutputStreamWriter writer = new OutputStreamWriter(xjdfOutputStream, StandardCharsets.UTF_8)) {
            writer.write(objectWriter.writeValueAsString(xjdfSchema));
        } catch (Exception e) {
            throw new RuntimeException("Error writing XJDF schema", e);
        }

        Map<String, String> xjdfTypes = new HashMap<>();
        xjdfSchema.defs().forEach((key, value) -> xjdfTypes.put(key, xjdfSchema.id() + PREFIX + key));

        Schema xjmfSchema = convertModel("XJMF", xjdfTypes);
        xjmfSchema.id("https://schema.cip4.org/jdfschema_2_2/xjmf.json");

        try (OutputStreamWriter writer = new OutputStreamWriter(xjmfOutputStream, StandardCharsets.UTF_8)) {
            writer.write(objectWriter.writeValueAsString(xjmfSchema));
        } catch (Exception e) {
            throw new RuntimeException("Error writing XJMF schema", e);
        }

        Schemas schemaMap = new Schemas();
        schemaMap.put("XJDF", xjdfSchema);
        schemaMap.put("XJMF", xjmfSchema);

        return schemaMap;
    }

    public Schema convertModel(String root) {
        return convertModel(root, new HashMap<>());
    }

    public Schema convertModel(String root, Map<String, String> referencedTypes) {
        TypeTranslator nameTranslator = new TypeTranslator(PREFIX, referencedTypes);
        Schemas defs = new Schemas();
        convertNamedElement(root, nameTranslator, defs);
        Schema xjdfSchema = defs.remove(root);
        xjdfSchema.schema("https://json-schema.org/draft/2020-12/schema");
        xjdfSchema.defs(defs);
        return xjdfSchema;
    }

    private void convertNamedType(String typeName, TypeTranslator nameTranslator, Schemas schemas) {
        if (schemas.containsKey(typeName) || nameTranslator.isExternalType(typeName)) {
            return;
        }

        try {
            Node typeNode = (Node) xPath.evaluate(
                "/xs:schema/xs:simpleType[@name='" + typeName + "'] | /xs:schema/xs:complexType[@name='" + typeName + "']",
                doc,
                XPathConstants.NODE
            );

            if (typeNode.getLocalName().equals("simpleType")) {
                convertSimpleType(typeNode, nameTranslator, schemas);
            } else {
                convertComplexType(typeNode, nameTranslator, schemas);
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for named type: " + typeName, e);
        }
    }

    private void convertSimpleType(Node typeNode, TypeTranslator nameTranslator, Schemas schemas) {
        Model schema = SimpleType.create(
            typeNode,
            new Context(xPath, nameTranslator, typeNode)
        ).getModel();

        schemas.put(schema.getName(), schema.getSchema());
        convertExtendedTypes(typeNode, nameTranslator, schemas);
    }

    private void convertComplexType(Node typeNode, TypeTranslator nameTranslator, Schemas schemas) {
        Model schema = new ComplexType(new Context(xPath, nameTranslator, typeNode)).getModel();
        schemas.put(schema.getName(), schema.getSchema());

        convertReferencedElements(typeNode, nameTranslator, schemas);
        convertReferencedTypes(typeNode, nameTranslator, schemas);
        convertExtendedTypes(typeNode, nameTranslator, schemas);
    }

    private void convertNamedElement(String elementName, TypeTranslator nameTranslator, Schemas schemas) {
        try {
            Node element = (Node) xPath.evaluate(
                "/xs:schema/xs:element[@name='" + elementName + "']",
                doc,
                XPathConstants.NODE
            );

            convertReferencedTypes(element, nameTranslator, schemas);
            convertSubstituteElements(elementName, nameTranslator, schemas);

            if ((
                element.getAttributes().getNamedItem("abstract") != null
                    && element.getAttributes().getNamedItem("abstract").getNodeValue().equals("true")
            )
                || element.getAttributes().getNamedItem("substitutionGroup") != null
            ) {
                return;
            }

            Model schema = new NamedElement(new Context(xPath, nameTranslator, element)).getModel();
            schemas.put(schema.getName(), schema.getSchema());

            convertReferencedElements(element, nameTranslator, schemas);
            convertExtendedTypes(element, nameTranslator, schemas);
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for named element: " + elementName, e);
        }
    }

    private void convertReferencedTypes(Node node, TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList types = (NodeList) xPath.evaluate(".//@type | .//@itemType", node, XPathConstants.NODESET);

            for (int i = 0; i < types.getLength(); i++) {
                String typeName = types.item(i).getNodeValue();
                convertNamedType(typeName, nameTranslator, schemas);
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for referenced types", e);
        }
    }

    private void convertExtendedTypes(Node element, TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList elements = (NodeList) xPath.evaluate(".//@base", element, XPathConstants.NODESET);

            for (int i = 0; i < elements.getLength(); i++) {
                convertNamedType(elements.item(i).getNodeValue(), nameTranslator, schemas);
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for extended types", e);
        }
    }

    private void convertReferencedElements(Node node, TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList elements = (NodeList) xPath.evaluate(".//xs:element/@ref", node, XPathConstants.NODESET);

            for (int i = 0; i < elements.getLength(); i++) {
                String elementName = elements.item(i).getNodeValue();
                if (!schemas.containsKey(elementName) && !nameTranslator.isExternalType(elementName)) {
                    convertNamedElement(elementName, nameTranslator, schemas);
                }
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for referenced elements", e);
        }
    }

    private void convertSubstituteElements(String elementName, TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList elements = (NodeList) xPath.evaluate(
                "/xs:schema/xs:element[@substitutionGroup='" + elementName + "']/@name",
                doc,
                XPathConstants.NODESET
            );

            for (int i = 0; i < elements.getLength(); i++) {
                convertNamedElement(elements.item(i).getNodeValue(), nameTranslator, schemas);
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for substitute elements", e);
        }
    }
}
