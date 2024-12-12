package org.cip4.xjdf.json.openapi;

import lombok.Getter;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import java.util.HashMap;
import java.util.Map;

@Getter
public class Context {

    private final XPath xPath;
    private final TypeTranslator nameTranslator;
    private final Node node;
    private final Map<String, Schemas> substitutionMap;
    private boolean substitutionMapInitialized = false;

    public Context(XPath xPath, TypeTranslator nameTranslator, Node node) {
        this(xPath, nameTranslator, node, new HashMap<>());
    }

    public Context(XPath xPath, TypeTranslator nameTranslator, Node node, Map<String, Schemas> substitutionMap) {
        this.xPath = xPath;
        this.nameTranslator = nameTranslator;
        this.node = node;
        this.substitutionMap = substitutionMap;
    }

    public Node evaluateNode(String xPathExpr) {
        try {
            return (Node) xPath.evaluate(xPathExpr, node, XPathConstants.NODE);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating XPath expression: " + xPathExpr, e);
        }
    }

    public NodeList evaluateNodeList(String xPathExpr) {
        try {
            return (NodeList) xPath.evaluate(xPathExpr, node, XPathConstants.NODESET);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating XPath expression: " + xPathExpr, e);
        }
    }

    public Context descendant(Node descendant) {
        return new Context(xPath, nameTranslator, descendant, substitutionMap);
    }

    public Schemas getSubstitutes(String elementName, TypeTranslator nameTranslator) {
        if (!substitutionMapInitialized) {
            substitutionMapInitialized = true;
            try {
                NodeList nodes = (NodeList) xPath.evaluate("//xs:element[@substitutionGroup]", node.getOwnerDocument(), XPathConstants.NODESET);
                for (int i = 0; i < nodes.getLength(); i++) {
                    Node item = nodes.item(i);
                    String substitutionGroup = item.getAttributes().getNamedItem("substitutionGroup").getNodeValue();
                    String type = item.getAttributes().getNamedItem("type").getNodeValue();

                    substitutionMap.computeIfAbsent(substitutionGroup, k -> new Schemas())
                                   .put(type, nameTranslator.translate(type));
                }
            } catch (Exception e) {
                throw new RuntimeException("Error initializing substitution map", e);
            }
        }
        return substitutionMap.get(elementName);
    }
}
