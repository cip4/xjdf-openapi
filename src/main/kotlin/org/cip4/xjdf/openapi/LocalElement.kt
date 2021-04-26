package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.*
import org.w3c.dom.Node

class LocalElement(
    private val node: Node,
    private val context: Context

) {

    val isRequired: Boolean
        get() = minOccurs > 0

    private val minOccurs: Int
        get() = node.attributes.getNamedItem("minOccurs")?.nodeValue
            ?.let { Integer.parseInt(it) }
            ?: 1

    private val maxOccurs: Int
        get() = node.attributes.getNamedItem("maxOccurs")?.nodeValue
            ?.let {
                when (it) {
                    "unbounded" -> null
                    else -> Integer.parseInt(it)
                }
            }
            ?: 1

    internal val name: String
        get() = node.attributes.getNamedItem("name")?.nodeValue
            ?: node.attributes.getNamedItem("ref")?.nodeValue!!

    private val type: Schema?
        get() = node.attributes.getNamedItem("type")?.nodeValue?.let { context.nameTranslator.translate(it) }

    private val ref: Schema?
        get() = node.attributes.getNamedItem("ref")?.nodeValue?.let { Schema.ref(it) }

    fun getModel(): NamedSchema {
        var schema = ref ?: type ?: Schema()
        if (maxOccurs > 1) {
            schema = listOf(schema)
        }
        return NamedSchema(name, schema)
    }

    private fun listOf(schema: Schema): Schema {
        return Schema(
            type = "array",
            items = schema
        )
    }

}