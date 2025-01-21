package org.cip4.xjdf.json.openapi;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.networknt.schema.*;
import org.cip4.xjdf.json.openapi.model.Schemas;
import org.junit.jupiter.api.Assertions;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.Map;

public class SchemaSingleton {

    public static final JsonSchema xjdfSchema;
    public static final JsonSchema xjmfSchema;
    public static final JsonSchema openApiSpec;
    private static final ObjectMapper jsonMapper = new ObjectMapper(new JsonFactory());
    private static final JsonSchemaFactory factory;
    private static final SchemaValidatorsConfig config;

    static {
        try {
            InputStream xjdfStream = OpenApiConverter.class.getResourceAsStream("/xjdf.xsd");
            JsonSchemaConverter jsonConverter = new JsonSchemaConverter(xjdfStream);
            String xjmf, xjdf;
            Schemas xjdfSchemas;
            try (
                ByteArrayOutputStream xjdfOutputStream = new ByteArrayOutputStream();
                ByteArrayOutputStream xjmfOutputStream = new ByteArrayOutputStream()
            ) {
                xjdfSchemas = jsonConverter.convert(xjdfOutputStream, xjmfOutputStream);
                xjmf = xjmfOutputStream.toString(StandardCharsets.UTF_8);
                xjdf = xjdfOutputStream.toString(StandardCharsets.UTF_8);
            }

            OpenApiConverter openApiConverter = new OpenApiConverter();
            String openApi;
            try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
                openApiConverter.convert(xjdfSchemas, outputStream);
                openApi = outputStream.toString(StandardCharsets.UTF_8);
            }

            SchemaValidatorsConfig.Builder configBuilder = new SchemaValidatorsConfig.Builder();
            config = configBuilder
                .discriminatorKeywordEnabled(true)
                .build();

            Map<String, String> schemas = Map.of(
                JsonSchemaConverter.XJDF_SCHEMA, xjdf,
                JsonSchemaConverter.XJMF_SCHEMA, xjmf,
                OpenApiConverter.SCHEMA, openApi
            );

            factory = JsonSchemaFactory.getInstance(
                SpecVersion.VersionFlag.V202012,
                builder -> builder.schemaLoaders(schemaLoaders -> schemaLoaders.schemas(schemas))
            );

            xjdfSchema = factory.getSchema(SchemaLocation.of(JsonSchemaConverter.XJDF_SCHEMA));
            xjmfSchema = factory.getSchema(SchemaLocation.of(JsonSchemaConverter.XJMF_SCHEMA));
            openApiSpec = factory.getSchema(SchemaLocation.of(OpenApiConverter.SCHEMA), config);
        } catch (Exception e) {
            throw new RuntimeException("Failed to initialize schemas", e);
        }
    }

    private SchemaSingleton() {
    }

    private static JsonNodePath getJsonPathForPath(Path path) {
        String pathString = path.toString().replace("\\", "/");
        if (!pathString.startsWith("/")) {
            pathString = "/" + pathString;
        }

        return new JsonNodePath(PathType.JSON_POINTER)
            .append("paths")
            .append(pathString);
    }

    public static JsonSchema getSchemaForRequest(Path path) {
        return openApiSpec.getRefSchema(
            getJsonPathForPath(path)
                .append("post")
                .append("requestBody")
                .append("content")
                .append("application/vnd.cip4-xjmf+json")
                .append("schema")
        );
    }

    public static JsonSchema getSchemaForResponse(Path path, int code) {
        return openApiSpec.getRefSchema(
            getJsonPathForPath(path)
                .append("post")
                .append("responses")
                .append(Integer.toString(code))
                .append("content")
                .append("application/vnd.cip4-xjmf+json")
                .append("schema")
        );
    }

    public static JsonSchema getSchemaForSignal(Path path) {
        JsonNodePath signalPath = getJsonPathForPath(path)
            .append("post")
            .append("callbacks")
            .append("signal");

        JsonNode signalNode = openApiSpec.getRefSchema(signalPath).getSchemaNode();
        String elementName = signalNode.fieldNames().next();

        return openApiSpec.getRefSchema(
            signalPath
                .append(elementName)
                .append("post")
                .append("requestBody")
                .append("content")
                .append("application/vnd.cip4-xjmf+json")
                .append("schema")
        );
    }

    public static void assertValidJson(JsonSchema schema, String json) {
        try {
            assertValid(schema, jsonMapper.readTree(json));
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to validate JSON", e);
        }

    }

    public static void assertValid(JsonSchema schema, JsonNode json) {
        var result = schema.validate(json);
        Assertions.assertTrue(
            result.isEmpty(),
            json.toPrettyString() + "\n" + String.join("\n", result.stream().map(ValidationMessage::toString).toList())
        );
    }

    public static void assertInvalidJson(JsonSchema schema, String json) {
        try {
            var result = schema.validate(jsonMapper.readTree(json));
            Assertions.assertFalse(result.isEmpty(), json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to validate JSON", e);
        }
    }
}