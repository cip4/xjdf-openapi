package org.cip4.xjdf.json;

import org.cip4.xjdf.json.model.Model;
import org.w3c.dom.Node;

public class Attribute implements Modelable {
    private final Node node;
    private final Context context;

    public Attribute(Node node, Context context) {
        this.node = node;
        this.context = context;
    }

    public boolean isRequired() {
        return "required".equals(node.getAttributes().getNamedItem("use").getNodeValue());
    }

    public String getName() {
        return node.getAttributes().getNamedItem("name").getNodeValue();
    }

    @Override
    public Model getModel() {
        return new Model(getName(), attributeType().getModel().getSchema());
    }

    private AttributeType attributeType() {
        return AttributeType.Factory.create(node, context);
    }
}