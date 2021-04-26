package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.NamedSchema
import org.cip4.xjdf.openapi.model.Reference
import org.cip4.xjdf.openapi.model.Schema
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPathConstants
import kotlin.collections.List

class TopLevelElement(
    private val context: Context,
) {

    private val name: String
        get() = context.node.attributes.getNamedItem("name").nodeValue

    fun writeYmlTo(writer: YmlWriter) {
        getModel()?.let { model ->
            writer.writeLines(model.toYml())
        }
    }

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