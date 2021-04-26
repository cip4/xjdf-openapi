package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.NamedSchema
import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.NodeList
import java.util.*

class ComplexType(
    private val context: Context
) : Modelable {

    private val name: String
        get() = context.node.attributes.getNamedItem("name")?.nodeValue
            ?: UUID.randomUUID().toString()

    override fun getModel(): NamedSchema {
        val localElements = getLocalElements()
        val attributes = getAttributes()
        val properties = (localElements.map { it.getModel() } +
                attributes.map { it.getModel() }).associate { it.name to it.schema }

        var schema = Schema(
            type = "object",
            properties = properties.ifEmpty { null }
        )
        val required = localElements.filter { it.isRequired }.map { it.name } +
                attributes.filter { it.isRequired }.map { it.name }
        if (required.isNotEmpty()) {
            schema.required = required
        }

        inheritingFrom()?.let { parent ->
            schema = Schema(
                allOf = listOf(
                    Schema.ref(parent),
                    schema
                )
            )
        }

        return NamedSchema(name, schema)
    }

    private fun getLocalElements(): List<LocalElement> {
        val elementNodes = context.evaluateNodeList(
            "(. | xs:complexContent/xs:extension)/xs:sequence/xs:element",
        ) as NodeList
        return (0 until elementNodes.length).map {
            LocalElement(elementNodes.item(it), context.descendant(elementNodes.item(it)))
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
}