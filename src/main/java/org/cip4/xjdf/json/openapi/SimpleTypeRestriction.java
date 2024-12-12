package org.cip4.xjdf.json.openapi;


import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import java.util.ArrayList;
import java.util.List;

public class SimpleTypeRestriction extends SimpleType {

    private final Context context;

    public SimpleTypeRestriction(Node node, Context context) {
        super(node);
        this.context = context;
    }

    public Schema getBase() {
        try {
            String baseValue = (String) context.getXPath().evaluate(
                "xs:restriction/@base",
                node,
                XPathConstants.STRING
            );
            return context.getNameTranslator().translate(baseValue);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating base restriction", e);
        }
    }

    @Override
    public Model getModel() {
        Schema schema = getBase();
        Float minInclusive = restrictionFloat("xs:minInclusive");
        if (minInclusive != null) {
            schema.minimum(minInclusive);
        }

        Float maxInclusive = restrictionFloat("xs:maxInclusive");
        if (maxInclusive != null) {
            schema.maximum(maxInclusive);
        }

        Integer minLength = restrictionInt("xs:minLength");
        if (minLength != null) {
            schema.minItems(minLength);
        }

        Integer length = restrictionInt("xs:length");
        if (length != null) {
            schema.minItems(length);
            schema.maxItems(length);
        }

        List<String> enumValues = enumeration();
        if (enumValues != null) {
            schema.enumValues(enumValues);
        }

        String pattern = pattern();
        if (pattern != null) {
            schema.pattern(pattern);
        }

        return new Model(getName(), schema);
    }

    private Integer restrictionInt(String name) {
        try {
            Node valueNode = (Node) context.getXPath().evaluate(
                "xs:restriction/" + name + "/@value",
                node,
                XPathConstants.NODE
            );
            return valueNode != null ? Integer.parseInt(valueNode.getNodeValue()) : null;
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating restriction: " + name, e);
        }
    }

    private Float restrictionFloat(String name) {
        try {
            Node valueNode = (Node) context.getXPath().evaluate(
                "xs:restriction/" + name + "/@value",
                node,
                XPathConstants.NODE
            );
            return valueNode != null ? Float.parseFloat(valueNode.getNodeValue()) : null;
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating restriction: " + name, e);
        }
    }

    private String pattern() {
        try {
            NodeList nodes = (NodeList) context.getXPath().evaluate(
                "xs:restriction/xs:pattern/@value",
                node,
                XPathConstants.NODESET
            );

            if (nodes.getLength() == 0) {
                return null;
            } else if (nodes.getLength() == 1) {
                return nodes.item(0).getNodeValue();
            } else {
                StringBuilder patternBuilder = new StringBuilder();
                for (int i = 0; i < nodes.getLength(); i++) {
                    if (i > 0) {
                        patternBuilder.append("|");
                    }
                    patternBuilder.append(nodes.item(i).getNodeValue());
                }
                return patternBuilder.toString();
            }
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating pattern", e);
        }
    }

    private List<String> enumeration() {
        try {
            NodeList valueNodes = (NodeList) context.getXPath().evaluate(
                "xs:restriction/xs:enumeration/@value",
                node,
                XPathConstants.NODESET
            );

            if (valueNodes == null || valueNodes.getLength() == 0) {
                return null;
            }

            List<String> values = new ArrayList<>();
            for (int i = 0; i < valueNodes.getLength(); i++) {
                values.add(valueNodes.item(i).getNodeValue());
            }
            return values;
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating enumeration", e);
        }
    }

    public static class Factory implements SimpleType.Factory<SimpleTypeRestriction> {
        @Override
        public boolean supports(Node candidate, XPath xPath) {
            try {
                NodeList nodes = (NodeList) xPath.evaluate(
                    "xs:restriction/@base",
                    candidate,
                    XPathConstants.NODESET
                );
                return nodes.getLength() > 0;
            } catch (Exception e) {
                throw new RuntimeException("Error evaluating supports condition", e);
            }
        }

        @Override
        public SimpleTypeRestriction create(Node node, Context context) {
            return new SimpleTypeRestriction(node, context);
        }
    }
}
