package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;

public class SimpleTypeLocalList extends SimpleType {

    private final Context context;

    public SimpleTypeLocalList(Node node, Context context) {
        super(node);
        this.context = context;
    }

    private AttributeType getBase() {
        try {
            Node baseNode = (Node) context.getXPath().evaluate(
                "xs:list",
                node,
                XPathConstants.NODE
            );
            return AttributeType.create(baseNode, context);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating base node", e);
        }
    }

    @Override
    public Model getModel() {
        return new Model(
            getName(),
            new Schema().type("array").items(getBase().getModel().getSchema())
        );
    }

    public static class Factory implements SimpleType.Factory<SimpleTypeLocalList> {
        @Override
        public boolean supports(Node candidate, XPath xPath) {
            try {
                NodeList nodes = (NodeList) xPath.evaluate(
                    "xs:list/xs:simpleType",
                    candidate,
                    XPathConstants.NODESET
                );
                return nodes.getLength() > 0;
            } catch (Exception e) {
                throw new RuntimeException("Error evaluating supports condition", e);
            }
        }

        @Override
        public SimpleTypeLocalList create(Node node, Context context) {
            return new SimpleTypeLocalList(node, context);
        }
    }
}
