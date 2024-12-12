package org.cip4.xjdf.json.openapi;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;

import javax.xml.xpath.XPath;

@Getter
@RequiredArgsConstructor
public class AttributeReferencedType extends AttributeType {

    private final Node node;
    private final Context context;

    public Schema getType() {
        return context.getNameTranslator().translate(node.getAttributes().getNamedItem("type").getNodeValue());
    }

    public String getName() {
        return node.getAttributes().getNamedItem("name").getNodeValue();
    }

    @Override
    public Model getModel() {
        return new Model(getName(), getType());
    }

    public static class Factory implements AttributeType.Factory<AttributeReferencedType> {

        @Override
        public boolean supports(Node candidate, XPath xPath) {
            return candidate.getAttributes().getNamedItem("type") != null;
        }

        @Override
        public AttributeReferencedType create(Node node, Context context) {
            return new AttributeReferencedType(node, context);
        }
    }
}

