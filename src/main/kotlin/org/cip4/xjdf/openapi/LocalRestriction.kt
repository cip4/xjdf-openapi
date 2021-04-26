package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class LocalRestriction(
    private val node: Node,
    private val context: Context
) : AttributeType() {

    val base: Schema
        get() = context.nameTranslator.translate(
            context.xPath.evaluate(
                "xs:simpleType/xs:restriction/@base",
                node,
                XPathConstants.STRING
            ) as String
        )

    companion object Factory : TypeFactory<LocalRestriction> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:simpleType/xs:restriction/@base",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context) = LocalRestriction(node, context)
    }

    override fun getModel(): Schema {
        val schema = base
        restrictionInt("xs:minInclusive")?.let { min ->
            schema.minimum = min
        }
        restrictionInt("xs:minLength")?.let { value ->
            schema.minItems = value
        }
        enumeration()?.let { enum ->
            schema.enum = enum
        }
        restrictionString("xs:pattern")?.let { pattern ->
            schema.pattern = pattern
        }
        return schema
    }

    private fun restrictionInt(name: String): Int? {
        val node = context.xPath.evaluate(
            "xs:simpleType/xs:restriction/$name/@value",
            node,
            XPathConstants.NODE
        ) as Node?
        return node?.nodeValue?.toInt()
    }

    private fun restrictionString(name: String): String? {
        val node = context.xPath.evaluate(
            "xs:simpleType/xs:restriction/$name/@value",
            node,
            XPathConstants.NODE
        ) as Node?
        return node?.nodeValue
    }

    private fun enumeration(): List<String>? {
        val valueNodes =
            context.xPath.evaluate(
                "xs:simpleType/xs:restriction/xs:enumeration/@value",
                node,
                XPathConstants.NODESET
            ) as NodeList?
        return valueNodes?.let { nodes ->
            if (nodes.length == 0) {
                return null
            }
            (0 until nodes.length).map {
                nodes.item(it).nodeValue
            }
        }
    }
}