package org.cip4.xjdf.json;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Node;

import javax.xml.xpath.XPath;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public abstract class AttributeType implements Modelable {

    private Node node;
    private Context context;

    public interface Factory<T extends AttributeType> {
        boolean supports(Node candidate, XPath xPath);
        T create(Node node, Context context);

        static AttributeType create(Node node, Context context) {
            Factory<?>[] factories = new Factory[]{
                new AttributeReferencedType.Factory(),
                new LocalType.Factory()
            };
            for (Factory<?> factory : factories) {
                if (factory.supports(node, context.getXPath())) {
                    return factory.create(node, context);
                }
            }
            throw new IllegalStateException("Unsupported attribute detected...");
        }
    }
}