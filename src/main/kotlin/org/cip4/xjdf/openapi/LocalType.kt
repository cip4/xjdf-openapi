package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class LocalType(
    private val node: Node,
    private val context: Context
) : AttributeType() {

    val simpleType: Node
        get() = context.xPath.evaluate(
            "xs:simpleType",
            node,
            XPathConstants.NODE
        ) as Node

    companion object Factory : AttributeType.Factory<LocalType> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:simpleType",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context) = LocalType(node, context)
    }

    override fun getModel(): Schema {
        return SimpleType.Factory.create(simpleType, context).getModel()
    }
}