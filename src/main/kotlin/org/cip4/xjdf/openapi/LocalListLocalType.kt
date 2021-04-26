package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class LocalListLocalType(
    private val node: Node,
    private val context: Context
) : AttributeType() {

    private val base: AttributeType
        get() = TypeFactory.create(
            context.xPath.evaluate(
                "xs:simpleType/xs:list",
                node,
                XPathConstants.NODE
            ) as Node,
            context
        )

    companion object Factory : TypeFactory<LocalListLocalType> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:simpleType/xs:list/xs:simpleType",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context): LocalListLocalType =
            LocalListLocalType(node, context)
    }

    override fun getModel(): Schema {
        return Schema(type = "array", items = base.getModel())
    }
}