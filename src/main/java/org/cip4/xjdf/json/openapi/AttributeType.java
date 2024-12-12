package org.cip4.xjdf.json.openapi;

import org.w3c.dom.Node;

import javax.xml.xpath.XPath;
import java.util.Arrays;
import java.util.List;

public abstract class AttributeType implements Modelable {

    public interface Factory<T extends AttributeType> {
        boolean supports(Node candidate, XPath xPath);

        T create(Node node, Context context);
    }

    static AttributeType create(Node node, Context context) {
        List<Factory<? extends AttributeType>> factories = Arrays.asList(
            new AttributeReferencedType.Factory(),
            new LocalType.Factory()
        );

        return factories.stream()
                        .filter(factory -> factory.supports(node, context.getXPath()))
                        .findFirst()
                        .orElseThrow(() -> new IllegalStateException("Unsupported attribute detected..."))
                        .create(node, context);
    }
}
