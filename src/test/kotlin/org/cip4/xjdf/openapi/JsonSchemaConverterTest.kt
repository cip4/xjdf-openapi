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

import com.charleskorn.kaml.Yaml
import com.google.common.jimfs.Configuration
import com.google.common.jimfs.Jimfs
import org.cip4.xjdf.openapi.model.Schema
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

internal class JsonSchemaConverterTest {

    @ParameterizedTest
    @MethodSource("scanForFixtures")
    internal fun `fixtures are converted correctly`(from: Path, to: Path) {
        val converter = JsonSchemaConverter(Files.newInputStream(from))

        val actualModel = converter.convertModel("Root")
        val expectedModel = Yaml.default.decodeFromString(Schema.serializer(), Files.readString(to))

        assertEquals(
            expectedModel,
            actualModel
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