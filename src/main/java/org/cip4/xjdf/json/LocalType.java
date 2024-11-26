package org.cip4.xjdf.json;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.cip4.xjdf.json.model.Model;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;

@Data
@AllArgsConstructor
public class LocalType extends AttributeType {
    private Node node;
    private Context context;

    public Node getSimpleType() {
        try {
            return (Node) context.getXPath().evaluate("xs:simpleType", node, XPathConstants.NODE);
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating XPath expression", e);
        }
    }

    @Override
    public Model getModel() {
        return SimpleType.Factory.create(getSimpleType(), context).getModel();
    }

    public static class Factory implements AttributeType.Factory<LocalType> {
        @Override
        public boolean supports(Node candidate, XPath xPath) {
            try {
                NodeList nodeList = (NodeList) xPath.evaluate("xs:simpleType", candidate, XPathConstants.NODESET);
                return nodeList.getLength() > 0;
            } catch (Exception e) {
                throw new RuntimeException("Error evaluating XPath expression", e);
            }
        }

        @Override
        public LocalType create(Node node, Context context) {
            return LocalType.builder().node(node).context(context).build();
        }
    }
}