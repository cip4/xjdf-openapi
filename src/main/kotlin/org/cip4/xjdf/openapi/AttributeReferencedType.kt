package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import javax.xml.xpath.XPath

class AttributeReferencedType(
    private val node: Node,
    private val context: Context
) : AttributeType() {

    private val type: Schema
        get() = context.nameTranslator.translate(node.attributes.getNamedItem("type").nodeValue)

    companion object Factory : AttributeType.Factory<AttributeReferencedType> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            candidate.attributes.getNamedItem("type") != null

        override fun create(node: Node, context: Context): AttributeReferencedType =
            AttributeReferencedType(node, context)
    }

    override fun getModel(): Schema {
        return type
    }

}