package org.cip4.xjdf.json.openapi;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;

@RequiredArgsConstructor
public class NamedElement implements Modelable {

    @NonNull
    private final Context context;

    private String getName() {
        Node nameNode = context.getNode().getAttributes().getNamedItem("name");
        if (nameNode == null) {
            throw new IllegalStateException("The 'name' attribute is missing in the context node.");
        }
        return nameNode.getNodeValue();
    }

    @Override
    public Model getModel() {
        Node localType = context.evaluateNode("xs:complexType");
        Schema schema;
        if (localType == null) {
            schema = new Schema();
        } else {
            schema = new ComplexType(context.descendant(localType), getName()).getModel().getSchema();
        }
        return new Model(getName(), schema);
    }
}
