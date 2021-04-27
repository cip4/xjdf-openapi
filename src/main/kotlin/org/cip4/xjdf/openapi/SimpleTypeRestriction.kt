package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class SimpleTypeRestriction(
    node: Node,
    private val context: Context
) : SimpleType(node) {

    val base: Schema
        get() = context.nameTranslator.translate(
            context.xPath.evaluate(
                "xs:restriction/@base",
                node,
                XPathConstants.STRING
            ) as String
        )

    companion object Factory : SimpleType.Factory<SimpleTypeRestriction> {
        override fun supports(candidate: Node, xPath: XPath): Boolean =
            (xPath.evaluate(
                "xs:restriction/@base",
                candidate,
                XPathConstants.NODESET
            ) as NodeList).length > 0

        override fun create(node: Node, context: Context) = SimpleTypeRestriction(node, context)
    }

    override fun getModel(): Schema {
        val schema = base
        restrictionInt("xs:minInclusive")?.let { min ->
            schema.minimum = min
        }
        restrictionInt("xs:maxInclusive")?.let { max ->
            schema.maximum = max
        }
        restrictionInt("xs:minLength")?.let { value ->
            schema.minItems = value
        }
        restrictionInt("xs:length")?.let { length ->
            schema.minItems = length
            schema.maxItems = length
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
            "xs:restriction/$name/@value",
            node,
            XPathConstants.NODE
        ) as Node?
        return node?.nodeValue?.toInt()
    }

    private fun restrictionString(restrictionName: String): String? {
        // TODO: Fix handling with multiple patterns (like NamedColor)
        val node = context.xPath.evaluate(
            "xs:restriction/$restrictionName/@value",
            node,
            XPathConstants.NODE
        ) as Node?
        return node?.nodeValue
    }

    private fun enumeration(): List<String>? {
        val valueNodes =
            context.xPath.evaluate(
                "xs:restriction/xs:enumeration/@value",
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