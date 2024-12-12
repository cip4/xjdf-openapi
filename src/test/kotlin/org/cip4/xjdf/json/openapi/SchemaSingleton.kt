package org.cip4.xjdf.json.openapi

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory
import com.google.common.jimfs.Configuration
import com.google.common.jimfs.Jimfs
import com.networknt.schema.JsonSchema
import com.networknt.schema.JsonSchemaFactory
import com.networknt.schema.SchemaValidatorsConfig
import com.networknt.schema.SpecVersion
import com.networknt.schema.uri.URLFactory
import com.networknt.schema.uri.URLFetcher
import org.junit.jupiter.api.Assertions
import java.nio.file.Path
import java.nio.file.Paths
import kotlin.io.path.outputStream
import kotlin.io.path.readBytes


object SchemaSingleton {

    val xjdfSchema: JsonSchema
    val xjmfSchema: JsonSchema
    val openApiSpec: JsonSchema
    private val typeMap: TypeMap
    private val mapper = ObjectMapper(YAMLFactory())
    private val factory: JsonSchemaFactory
    private val config: SchemaValidatorsConfig

    init {
        val fs = Jimfs.newFileSystem(Configuration.unix())
        val xjdfPath = fs.getPath("xjdf.json")
        val xjmfPath = fs.getPath("xjmf.json")
        val openapiPath = fs.getPath("openapi.yml")

        val jsonConverter = JsonSchemaConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        xjdfPath.outputStream().use { xjdfStream ->
            xjmfPath.outputStream().use { xjmfStream ->
                typeMap = jsonConverter.convert(xjdfStream, xjmfStream)
            }
        }

        val openApiConverter = OpenApiConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        openapiPath.outputStream().use {
            openApiConverter.convert(typeMap, it)
        }

        config = SchemaValidatorsConfig()
        config.isOpenAPI3StyleDiscriminators = true
        config.addUriTranslator { uri ->
            if (uri.toString().startsWith("https://schema.cip4.org/")
            ) {
                fs.getPath(Paths.get(uri.path).fileName.toString()).toUri()
            } else {
                uri
            }
        }


        factory = buildJsonSchemaFactory()
        xjdfSchema = factory.getSchema(
            mapper.readTree(xjdfPath.readBytes()),
            config
        )
        xjmfSchema = factory.getSchema(
            mapper.readTree(xjmfPath.readBytes()),
            config
        )
        openApiSpec = factory.getSchema(
            mapper.readTree(openapiPath.readBytes()),
            config
        )
    }

    private fun buildJsonSchemaFactory(): JsonSchemaFactory {
        val jsonSchemaVersion = JsonSchemaFactory.checkVersion(SpecVersion.VersionFlag.V202012)
        val metaSchema = jsonSchemaVersion.instance
        return JsonSchemaFactory.builder()
            .defaultMetaSchemaURI(metaSchema.uri)
            .addMetaSchema(metaSchema)
            .uriFactory(URLFactory(), setOf("jimfs"))
            .uriFetcher(URLFetcher(), setOf("jimfs"))
            .build()
    }

    private fun getSchemaForPath(path: Path): JsonNode {
        return openApiSpec.schemaNode["paths"][path.toString().replace("\\", "/")]
    }

    fun getSchemaForRequest(path: Path): JsonSchema {
        val schema = getSchemaForPath(path)["post"]["requestBody"]["content"].first()["schema"]
        return factory.getSchema(schema, config)
    }

    fun getSchemaForResponse(path: Path, code: Int = 200): JsonSchema {
        val schema = getSchemaForPath(path)["post"]["responses"][code.toString()]["content"].first()["schema"]
        return factory.getSchema(schema, config)
    }

    fun getSchemaForSignal(path: Path, code: Int = 200): JsonSchema {
        val schema = getSchemaForPath(path)["post"]["callbacks"]["signal"].first()["post"]["requestBody"]["content"].first()["schema"]
        try {
            return factory.getSchema(schema, config)
        } catch (e: ClassCastException) {
            throw e;
        }
    }

    fun assertValid(schema: JsonSchema, json: String) {
        val result = schema.validate(mapper.readTree(json))
        Assertions.assertTrue(
            result.isEmpty(),
            json + "\n" + result.joinToString("\n")
        )
    }

    fun assertInvalid(schema: JsonSchema, json: String) {
        val result = schema.validate(mapper.readTree(json))
        Assertions.assertFalse(result.isEmpty(), json)
    }

}