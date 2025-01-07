package org.cip4.xjdf.json.openapi;


import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NamedColor extends SimpleType {

    private final Context context;

    public NamedColor(Node node, Context context) {
        super(node);
        this.context = context;
    }

    @Override
    public Model getModel() {
        List<String> values = new ArrayList<>();
        try {
            NodeList nodes = (NodeList) context.getXPath().evaluate(
                "xs:restriction/xs:pattern/@value",
                node,
                XPathConstants.NODESET
            );

            for (int i = 0; i < nodes.getLength(); i++) {
                values.add(simplifyCaseInsensitiveRegex(nodes.item(i).getNodeValue()));
            }
        } catch (Exception e) {
            throw new RuntimeException("Error evaluating pattern", e);
        }


        return new Model(
            getName(),
            new Schema()
                .type("string")
                .enumValues(values)
        );
    }

    public static String simplifyCaseInsensitiveRegex(String input) {
        Pattern pattern = Pattern.compile("\\((\\w)\\|\\1\\)", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(input);

        StringBuilder result = new StringBuilder();
        int lastIndex = 0;

        while (matcher.find()) {
            result.append(input, lastIndex, matcher.start());
            result.append(matcher.group(1).toLowerCase());
            lastIndex = matcher.end();
        }

        result.append(input.substring(lastIndex));

        String simplified = result.toString();
        if (simplified.startsWith("(") && simplified.endsWith(")")) {
            simplified = simplified.substring(1, simplified.length() - 1);
        }

        return simplified;
    }

    public static class Factory implements SimpleType.Factory<NamedColor> {
        @Override
        public boolean supports(Node candidate, XPath xPath) {
            Node nameNode = candidate.getAttributes().getNamedItem("name");
            if (nameNode == null) {
                return false;
            }
            return Objects.equals(nameNode.getNodeValue(), "NamedColor");
        }

        @Override
        public NamedColor create(Node node, Context context) {
            return new NamedColor(node, context);
        }
    }
}
