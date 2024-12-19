package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.Info;
import org.cip4.xjdf.json.openapi.model.OpenApi;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

public class OpenApiConverter {

    private final Document doc;
    private final XPath xPath;
    public static final String SCHEMA = "https://schema.cip4.org/jdfschema_2_2/xjmf.yaml";

    public OpenApiConverter(InputStream sourceXsd) {
        SchemaReader reader = new SchemaReader();
        this.doc = reader.readXml(sourceXsd);
        this.xPath = reader.getXPath();
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
