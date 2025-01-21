package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.Model;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;
import java.io.InputStream;
import java.util.Map;

public class ComplexTypeTest {
    private final TypeTranslator nameTranslator = new TypeTranslator("#/defs");

    @Test
    public void emptyComplexTypeIsHandled() throws Exception {
        Document doc;
        try (InputStream is = getClass().getResourceAsStream("/abstract-element.xml")) {
            doc = readXml(is);
        }

        XPathFactory xpFactory = XPathFactory.newInstance();
        javax.xml.xpath.XPath xPath = xpFactory.newXPath();
        xPath.setNamespaceContext(new XsdNamespaceContext());

        ComplexType tle = new ComplexType(
            new Context(
                xPath,
                nameTranslator,
                (Node) xPath.evaluate("/xs:schema/xs:complexType[@name='AbstractType']", doc, XPathConstants.NODE)
            )
        );
        Model model = tle.getModel();
        Assertions.assertEquals(
            new Model(
                "AbstractType",
                new Schema().type("object")
            ),
            model
        );
    }

    @Test
    public void inheritingTypeReferencesParent() throws Exception {
        Document doc;
        try (InputStream is = getClass().getResourceAsStream("/abstract-element.xml")) {
            doc = readXml(is);
        }

        XPathFactory xpFactory = XPathFactory.newInstance();
        javax.xml.xpath.XPath xPath = xpFactory.newXPath();
        xPath.setNamespaceContext(new XsdNamespaceContext());

        ComplexType tle = new ComplexType(
            new Context(
                xPath,
                nameTranslator,
                (Node) xPath.evaluate("/xs:schema/xs:complexType[@name='Impl1Type']", doc, XPathConstants.NODE)
            )
        );
        Model model = tle.getModel();
        Assertions.assertEquals(
            new Model(
                "Impl1Type",
                new Schema()
                    .allOf(
                        nameTranslator.translate("AbstractType"),
                        new Schema()
                            .type("object")
                            .properties(new Schemas(Map.of(
                                "Foo", new Schema().type("string")
                            )))
                    )
            ),
            model
        );
    }

    private Document readXml(InputStream sourceXsd) throws Exception {
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        dbFactory.setNamespaceAware(true);
        javax.xml.parsers.DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        InputSource xmlInput = new InputSource(sourceXsd);

        return dBuilder.parse(xmlInput);
    }
}