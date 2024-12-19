package org.cip4.xjdf.json.openapi

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory
import com.networknt.schema.*
import org.junit.jupiter.api.Assertions
import java.io.ByteArrayOutputStream
import java.net.URI
import java.nio.file.Path

object SchemaSingleton {

    val xjdfSchema: JsonSchema
    val xjmfSchema: JsonSchema
    val openApiSpec: JsonSchema
    private val typeMap: TypeMap
    private val mapper = ObjectMapper(YAMLFactory())
    private val factory: JsonSchemaFactory
    private val config: SchemaValidatorsConfig

    init {
        val jsonConverter = JsonSchemaConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        var xjmf: String
        val xjdf = ByteArrayOutputStream().use { xjdfStream ->
            xjmf = ByteArrayOutputStream().use { xjmfStream ->
                typeMap = jsonConverter.convert(xjdfStream, xjmfStream)
                xjmfStream.toString("UTF-8")
            }
            xjdfStream.toString("UTF-8")
        }

        val openApiConverter = OpenApiConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        val openApi = ByteArrayOutputStream().use { outputStream ->
            openApiConverter.convert(typeMap, outputStream)
            outputStream.toString("UTF-8")
        }

        val configbuilder = SchemaValidatorsConfig.Builder()

        config = configbuilder
            .discriminatorKeywordEnabled(true)
            .build()


        val schemas = mapOf(
            JsonSchemaConverter.XJDF_SCHEMA to xjdf,
            JsonSchemaConverter.XJMF_SCHEMA to xjmf,
            OpenApiConverter.SCHEMA to openApi,
        )

        factory = JsonSchemaFactory.getInstance(
            SpecVersion.VersionFlag.V202012
        ) { builder -> builder.schemaLoaders { schemaLoaders -> schemaLoaders.schemas(schemas) } }

        xjdfSchema = factory.getSchema(URI(JsonSchemaConverter.XJDF_SCHEMA))
        xjmfSchema = factory.getSchema(URI(JsonSchemaConverter.XJMF_SCHEMA))
        openApiSpec = factory.getSchema(URI(OpenApiConverter.SCHEMA))
    }

    private fun getSchemaForPath(path: Path): JsonNode {
        var pathString = path.toString().replace("\\", "/")
        if (!pathString.startsWith("/")) {
            pathString = "/$pathString"
        }

        return openApiSpec.schemaNode["paths"][pathString]
    }

    fun getSchemaForRequest(path: Path): JsonSchema {
        val schema = getSchemaForPath(path)["post"]["requestBody"]["content"].first()["schema"]
        return factory.getSchema(schema, config)
    }

    fun getSchemaForResponse(path: Path, code: Int = 200): JsonSchema {
        val schema = getSchemaForPath(path)["post"]["responses"][code.toString()]["content"].first()["schema"]
        return factory.getSchema(schema, config)
    }

    fun getSchemaForSignal(path: Path): JsonSchema {
        val schema =
            getSchemaForPath(path)["post"]["callbacks"]["signal"].first()["post"]["requestBody"]["content"].first()["schema"]
        try {
            return factory.getSchema(schema, config)
        } catch (e: ClassCastException) {
            throw e
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