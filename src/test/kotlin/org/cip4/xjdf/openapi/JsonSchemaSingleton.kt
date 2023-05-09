package org.cip4.xjdf.openapi

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory
import com.networknt.schema.JsonSchema
import com.networknt.schema.JsonSchemaFactory
import com.networknt.schema.SchemaValidatorsConfig
import com.networknt.schema.SpecVersion
import java.io.ByteArrayOutputStream


object JsonSchemaSingleton {

    val schema : JsonSchema
    private val mapper = ObjectMapper(YAMLFactory())

    init {
        val stream = ByteArrayOutputStream()

        val jsonConverter = JsonSchemaConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        stream.use {
            jsonConverter.convert(it)
        }

        val config = SchemaValidatorsConfig()
        config.isOpenAPI3StyleDiscriminators = true
        val factory = JsonSchemaFactory.getInstance(SpecVersion.VersionFlag.V202012)
        schema = factory.getSchema(
            mapper.readTree(stream.toByteArray()),
            config
        )
    }

}