package org.cip4.xjdf.json.openapi;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;
import java.util.stream.Stream;

import org.cip4.jdflib.util.UrlUtil;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import com.networknt.schema.JsonSchema;
import com.networknt.schema.JsonSchemaFactory;
import com.networknt.schema.SchemaId;
import com.networknt.schema.SchemaLocation;
import com.networknt.schema.SchemaValidatorsConfig;
import com.networknt.schema.SpecVersion.VersionFlag;

public class JsonSchemaConverterTest
{

	static protected final String sm_dirTestData = getTestDataDir();
	static protected final String sm_dirTestDataTemp = sm_dirTestData + "temp" + File.separator;

	private static String getTestDataDir()
	{
		return JsonSchemaConverterTest.class.getResource("/data").getPath() + File.separator;

	}

	@Test
	public void generatedXjdfJsonSchemaIsValid()
	{
		final JsonSchemaFactory jsonSchemaFactory = JsonSchemaFactory.getInstance(VersionFlag.V202012);
		final SchemaValidatorsConfig config = SchemaValidatorsConfig.builder().build();
		final JsonSchema schema = jsonSchemaFactory.getSchema(SchemaLocation.of(SchemaId.V202012), config);

		SchemaSingleton.assertValid(schema, SchemaSingleton.xjdfSchema.getSchemaNode());
	}

	@Test
	public void generatedXjmfJsonSchemaIsValid()
	{
		final JsonSchemaFactory jsonSchemaFactory = JsonSchemaFactory.getInstance(VersionFlag.V202012);
		final SchemaValidatorsConfig config = SchemaValidatorsConfig.builder().build();
		final JsonSchema schema = jsonSchemaFactory.getSchema(SchemaLocation.of(SchemaId.V202012), config);

		SchemaSingleton.assertValid(schema, SchemaSingleton.xjmfSchema.getSchemaNode());
	}

	@ParameterizedTest
	@MethodSource("scanForFixtures")
	public void fixturesAreConvertedCorrectly(Path from, Path to) throws Exception
	{
		final JsonSchemaConverter converter = new JsonSchemaConverter(Files.newInputStream(from));
		final Mapper mapper = new Mapper();
		final Object actualModel = converter.convertModel("Root");

		Assertions.assertEquals(Files.readString(to), mapper.toYamlString(actualModel));
	}

	public static Stream<Arguments> scanForFixtures() throws Exception
	{
		final Path fixtureDir = Paths.get(JsonSchemaConverterTest.class.getResource("/converter/").toURI());

		return Files.walk(fixtureDir).filter(path -> path.toString().toLowerCase(Locale.getDefault()).endsWith(".xsd"))
				.map(path -> Arguments.of(path, path.resolveSibling(path.getFileName().toString().replace(".xsd", ".yml"))));
	}

	@Test
	void testCPICS() throws Exception
	{
		final URL schemaUri = new URL(UrlUtil.fileToUrl(new File(sm_dirTestData + "xmlschema/ConventionalPrintingICS1.xsd"), false));

		// Load the XJDF XSD resource
		final InputStream xjdfXsd = schemaUri.openStream();
		final String json = sm_dirTestDataTemp + "ConventionalPrintingICS1.json";
		new File(json).getParentFile().mkdirs();
		final FileOutputStream xjdfOutput = new FileOutputStream(json);

		// Convert JSON Schema
		final JsonSchemaConverter jsonConverter = new JsonSchemaConverter(xjdfXsd);
		jsonConverter.convert(xjdfOutput, null);

	}

}
