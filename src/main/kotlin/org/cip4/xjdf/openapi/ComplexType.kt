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

import org.cip4.xjdf.openapi.model.Discriminator
import org.cip4.xjdf.openapi.model.Model
import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import java.util.*

class ComplexType(
    private val context: Context,
    private val elementName: String? = null,
) : Modelable {

    private val name: String
        get() = context.node.attributes.getNamedItem("name")?.nodeValue
            ?: elementName
            ?: UUID.randomUUID().toString()

    override fun getModel(): Model {
        // TODO: When a class references an abstract class, we need to reference all implementing classes instead.
        val attributes = getAttributes()
        val properties = attributes.map { it.getModel() }.associate { it.name to it.schema }

        var schema = Schema(
            type = "object",
            properties = properties.toMutableMap()
        )
        addLocalElements(schema)

        applyChoicePolymorphism(schema, context.nameTranslator)

        schema.required!! += attributes.filter { it.isRequired }.map { it.name }

        inheritingFrom()?.let { parent ->
            schema = Schema(
                allOf = listOf(
                    context.nameTranslator.translate(parent),
                    schema
                )
            )
        }

        return Model(name, schema)
    }

    private fun addLocalElements(schema: Schema) {
        val elementNodes = context.evaluateNodeList(
            "(. | xs:complexContent/xs:extension)/xs:sequence/xs:element",
        ) as NodeList
        getChoiceElements().forEach { addPropertyToSchema(it, schema) }
        (0 until elementNodes.length).forEach {
            val element = elementNodes.item(it)
            val substitution = getSubstitution(element)
            if (substitution != null) {
                schema.properties!! += substitution.properties!!
                schema.oneOf!! += substitution.oneOf!!
            } else {
                addPropertyToSchema(
                    LocalElement(element, context.descendant(element)),
                    schema
                )
            }
        }
    }

    private fun addPropertyToSchema(element: LocalElement, schema: Schema) {
        val model = element.getModel()
        schema.properties!![model.name] = model.schema
        if (element.isRequired) {
            schema.required!! += model.name
        }
    }

    private fun getSubstitution(node: Node): Schema? {
        val ref = node.attributes.getNamedItem("ref")?.nodeValue ?: return null
        val substitutes = context.getSubstitutes(ref, context.nameTranslator) ?: return null

        val oneOf = substitutes.keys.map { Schema(required = mutableListOf(it)) }.toMutableList()

        val optional = node.attributes.getNamedItem("minOccurs")?.nodeValue == "0"
        if (optional) {
            oneOf += Schema(
                not = Schema(
                    anyOf = substitutes.keys.map { Schema(required = mutableListOf(it)) }.toMutableList()
                )
            )
        }

        return Schema(
            properties = substitutes.toMutableMap(),
            oneOf = oneOf
        )
    }

    private fun getChoiceElements(): List<LocalElement> {
        val choice = context.evaluateNode(
            "(. | xs:complexContent/xs:extension)/xs:sequence/xs:choice",
        ) ?: return listOf()

        val maxOccurs = choice.attributes.getNamedItem("maxOccurs")
        val elementNodes = context.descendant(choice).evaluateNodeList(
            "xs:element",
        ) as NodeList
        val minOccurs = choice.ownerDocument.createAttribute("minOccurs")
        minOccurs.nodeValue = "0"
        return (0 until elementNodes.length).map {
            val elementNode = elementNodes.item(it)
            elementNode.attributes.setNamedItem(minOccurs.cloneNode(false))
            if (maxOccurs != null) {
                elementNode.attributes.setNamedItem(maxOccurs.cloneNode(false))
            }
            LocalElement(elementNode, context.descendant(elementNode))
        }
    }

    private fun getAttributes(): List<Attribute> {
        val attributeNodes = context.evaluateNodeList(
            "(. | xs:complexContent/xs:extension)/xs:attribute",
        ) as NodeList
        return (0 until attributeNodes.length).map {
            Attribute(attributeNodes.item(it), context.descendant(attributeNodes.item(it)))
        }
    }

    private fun inheritingFrom(): String? =
        context.evaluateNode("xs:complexContent/xs:extension/@base")?.nodeValue

    private fun applyChoicePolymorphism(schema: Schema, nameTranslator: TypeTranslator) {
        val choice = context.evaluateNode("xs:choice") ?: return

        if (choice.attributes.getNamedItem("minOccurs").nodeValue != "0") {
            throw RuntimeException("Handling of xs:choice/@minOccurs != 0 is not implemented.")
        }
        if (choice.attributes.getNamedItem("maxOccurs").nodeValue != "unbounded") {
            throw RuntimeException("Handling of xs:choice/@maxOccurs != unbounded is not implemented.")
        }

        schema.type = "array"

        val choiceContext = context.descendant(choice)
        val choices = choiceContext.evaluateNodeList("xs:element") as NodeList

        schema.items = Schema(
            oneOf = (0 until choices.length).map {
                val reference = choices.item(it).attributes.getNamedItem("ref").nodeValue
                Schema(
                    allOf = listOf(
                        nameTranslator.translate(reference),
                        Schema(
                            properties = mutableMapOf(
                                Pair(
                                    "Name",
                                    Schema(
                                        const = getDiscriminator(reference)
                                    )
                                )
                            ),
                        )
                    )
                )
            }.toMutableList(),
            discriminator = Discriminator("Name")
        )
    }

    private fun getDiscriminator(type: String): String {
        return when (type) {
            "AuditCreated" -> "Created"
            "AuditNotification" -> "Notification"
            "AuditProcessRun" -> "ProcessRun"
            "AuditResource" -> "Resource"
            "AuditStatus" -> "Status"
            "Glue" -> "Glue"
            "Media" -> "Media"
            else -> throw RuntimeException("No known discriminator for '$type'")
        }
    }
}