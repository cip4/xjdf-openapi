package org.cip4.xjdf.json.openapi;

import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;

@RequiredArgsConstructor
public class LocalElement implements Modelable {

    private final Node node;
    private final Context context;

    public boolean isRequired() {
        return !Integer.valueOf(0).equals(getMinOccurs());
    }

    private Integer getMinOccurs() {
        Node minOccursNode = node.getAttributes().getNamedItem("minOccurs");
        if (minOccursNode == null) {
            return null;
        }
        return Integer.parseInt(minOccursNode.getNodeValue());
    }

    private Integer getMaxOccurs() {
        Node maxOccursNode = node.getAttributes().getNamedItem("maxOccurs");
        if (maxOccursNode == null) {
            return null;
        }
        String value = maxOccursNode.getNodeValue();
        if ("unbounded".equals(value)) {
            return Integer.MAX_VALUE;
        } else {
            return Integer.parseInt(value);
        }
    }

    public String getName() {
        Node nameNode = node.getAttributes().getNamedItem("name");
        if (nameNode != null) {
            return nameNode.getNodeValue();
        }
        Node refNode = node.getAttributes().getNamedItem("ref");
        if (refNode != null) {
            return refNode.getNodeValue();
        }
        throw new IllegalStateException("Neither 'name' nor 'ref' attributes are present.");
    }

    private Schema getType() {
        Node typeNode = node.getAttributes().getNamedItem("type");
        if (typeNode == null) {
            return null;
        }
        return context.getNameTranslator().translate(typeNode.getNodeValue());
    }

    private String getRef() {
        Node refNode = node.getAttributes().getNamedItem("ref");
        return refNode != null ? refNode.getNodeValue() : null;
    }

    @Override
    public Model getModel() {
        Schema schema = deriveType();

        Integer maxOccurs = getMaxOccurs();
        if (maxOccurs != null && maxOccurs > 1) {
            schema = listOf(schema);
            Integer minOccurs = getMinOccurs();
            if (minOccurs != null && minOccurs != 0) {
                schema.minItems(minOccurs);
            }
            if (!maxOccurs.equals(Integer.MAX_VALUE)) {
                schema.maxItems(maxOccurs);
            }
        }

        return new Model(getName(), schema);
    }

    private Schema listOf(Schema schema) {
        return new Schema()
            .type("array")
            .items(schema);
    }

    private Schema deriveType() {
        String ref = getRef();
        if (ref != null) {
            return context.getNameTranslator().translate(ref);
        }
        Schema type = getType();
        return type != null ? type : new Schema();
    }
}
