package org.cip4.xjdf.json.openapi;

import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import org.cip4.xjdf.json.openapi.model.Info;
import org.cip4.xjdf.json.openapi.model.OpenApi;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

public class OpenApiConverter {

    private final Document doc;
    private final XPath xPath;

    public OpenApiConverter(InputStream sourceXsd) {
        this.doc = readXml(sourceXsd);
        XPathFactory xpFactory = XPathFactory.newInstance();
        this.xPath = xpFactory.newXPath();
        this.xPath.setNamespaceContext(new XsdNamespaceContext());
    }

    private Document readXml(InputStream sourceXsd) {
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            dbFactory.setNamespaceAware(true);
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            InputSource xmlInput = new InputSource(sourceXsd);
            return dBuilder.parse(xmlInput);
        } catch (Exception e) {
            throw new RuntimeException("Error reading XML input", e);
        }
    }

    public void convert(TypeMap typeMap, OutputStream outputStream) {
        OpenApi openApi = convertModel(typeMap);
        Mapper mapper = new Mapper();

        // Serialize to YAML (Use a suitable Java YAML library, e.g., SnakeYAML)
        try (OutputStreamWriter writer = new OutputStreamWriter(outputStream)) {
            String yamlOutput = mapper.toYamlString(openApi); // Replace with your YAML serialization logic
            writer.write(yamlOutput);
        } catch (Exception e) {
            throw new RuntimeException("Error writing OpenAPI YAML output", e);
        }
    }

    private OpenApi convertModel(TypeMap typeMap) {
        PathsGenerator pg = new PathsGenerator(typeMap);
        return new OpenApi(
            "3.1.0",
            info(),
            pg.paths()
        );
    }

    private void convertTopLevelSimpleTypes(TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList elements = (NodeList) xPath.evaluate(
                "/xs:schema/xs:simpleType",
                doc,
                XPathConstants.NODESET
            );

            for (int i = 0; i < elements.getLength(); i++) {
                SimpleType simpleType = SimpleType.create(
                    elements.item(i),
                    new Context(xPath, nameTranslator, elements.item(i))
                );
                schemas.put(simpleType.getName(), simpleType.getModel().getSchema());
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for simple types", e);
        }
    }

    private void convertTopLevelElements(TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList elements = (NodeList) xPath.evaluate(
                "/xs:schema/xs:element",
                doc,
                XPathConstants.NODESET
            );

            for (int i = 0; i < elements.getLength(); i++) {
                NamedElement namedElement = new NamedElement(new Context(xPath, nameTranslator, elements.item(i)));
                schemas.put(namedElement.getModel().getName(), namedElement.getModel().getSchema());
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for top-level elements", e);
        }
    }

    private void convertTopLevelComplexTypes(TypeTranslator nameTranslator, Schemas schemas) {
        try {
            NodeList elements = (NodeList) xPath.evaluate(
                "/xs:schema/xs:complexType",
                doc,
                XPathConstants.NODESET
            );

            for (int i = 0; i < elements.getLength(); i++) {
                ComplexType complexType = new ComplexType(new Context(xPath, nameTranslator, elements.item(i)));
                schemas.put(complexType.getModel().getName(), complexType.getModel().getSchema());
            }
        } catch (XPathExpressionException e) {
            throw new RuntimeException("Error evaluating XPath for complex types", e);
        }
    }

    public Info info() {
        return new Info(
            "CLOUD-XJDF",
            "The json flavour of XJDF",
            "0.0.1"
        );
    }
}
