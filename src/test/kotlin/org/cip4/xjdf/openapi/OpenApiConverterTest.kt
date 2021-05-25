package org.cip4.xjdf.openapi

import com.charleskorn.kaml.Yaml
import com.google.common.jimfs.Configuration
import com.google.common.jimfs.Jimfs
import org.cip4.xjdf.openapi.model.Components
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import org.openapi4j.parser.OpenApi3Parser
import java.nio.file.FileSystem
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.util.stream.Stream
import java.util.stream.StreamSupport

internal class OpenApiConverterTest {

    @ParameterizedTest
    @MethodSource("scanForFixtures")
    internal fun `fixtures are converted correctly`(from: Path, to: Path) {
        val converter = OpenApiConverter(Files.newInputStream(from))

        val actualModel = converter.convertModel()
        val expectedModel = Yaml.default.decodeFromString(Components.serializer(), Files.readString(to))

        assertEquals(
            expectedModel,
            actualModel.components
        )
    }

    companion object {
        @JvmStatic
        fun scanForFixtures(): Stream<Arguments> {
            val fixtureDir = Paths.get(this::class.java.getResource("/converter/").toURI())
            return StreamSupport.stream(Files.newDirectoryStream(fixtureDir, "*.xsd").spliterator(), false)
                .map { path ->
                    Arguments.of(
                        path,
                        path.resolveSibling(path.fileName.toString().replace(".xsd", ".yml"))
                    )
                }
        }
    }

    @Test
    internal fun generatedSpecIsValid() {
        val fs: FileSystem = Jimfs.newFileSystem(Configuration.unix())
        val foo: Path = fs.getPath("/foo")
        Files.createDirectory(foo)

        val ymlFile = foo.resolve("xjdf.yml")

        val converter = OpenApiConverter(OpenApiConverter::class.java.getResourceAsStream("/xjdf.xsd")!!)

        Files.newOutputStream(ymlFile).use { stream ->
            converter.convert(stream, true)
        }

        val api = OpenApi3Parser().parse(ymlFile.toUri().toURL(), false)
        val results = ValidationWrapper().validate(api)

        println(results.toString())
    }
}