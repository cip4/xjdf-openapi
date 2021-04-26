package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.NamedSchema

class TopLevelElement(
    private val context: Context,
) {

    private val name: String
        get() = context.node.attributes.getNamedItem("name").nodeValue

    fun getModel(): NamedSchema? {
        val localType = context.evaluateNode(
            "xs:complexType",
        )
        return localType?.let {
            val type = ComplexType(context.descendant(it))
            NamedSchema(name, type.getModel().schema)
        }
    }
}