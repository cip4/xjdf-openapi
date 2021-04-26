package org.cip4.xjdf.openapi

import org.w3c.dom.Node
import javax.xml.xpath.XPath

interface TypeFactory<T> {

    fun supports(candidate: Node, xPath: XPath): Boolean

    fun create(node: Node, context: Context): T

    companion object {
        fun create(node: Node, context: Context): AttributeType {
            val factories = listOf(
                AttributeReferencedType.Factory,
                LocalListLocalType.Factory,
                LocalRestriction.Factory,
                LocalListType.Factory,
            )
            val factory = factories.find { factory ->
                factory.supports(node, context.xPath)
            } ?: throw IllegalStateException("Unsupported attribute detected...")
            return factory.create(node, context)
        }
    }

}