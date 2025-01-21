package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.*;

import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

public class OpenApiConverter {

    public static final String SCHEMA = "https://schema.cip4.org/jdfschema_2_2/xjmf.yaml";

    public void convert(Schemas xjdfSchemas, OutputStream outputStream) {
        OpenApi openApi = convertModel(xjdfSchemas);
        Mapper mapper = new Mapper();

        try (OutputStreamWriter writer = new OutputStreamWriter(outputStream, StandardCharsets.UTF_8)) {
            String yamlOutput = mapper.toYamlString(openApi);
            writer.write(yamlOutput);
        } catch (Exception e) {
            throw new RuntimeException("Error writing OpenAPI YAML output", e);
        }
    }

    private OpenApi convertModel(Schemas xjdfSchemas) {
        Schemas schemas = new Schemas("#/components/schemas/");
        schemas.acquire("XJDF", xjdfSchemas.get("XJDF"));
        schemas.acquire("XJMF", xjdfSchemas.get("XJMF"));

        TypeMap typeMap = new TypeMap(schemas);
        PathsGenerator pg = new PathsGenerator(typeMap);
        return new OpenApi(
            "3.1.0",
            info(),
            pg.paths(),
            new Components(schemas)
        );
    }

    public Info info() {
        return new Info(
            "CLOUD-XJDF",
            "The json flavour of XJDF",
            "0.0.1"
        );
    }
}
