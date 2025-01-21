package org.cip4.xjdf.json.openapi;

import lombok.SneakyThrows;
import org.w3c.dom.*;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;
import java.io.InputStream;

public class SchemaReader {

    private XPath xPath;

    public Document readXml(InputStream sourceXsd) {
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            dbFactory.setNamespaceAware(true);
            InputSource xmlInput = new InputSource(sourceXsd);
            return preprocess(dbFactory.newDocumentBuilder().parse(xmlInput));
        } catch (Exception e) {
            throw new RuntimeException("Error reading XML input", e);
        }
    }

    public XPath getXPath() {
        if (xPath == null) {
            XPathFactory xpFactory = XPathFactory.newInstance();
            xPath = xpFactory.newXPath();
            xPath.setNamespaceContext(new XsdNamespaceContext());
        }
        return xPath;
    }

    @SneakyThrows
    private Document preprocess(Document document) {
        XPath xPath = getXPath();

        // remove deprecated glue element (https://cip4.atlassian.net/browse/JDF-889)
        Node glue = (Node) xPath.evaluate(
            "//xs:complexType[@name=\"BoxFoldingParams\"]//xs:choice/xs:element[@ref=\"Glue\"]",
            document,
            XPathConstants.NODE
        );
        if (glue != null) {
            glue.getParentNode().removeChild(glue);
        }

        // simplify trivial choice (https://cip4.atlassian.net/browse/JDF-889)
        NodeList simpleChoices = (NodeList) xPath.evaluate(
            "//xs:choice[count(xs:element | xs:any)=1]",
            document,
            XPathConstants.NODESET
        );
        for (int i = 0; i < simpleChoices.getLength(); i++) {
            Node simpleChoice = simpleChoices.item(i);
            Node onlyChoice = (Node) xPath.evaluate(
                "xs:element | xs:any",
                simpleChoice,
                XPathConstants.NODE
            );
            if (simpleChoice.getAttributes() != null) {
                NamedNodeMap attrs = simpleChoice.getAttributes();
                if (attrs.getNamedItem("minOccurs") != null) {
                    Node attr = attrs.removeNamedItem("minOccurs");
                    document.importNode(attr, true);
                    onlyChoice.getAttributes().setNamedItem(attr);
                }
                if (attrs.getNamedItem("maxOccurs") != null) {
                    Node attr = attrs.removeNamedItem("maxOccurs");
                    document.importNode(attr, true);
                    onlyChoice.getAttributes().setNamedItem(attr);
                }
            }

            simpleChoice.getParentNode().replaceChild(onlyChoice, simpleChoice);
        }

        return document;
    }
}
