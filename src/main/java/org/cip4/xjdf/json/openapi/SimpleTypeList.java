package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;

public class SimpleTypeList extends SimpleType {

    private final Context context;

    public SimpleTypeList(Node node, Context context) {
        super(node);
        this.context = context;
    }

    private Schema getItemType() {
        try {
            String itemTypeValue = (String) context.getXPath().evaluate(
                "xs:list/@itemType",
                node,
                XPathConstants.STRING
            );
            return context.getNameTranslator().translate(itemTypeValue);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating itemType", e);
        }
    }

    @Override
    public Model getModel() {
        return new Model(getName(), new Schema().type("array").items(getItemType()));
    }

    public static class Factory implements SimpleType.Factory<SimpleTypeList> {
        @Override
        public boolean supports(Node candidate, XPath xPath) {
            try {
                NodeList nodes = (NodeList) xPath.evaluate(
                    "xs:list/@itemType",
                    candidate,
                    XPathConstants.NODESET
                );
                return nodes.getLength() > 0;
            } catch (Exception e) {
                throw new RuntimeException("Error evaluating supports condition", e);
            }
        }

        @Override
        public SimpleTypeList create(Node node, Context context) {
            return new SimpleTypeList(node, context);
        }
    }
}
