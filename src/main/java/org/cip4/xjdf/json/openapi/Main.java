package org.cip4.xjdf.json.openapi;

import lombok.SneakyThrows;
import org.cip4.xjdf.json.openapi.model.Schemas;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;

public class Main {
    public static void main(String[] args) {
        try {
            convert("2_2");
            convert("2_x");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @SneakyThrows
    private static void convert(String version) {
        URL schemaUri = new URL("https://schema.cip4.org/jdfschema_%s/xjdf.xsd".formatted(version));

        // Load the XJDF XSD resource
        try (InputStream xjdfXsd = schemaUri.openStream();
             FileOutputStream xjdfOutput = new FileOutputStream("build/resources/main/xjdf_%s.json".formatted(version));
             FileOutputStream xjmfOutput = new FileOutputStream("build/resources/main/xjmf_%s.json".formatted(version));
             FileOutputStream openApiOutput = new FileOutputStream("build/resources/main/xjdf_%s.yml".formatted(version))
        ) {
            if (xjdfXsd == null) {
                throw new IllegalStateException("Resource '%s' not found".formatted(schemaUri));
            }

            // Convert JSON Schema
            JsonSchemaConverter jsonConverter = new JsonSchemaConverter(xjdfXsd);
            Schemas schemas = jsonConverter.convert(xjdfOutput, xjmfOutput);

            // Convert OpenAPI
            OpenApiConverter converter = new OpenApiConverter();
            converter.convert(schemas, openApiOutput);
        }

    }

}
