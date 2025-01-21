package org.cip4.xjdf.json.openapi;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.networknt.schema.JsonSchema;
import org.cip4.jdflib.core.KElement;
import org.cip4.lib.jdf.jsonutil.JSONWriter;
import org.json.simple.JSONObject;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class RoundtripTest {

    private final ObjectMapper jsonMapper = new ObjectMapper(new JsonFactory()).enable(SerializationFeature.INDENT_OUTPUT);

    @ParameterizedTest
    @MethodSource("scanForXjmfSamples")
    public void invocationIsValid(Path from) throws Exception {
        JSONWriter jsonWriter = new JSONWriter();
        jsonWriter.setXJDF(true, true);
        jsonWriter.setJsonRoot(JSONWriter.eJSONRoot.schema);
        jsonWriter.setPrefix(JSONWriter.eJSONPrefix.none);

        KElement xjmf = KElement.parseFile(from.toString());
        List<JSONObject> o = jsonWriter.splitConvert(xjmf);
        for (JSONObject jsonObject : o) {
            MessageType messageType = guessMessageTypeFromXjmf(xjmf);

            JsonSchema schema = switch (messageType.type()) {
                case REQUEST -> SchemaSingleton.getSchemaForRequest(messageType.path());
                case RESPONSE -> SchemaSingleton.getSchemaForResponse(messageType.path(), 200);
                case SIGNAL -> SchemaSingleton.getSchemaForSignal(messageType.path());
                default -> throw new RuntimeException("Unsupported type '" + messageType + "'");
            };

            SchemaSingleton.assertValidJson(schema, prettyPrint(jsonObject));
        }
    }

    @ParameterizedTest
    @MethodSource("scanForXjmfSamples")
    public void xjmfIsValid(Path from) throws Exception {
        JSONWriter jsonWriter = new JSONWriter();
        jsonWriter.setXJDF(true, true);
        jsonWriter.setJsonRoot(JSONWriter.eJSONRoot.schema);
        jsonWriter.setPrefix(JSONWriter.eJSONPrefix.none);

        KElement xjmf = KElement.parseFile(from.toString());
        List<JSONObject> o = jsonWriter.splitConvert(xjmf);
        for (JSONObject jsonObject : o) {
            SchemaSingleton.assertValidJson(SchemaSingleton.xjmfSchema, prettyPrint(jsonObject));
        }
    }

    @ParameterizedTest
    @MethodSource("scanForXjdfSamples")
    public void xjdfSampleIsValid(Path from) throws Exception {
        JSONWriter jsonWriter = new JSONWriter();
        jsonWriter.setXJDF(true, true);
        jsonWriter.setJsonRoot(JSONWriter.eJSONRoot.schema);
        jsonWriter.setPrefix(JSONWriter.eJSONPrefix.none);

        KElement xjdf = KElement.parseFile(from.toString());
        JSONObject json = jsonWriter.convert(xjdf);
        SchemaSingleton.assertValidJson(SchemaSingleton.xjdfSchema, prettyPrint(json));
    }

    public static Stream<Arguments> scanForXjmfSamples() throws Exception {
        Path fixtureDir = Paths.get(RoundtripTest.class.getResource("/xjmf/").toURI());

        return Files.walk(fixtureDir)
            .filter(path -> path.toString().toLowerCase(Locale.getDefault()).endsWith(".xjmf"))
            .map(Arguments::of);
    }

    public static Stream<Arguments> scanForXjdfSamples() throws Exception {
        Path fixtureDir = Paths.get(RoundtripTest.class.getResource("/xjmf/").toURI());

        return Files.walk(fixtureDir)
            .filter(path -> path.toString().toLowerCase(Locale.getDefault()).endsWith(".xjdf"))
            .map(Arguments::of);
    }

    private MessageType guessMessageTypeFromXjmf(KElement xjmf) {
        for (KElement child : xjmf.getChildList()) {
            try {
                return MessageType.fromElement(child.getLocalName());
            } catch (RuntimeException e) {
                // Continue to the next child
            }
        }

        throw new RuntimeException("Could not map xjdf to path; children: " + xjmf.getChildList().stream()
            .map(KElement::getLocalName)
            .collect(Collectors.joining(", ")));
    }

    private String prettyPrint(JSONObject jsonObject) throws Exception {
        JsonNode jsonElement = jsonMapper.readTree(jsonObject.toJSONString());
        return jsonMapper.writeValueAsString(jsonElement);
    }
}