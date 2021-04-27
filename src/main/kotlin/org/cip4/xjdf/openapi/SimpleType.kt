package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import javax.xml.xpath.XPath

abstract class SimpleType(
    val node: Node
) {

    val name: String?
        get() = node.attributes.getNamedItem("name")?.nodeValue

    abstract fun getModel(): Schema

    interface Factory<T : SimpleType> {
        fun supports(candidate: Node, xPath: XPath): Boolean

        fun create(node: Node, context: Context): T

        companion object {
            fun create(node: Node, context: Context): SimpleType {
                val factories = listOf(
                    SimpleTypeRestriction.Factory,
                    SimpleTypeList.Factory,
                    SimpleTypeLocalList.Factory
                )
                val factory = factories.find { factory ->
                    factory.supports(node, context.xPath)
                } ?: throw IllegalStateException("Unsupported attribute detected...")
                return factory.create(node, context)
            }
        }
    }
}
