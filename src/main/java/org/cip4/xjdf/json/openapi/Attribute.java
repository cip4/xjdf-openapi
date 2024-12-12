package org.cip4.xjdf.json.openapi;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Model;
import org.w3c.dom.Node;

@Getter
@RequiredArgsConstructor
public class Attribute implements Modelable {
    private final Node node;
    private final Context context;

    public boolean isRequired() {
        return node.getAttributes().getNamedItem("use") != null
            && node.getAttributes().getNamedItem("use").getNodeValue().equals("required");
    }

    public String getName() {
        return node.getAttributes().getNamedItem("name").getNodeValue();
    }

    @Override
    public Model getModel() {
        return new Model(getName(), attributeType().getModel().getSchema());
    }

    private AttributeType attributeType() {
        return AttributeType.create(node, context);
    }
}