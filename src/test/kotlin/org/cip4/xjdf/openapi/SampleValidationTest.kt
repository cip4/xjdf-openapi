package org.cip4.xjdf.openapi

import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import org.openapi4j.operation.validator.model.Request
import org.openapi4j.operation.validator.model.impl.Body
import org.openapi4j.operation.validator.model.impl.DefaultRequest
import org.openapi4j.operation.validator.validation.RequestValidator
import org.openapi4j.parser.OpenApi3Parser
import org.openapi4j.parser.model.v3.OpenApi3
import org.openapi4j.schema.validator.ValidationData
import java.io.File
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.util.function.Predicate
import java.util.stream.Stream

class SampleValidationTest {

    private var openApi: OpenApi3? = null
    private var validator: RequestValidator? = null

    @BeforeEach
    internal fun setUp() {
        openApi = OpenApi3Parser().parse(File("build/resources/main/xjdf.yml"), false)
        validator = RequestValidator(openApi)
    }

    @ParameterizedTest
    @MethodSource("scanForSamples")
    internal fun `sample is valid`(requestPath: Path, from: Path) {
        val request = DefaultRequest
            .Builder(
                "/" + requestPath.joinToString("/"),
                Request.Method.POST
            )
            .header("Content-Type", "application/json")
            .body(Body.from(Files.newInputStream(from)))
            .build()

        val validationData = ValidationData<Void>()
        val result = validator!!.validate(request, validationData)

        assertTrue(validationData.isValid)
    }

    companion object {
        @JvmStatic
        fun scanForSamples(): Stream<Arguments> {
            val fixtureDir = Paths.get(this::class.java.getResource("/samples/").toURI())



            return Files.walk(fixtureDir)
                .filter(Predicate { path -> path.toString().toLowerCase().endsWith(".json") })
                .map { path ->
                    Arguments.of(
                        fixtureDir.relativize(path).parent,
                        path
                    )
                }
        }
    }

}