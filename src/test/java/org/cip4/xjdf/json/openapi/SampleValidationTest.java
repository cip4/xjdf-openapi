package org.cip4.xjdf.json.openapi;

import com.networknt.schema.JsonSchema;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;
import java.util.stream.Stream;

public class SampleValidationTest {

    @ParameterizedTest
    @MethodSource("scanForValidXjmf")
    public void sampleIsValid(Path requestPath, Path from) throws Exception {
        JsonSchema schema = SchemaSingleton.getSchemaForRequest(requestPath);
        SchemaSingleton.assertValidJson(schema, Files.readString(from));
    }

    @ParameterizedTest
    @MethodSource("scanForInvalidXjdf")
    public void xjdfIsInvalid(Path requestPath, Path from) throws Exception {
        JsonSchema schema = SchemaSingleton.getSchemaForRequest(requestPath);
        SchemaSingleton.assertInvalidJson(schema, Files.readString(from));
    }

    public static Stream<Arguments> scanForValidXjmf() throws Exception {
        Path fixtureDir = Paths.get(SampleValidationTest.class.getResource("/samples/").toURI());

        return Files.walk(fixtureDir)
            .filter(path -> path.toString().toLowerCase(Locale.getDefault()).endsWith(".json"))
            .map(path -> Arguments.of(
                fixtureDir.relativize(path).getParent(),
                path
            ));
    }

    public static Stream<Arguments> scanForInvalidXjdf() throws Exception {
        Path fixtureDir = Paths.get(SampleValidationTest.class.getResource("/invalid/").toURI());

        return Files.walk(fixtureDir)
            .filter(path -> path.toString().toLowerCase(Locale.getDefault()).endsWith(".json"))
            .map(path -> Arguments.of(
                fixtureDir.relativize(path).getParent(),
                path
            ));
    }
}