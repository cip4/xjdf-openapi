package org.cip4.xjdf.json;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.cip4.xjdf.json.model.Schema;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class Context {
    private XPath xPath;
    private TypeTranslator nameTranslator;
    private Node node;
    private Map<String, Map<String, Schema>> substitutionMap = new HashMap<>();
    private boolean substitutionMapInitialized = false;

    public Context(XPath xPath, TypeTranslator nameTranslator, Node node) {
        this(xPath, nameTranslator, node, new HashMap<>());
    }

    public Context(XPath xPath, TypeTranslator nameTranslator, Node node, Map<String, Map<String, Schema>> substitutionMap) {
        this.xPath = xPath;
        this.nameTranslator = nameTranslator;
        this.node = node;
        this.substitutionMap = substitutionMap;
    }

    public Node evaluateNode(String xPathExpr) {
        try {
            return (Node) xPath.evaluate(xPathExpr, node, XPathConstants.NODE);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating XPath expression", e);
        }
    }

    public NodeList evaluateNodeList(String xPathExpr) {
        try {
            return (NodeList) xPath.evaluate(xPathExpr, node, XPathConstants.NODESET);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating XPath expression", e);
        }
    }

    public Context descendant(Node descendant) {
        return new Context(xPath, nameTranslator, descendant, substitutionMap);
    }

    public Map<String, Schema> getSubstitutes(String elementName, TypeTranslator nameTranslator) {
        if (!substitutionMapInitialized) {
            substitutionMapInitialized = true;
            // Initialize substitution map here if needed
        }
        return substitutionMap.get(elementName);
    }
}