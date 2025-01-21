package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.Schemas;

import java.io.FileOutputStream;
import java.io.InputStream;

public class Main {
    public static void main(String[] args) {
        try {
            // Load the XJDF XSD resource
            InputStream xjdfXsd = OpenApiConverter.class.getResourceAsStream("/xjdf.xsd");
            if (xjdfXsd == null) {
                throw new IllegalStateException("Resource '/xjdf.xsd' not found");
            }

            // Convert JSON Schema
            JsonSchemaConverter jsonConverter = new JsonSchemaConverter(xjdfXsd);
            try (FileOutputStream xjdfOutput = new FileOutputStream("build/resources/main/xjdf.json");
                 FileOutputStream xjmfOutput = new FileOutputStream("build/resources/main/xjmf.json")) {
                Schemas schemas = jsonConverter.convert(xjdfOutput, xjmfOutput);

                // Convert OpenAPI
                OpenApiConverter converter = new OpenApiConverter();
                try (FileOutputStream openApiOutput = new FileOutputStream("build/resources/main/xjdf.yml")) {
                    converter.convert(schemas, openApiOutput);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
