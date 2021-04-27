package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class SimpleTypeLocalList(
    node: Node,
    private val context: Context
) : SimpleType(node) {

    private val base: AttributeType
        get() = AttributeType.Factory.create(
            context.xPath.evaluate(
                "xs:list",
                node,
                XPathConstants.NODE
            ) as Node,
            context
        )

    companion object Factory : SimpleType.Factory<SimpleTypeLocalList> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:list/xs:simpleType",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context): SimpleTypeLocalList =
            SimpleTypeLocalList(node, context)
    }

    override fun getModel(): Schema {
        return Schema(type = "array", items = base.getModel())
    }
}