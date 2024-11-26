package org.cip4.xjdf.json;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cip4.xjdf.json.model.Model;
import org.w3c.dom.Node;

import javax.xml.xpath.XPath;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public abstract class SimpleType implements Modelable {
    private Node node;

    public String getName() {
        return node.getAttributes().getNamedItem("name") != null
                ? node.getAttributes().getNamedItem("name").getNodeValue()
                : "S" + UUID.randomUUID().toString();
    }

    @Override
    public abstract Model getModel();

    public interface Factory<T extends SimpleType> {
        boolean supports(Node candidate, XPath xPath);

        static T create<T>(Node node, Context context) {
            List<Factory<? extends SimpleType>> factories = List.of(
                new SimpleTypeRestriction.Factory(),
                new SimpleTypeList.Factory(),
                new SimpleTypeLocalList.Factory()
            );
            for (Factory<? extends SimpleType> factory : factories) {
                if (factory.supports(node, context.getXPath())) {
                    return factory.create(node, context);
                }
            }
            throw new IllegalStateException("Unsupported attribute detected...");
        }
    }
}