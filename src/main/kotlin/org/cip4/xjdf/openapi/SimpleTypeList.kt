package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class SimpleTypeList(
    node: Node,
    private val context: Context,
) : SimpleType(node) {

    private val itemType: Schema
        get() = context.nameTranslator.translate(
            context.xPath.evaluate(
                "xs:list/@itemType",
                node,
                XPathConstants.STRING
            ) as String
        )

    companion object Factory : SimpleType.Factory<SimpleTypeList> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:list/@itemType",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context): SimpleTypeList =
            SimpleTypeList(node, context)
    }

    override fun getModel(): Schema {
        return Schema(type = "array", items = itemType)
    }

}