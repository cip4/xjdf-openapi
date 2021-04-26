package org.cip4.xjdf.openapi

import com.charleskorn.kaml.Yaml
import org.cip4.xjdf.openapi.model.Components
import org.cip4.xjdf.openapi.model.OpenApi
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
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
}