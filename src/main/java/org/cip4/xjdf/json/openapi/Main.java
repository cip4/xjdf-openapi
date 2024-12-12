package org.cip4.xjdf.json.openapi;

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
                TypeMap typeMap = jsonConverter.convert(xjdfOutput, xjmfOutput);

                // Convert OpenAPI
                InputStream xjdfXsdForOpenApi = OpenApiConverter.class.getResourceAsStream("/xjdf.xsd");
                if (xjdfXsdForOpenApi == null) {
                    throw new IllegalStateException("Resource '/xjdf.xsd' not found");
                }

                OpenApiConverter converter = new OpenApiConverter(xjdfXsdForOpenApi);
                try (FileOutputStream openApiOutput = new FileOutputStream("build/resources/main/xjdf.yml")) {
                    converter.convert(typeMap, openApiOutput);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
