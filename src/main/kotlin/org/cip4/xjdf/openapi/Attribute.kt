package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.NamedSchema
import org.w3c.dom.Node

class Attribute(
    private val node: Node,
    private val context: Context
) {

    val isRequired: Boolean
        get() = node.attributes.getNamedItem("use")?.nodeValue == "required"

    val name: String
        get() = node.attributes.getNamedItem("name").nodeValue

    fun getModel(): NamedSchema {
        return NamedSchema(name, attributeType().getModel())
    }

    private fun attributeType(): AttributeType {
        return AttributeType.Factory.create(node, context)
    }
}