package org.cip4.xjdf.openapi

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
import java.io.ByteArrayOutputStream
import java.nio.file.Paths
import kotlin.io.path.outputStream
import kotlin.io.path.readBytes


object JsonSchemaSingleton {

    val xjdfSchema: JsonSchema
    val xjmfSchema: JsonSchema
    private val mapper = ObjectMapper(YAMLFactory())

    init {
        val fs = Jimfs.newFileSystem(Configuration.unix())
        val xjdfPath = fs.getPath("xjdf.json")
        val xjmfStream = ByteArrayOutputStream()

        val jsonConverter = JsonSchemaConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        xjdfPath.outputStream().use { xjdfStream -> jsonConverter.convert(xjdfStream, xjmfStream) }

        val config = SchemaValidatorsConfig()
        config.isOpenAPI3StyleDiscriminators = true
        config.addUriTranslator { uri ->
            if (uri.toString().startsWith("https://schema.cip4.org/jdfschema_2_2/")
            ) {
                fs.getPath(Paths.get(uri.path).fileName.toString()).toUri()
            } else {
                uri
            }
        }

        val factory = buildJsonSchemaFactory()
        xjdfSchema = factory.getSchema(
            mapper.readTree(xjdfPath.readBytes()),
            config
        )
        xjmfSchema = factory.getSchema(
            mapper.readTree(xjmfStream.toByteArray()),
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

}