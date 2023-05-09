package org.cip4.xjdf.openapi

import com.google.common.jimfs.Configuration
import com.google.common.jimfs.Jimfs
import org.openapi4j.parser.OpenApi3Parser
import org.openapi4j.parser.model.v3.OpenApi3
import java.nio.file.FileSystem
import kotlin.io.path.outputStream


object OpenApiSpecSingleton {

    val openapi: OpenApi3

    init {
        val fs: FileSystem = Jimfs.newFileSystem(Configuration.unix())
        val schemaFile = fs.getPath("spec.yaml")

        val jsonConverter = OpenApiConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)
        schemaFile.outputStream().use {
            jsonConverter.convert(it)
        }
        openapi = OpenApi3Parser().parse(schemaFile.toUri().toURL(), false)
    }

}