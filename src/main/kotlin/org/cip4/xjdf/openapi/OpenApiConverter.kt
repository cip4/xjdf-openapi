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
import com.charleskorn.kaml.YamlConfiguration
import kotlinx.serialization.encodeToString
import org.cip4.xjdf.openapi.model.Info
import org.cip4.xjdf.openapi.model.OpenApi
import org.cip4.xjdf.openapi.model.Schemas
import org.w3c.dom.Document
import org.w3c.dom.NodeList
import org.xml.sax.InputSource
import java.io.InputStream
import java.io.OutputStream
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

class OpenApiConverter(sourceXsd: InputStream) {
    private val doc: Document
    private val xPath: XPath

    init {
        doc = readXml(sourceXsd)
        val xpFactory = XPathFactory.newInstance()
        xPath = xpFactory.newXPath()
        xPath.namespaceContext = XsdNamespaceContext()
    }

    private fun readXml(sourceXsd: InputStream): Document {
        val dbFactory = DocumentBuilderFactory.newInstance()
        dbFactory.isNamespaceAware = true
        val dBuilder = dbFactory.newDocumentBuilder()
        val xmlInput = InputSource(sourceXsd)

        return dBuilder.parse(xmlInput)
    }

    fun convert(outputStream: OutputStream) {
        val openApi = convertModel()

        val format = Yaml(
            configuration = YamlConfiguration(
                encodeDefaults = false
            )
        )

        outputStream.writer().use { writer ->
            writer.write(format.encodeToString(openApi))
        }
    }

    private fun convertModel(): OpenApi {
        val pg = PathsGenerator()
        val openApi = OpenApi(
            openapi = "3.1.0",
            `$schema` = "https://spec.openapis.org/oas/3.1/dialect/base",
            info = info(),
            paths = pg.paths()
        )
        val nameTranslator = TypeTranslator("#/components/schemas/")
        convertTopLevelElements(nameTranslator, openApi.components.schemas)
        convertTopLevelComplexTypes(nameTranslator, openApi.components.schemas)
        convertTopLevelSimpleTypes(nameTranslator, openApi.components.schemas)
        return openApi
    }

    private fun convertTopLevelSimpleTypes(nameTranslator: TypeTranslator, schemas: Schemas) {
        val elements = xPath.evaluate(
            "/xs:schema/xs:simpleType",
            doc,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            val simpleType = SimpleType.Factory.create(
                elements.item(i),
                Context(xPath, nameTranslator, elements.item(i))
            )
            schemas[simpleType.name] = simpleType.getModel().schema
        }
    }

    private fun convertTopLevelElements(nameTranslator: TypeTranslator, schemas: Schemas) {
        val elements = xPath.evaluate(
            "/xs:schema/xs:element",
            doc,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            val model = NamedElement(Context(xPath, nameTranslator, elements.item(i))).getModel()
            schemas[model.name] = model.schema
        }
    }


    private fun convertTopLevelComplexTypes(nameTranslator: TypeTranslator, schemas: Schemas) {
        val elements = xPath.evaluate(
            "/xs:schema/xs:complexType",
            doc,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            val model = ComplexType(Context(xPath, nameTranslator, elements.item(i))).getModel()
            schemas[model.name] = model.schema
        }
    }

    fun info(): Info {
        return Info(
            "CLOUD-XJDF",
            "The json flavour of XJDF",
            "0.0.1"
        )
    }

}