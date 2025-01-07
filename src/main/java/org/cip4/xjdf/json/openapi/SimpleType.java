package org.cip4.xjdf.json.openapi;

import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Model;
import org.jetbrains.annotations.NotNull;
import org.w3c.dom.Node;

import javax.xml.xpath.XPath;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
public abstract class SimpleType implements Modelable {
    @NotNull
    protected Node node;

    public String getName() {
        return node.getAttributes().getNamedItem("name") != null
            ? node.getAttributes().getNamedItem("name").getNodeValue()
            : "S" + UUID.randomUUID();
    }

    @Override
    public abstract Model getModel();

    public interface Factory<T extends SimpleType> {
        boolean supports(Node candidate, XPath xPath);

        T create(Node node, Context context);
    }

    static SimpleType create(Node node, Context context) {
        List<Factory<? extends SimpleType>> factories = List.of(
            new NamedColor.Factory(),
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