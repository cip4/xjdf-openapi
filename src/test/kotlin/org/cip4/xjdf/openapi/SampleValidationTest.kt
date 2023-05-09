/*
 * The CIP4 Software License, Version 1.0
 *
 * Copyright (c) 2001-2021 The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress (CIP4). All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation and/or
 * other materials provided with the distribution.
 *
 * 3. The end-user documentation included with the redistribution, if any, must
 * include the following acknowledgment: &quot;This product includes software developed
 * by the The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress (www.cip4.org)&quot; Alternately, this acknowledgment
 * may appear in the software itself, if and wherever such third-party
 * acknowledgments normally appear.
 *
 * 4. The names &quot;CIP4&quot; and &quot;The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress&quot; must not be used to endorse or
 * promote products derived from this software without prior written permission.
 * For written permission, please contact info@cip4.org
 *
 * 5. Products derived from this software may not be called &quot;CIP4&quot;, nor may &quot;CIP4&quot;
 * appear in their name, without prior written permission of the CIP4 organization
 *
 * &quot;CIP4&quot; and &quot;The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress&quot; are trademarks of The International Cooperation
 * for the Integration of Processes in Prepress, Press and Postpress (CIP4).  All
 * other names and brands are the property of their respective owners.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. CIP4 AND ITS CONTRIBUTORS MAKE
 * NO REPRESENTATION THAT THE USE OF THIS SOFTWARE OR DATA WILL NOT INFRINGE ANY
 * PATENTS, COPYRIGHTS, TRADEMARKS, OR OTHER RIGHTS. IN NO EVENT SHALL CIP4 OR ITS
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
 * OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
 * OF SUCH DAMAGE.
 * ====================================================================
 *
 * This software consists of voluntary contributions made by many individuals on
 * behalf of the The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress and was originally based on software some of which
 * contributed by and copyrighted by Adobe Systems and Man Roland. copyright (c)
 * 2000-2001, Adobe Systems copyright (c) 2001-2001, Man Roland
 *
 * For more information on The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress , please see &lt;http://www.cip4.org/&gt;.
 */

package org.cip4.xjdf.openapi

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.networknt.schema.*
import org.cip4.jdflib.core.KElement
import org.cip4.lib.jdf.jsonutil.JSONWriter
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeAll
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
import java.util.*
import java.util.stream.Stream
import kotlin.io.path.inputStream

class SampleValidationTest {

    private val mapper = ObjectMapper()

    @ParameterizedTest
    @MethodSource("scanForValidXjmf")
    internal fun `sample is valid`(requestPath: Path, from: Path) {
        val request = DefaultRequest
            .Builder(
                "/" + requestPath.joinToString("/"),
                Request.Method.POST
            )
            .header("Content-Type", "application/vnd.cip4-xjmf+json")
            .body(Body.from(Files.newInputStream(from)))
            .build()

        val validationData = ValidationData<Void>()
        validator.validate(request, validationData)
        assertTrue(validationData.isValid)
    }

    @ParameterizedTest
    @MethodSource("scanForInvalidXjdf")
    internal fun `xjdf is invalid`(from: Path) {
        val jsonNode: JsonNode?
        from.inputStream().use {
            jsonNode = mapper.readTree(it);
        }
        val result = jsonSchemaXjdf.validate(jsonNode)
        println(result.joinToString("\n"))
        assertTrue(result.size > 0)
    }

    companion object {
        lateinit var jsonSchemaXjdf: JsonSchema
        lateinit var validator: RequestValidator
        lateinit var openApi: OpenApi3

        @JvmStatic
        @BeforeAll
        internal fun setUp(): Unit {
            openApi = OpenApi3Parser().parse(File("build/resources/main/xjdf.yml"), false)
            validator = RequestValidator(openApi)
            val config = SchemaValidatorsConfig()
            config.isOpenAPI3StyleDiscriminators = true
            val factory = JsonSchemaFactory.getInstance(SpecVersion.VersionFlag.V202012)
            jsonSchemaXjdf = factory.getSchema(
                Paths.get("build/resources/main/xjdf-schema.yml").toUri(),
                config
            )
        }

        @JvmStatic
        fun scanForValidXjmf(): Stream<Arguments> {
            val fixtureDir = Paths.get(this::class.java.getResource("/samples/").toURI())

            return Files.walk(fixtureDir)
                .filter { path -> path.toString().lowercase(Locale.getDefault()).endsWith(".json") }
                .map { path ->
                    Arguments.of(
                        fixtureDir.relativize(path).parent,
                        path
                    )
                }
        }
        @JvmStatic
        fun scanForInvalidXjdf(): Stream<Arguments> {
            val fixtureDir = Paths.get(this::class.java.getResource("/invalid/").toURI())

            return Files.walk(fixtureDir)
                .filter { path -> path.toString().lowercase(Locale.getDefault()).endsWith(".json") }
                .map { path ->
                    Arguments.of(
                        path
                    )
                }
        }
    }

}