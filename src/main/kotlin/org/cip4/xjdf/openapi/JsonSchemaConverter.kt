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
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.encodeToString
import org.cip4.xjdf.openapi.model.*
import org.w3c.dom.Document
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import org.xml.sax.InputSource
import java.io.InputStream
import java.io.OutputStream
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

@OptIn(ExperimentalSerializationApi::class)
class JsonSchemaConverter(sourceXsd: InputStream) {
    private var doc: Document
    var xPath: XPath

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

    fun convertModel(): Schema {
        val nameTranslator = TypeTranslator("#/\$defs/")
        val schemas = Schemas()
        val xjdfSchema = convertTopLevelElement("XJDF", nameTranslator, schemas).schema
        xjdfSchema.`$schema` = "https://json-schema.org/draft/2020-12/schema"
        xjdfSchema.`$defs` = schemas
        return xjdfSchema
    }

    private fun convertReferencedSimpleTypes(node: Node, nameTranslator: TypeTranslator, schemas: Schemas) {
        val types = xPath.evaluate(
            ".//xs:attribute/@type",
            node,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until types.length) {
            val typeName = types.item(i).nodeValue
            convertTopLevelSimpleType(typeName, nameTranslator, schemas)
        }
    }

    private fun convertTopLevelSimpleType(typeName: String, nameTranslator: TypeTranslator, schemas: Schemas) {
        if (schemas.containsKey(typeName)
            || typeName.startsWith("xs:")
        ) {
            return;
        }
        val element = xPath.evaluate(
            "/xs:schema/xs:simpleType[@name='$typeName']",
            doc,
            XPathConstants.NODE
        ) as Node

        val simpleType = SimpleType.Factory.create(
            element,
            Context(xPath, nameTranslator, element)
        )
        schemas[simpleType.name!!] = simpleType.getModel()
    }

    private fun convertTopLevelElement(
        nodeName: String,
        nameTranslator: TypeTranslator,
        schemas: Schemas
    ): NamedSchema {
        val element = xPath.evaluate(
            "/xs:schema/xs:element[@name='$nodeName']",
            doc,
            XPathConstants.NODE
        ) as Node

        val namedSchema = TopLevelElement(Context(xPath, nameTranslator, element)).getModel(nameTranslator)
        convertReferencedElements(element, nameTranslator, schemas)
        convertReferencedSimpleTypes(element, nameTranslator, schemas)
        return namedSchema
    }

    private fun convertReferencedElements(node: Node, nameTranslator: TypeTranslator, schemas: Schemas) {
        val elements = xPath.evaluate(
            ".//xs:element/@ref",
            node,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            val elementName = elements.item(i).nodeValue
            if (!schemas.containsKey(elementName)) {
                val model = convertTopLevelElement(elementName, nameTranslator, schemas)
                schemas[model.name] = model.schema
            }
        }
    }

    private fun convertTopLevelComplexTypes(baseType: String, nameTranslator: TypeTranslator, schemas: Schemas) {
        val elements = xPath.evaluate(
            "/xs:schema/xs:complexType[xs:complexContent/xs:extension/@base='$baseType']",
            doc,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            val model = ComplexType(Context(xPath, nameTranslator, elements.item(i))).getModel(nameTranslator)
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