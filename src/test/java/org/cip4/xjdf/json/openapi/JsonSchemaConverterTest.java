package org.cip4.xjdf.json.openapi;

import com.networknt.schema.*;
import com.networknt.schema.SpecVersion.VersionFlag;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;
import java.util.stream.Stream;

public class JsonSchemaConverterTest {

    @Test
    public void generatedXjdfJsonSchemaIsValid() {
        JsonSchemaFactory jsonSchemaFactory = JsonSchemaFactory.getInstance(VersionFlag.V202012);
        SchemaValidatorsConfig config = SchemaValidatorsConfig.builder().build();
        JsonSchema schema = jsonSchemaFactory.getSchema(SchemaLocation.of(SchemaId.V202012), config);

        SchemaSingleton.assertValid(
            schema,
            SchemaSingleton.xjdfSchema.getSchemaNode()
        );
    }

    @Test
    public void generatedXjmfJsonSchemaIsValid() {
        JsonSchemaFactory jsonSchemaFactory = JsonSchemaFactory.getInstance(VersionFlag.V202012);
        SchemaValidatorsConfig config = SchemaValidatorsConfig.builder().build();
        JsonSchema schema = jsonSchemaFactory.getSchema(SchemaLocation.of(SchemaId.V202012), config);

        SchemaSingleton.assertValid(
            schema,
            SchemaSingleton.xjmfSchema.getSchemaNode()
        );
    }

    @ParameterizedTest
    @MethodSource("scanForFixtures")
    public void fixturesAreConvertedCorrectly(Path from, Path to) throws Exception {
        JsonSchemaConverter converter = new JsonSchemaConverter(Files.newInputStream(from));
        Mapper mapper = new Mapper();
        Object actualModel = converter.convertModel("Root");

        Assertions.assertEquals(
            Files.readString(to),
            mapper.toYamlString(actualModel)
        );
    }

    public static Stream<Arguments> scanForFixtures() throws Exception {
        Path fixtureDir = Paths.get(JsonSchemaConverterTest.class.getResource("/converter/").toURI());

        return Files.walk(fixtureDir)
            .filter(path -> path.toString().toLowerCase(Locale.getDefault()).endsWith(".xsd"))
            .map(path -> Arguments.of(
                path,
                path.resolveSibling(path.getFileName().toString().replace(".xsd", ".yml"))
            ));
    }
}