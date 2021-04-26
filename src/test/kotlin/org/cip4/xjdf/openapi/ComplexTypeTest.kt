package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.NamedSchema
import org.cip4.xjdf.openapi.model.Schema
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.w3c.dom.Document
import org.w3c.dom.Node
import org.xml.sax.InputSource
import java.io.InputStream
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

internal class ComplexTypeTest {

    @Test
    internal fun `empty complex type is handled`() {
        val doc = readXml(this::class.java.getResource("/abstract-element.xml").openStream())

        val xpFactory = XPathFactory.newInstance()
        val xPath = xpFactory.newXPath()
        xPath.namespaceContext = XsdNamespaceContext()

        val tle = ComplexType(
            Context(
                xPath,
                TypeTranslator(),
                xPath.evaluate("/xs:schema/xs:complexType[@name='AbstractType']", doc, XPathConstants.NODE) as Node
            )
        )
        val model = tle.getModel()
        assertEquals(
            NamedSchema(
                "AbstractType",
                Schema(
                    type = "object"
                )
            ),
            model
        )
    }

    @Test
    internal fun `inheriting type references parent`() {
        val doc = readXml(this::class.java.getResource("/abstract-element.xml").openStream())

        val xpFactory = XPathFactory.newInstance()
        val xPath = xpFactory.newXPath()
        xPath.namespaceContext = XsdNamespaceContext()

        val tle = ComplexType(
            Context(
                xPath,
                TypeTranslator(),
                xPath.evaluate("/xs:schema/xs:complexType[@name='Impl1Type']", doc, XPathConstants.NODE) as Node
            )
        )
        val model = tle.getModel()
        assertEquals(
            NamedSchema(
                "Impl1Type",
                Schema(
                    allOf = listOf(
                        Schema.ref("AbstractType"),
                        Schema(
                            type = "object",
                            properties = mapOf(
                                Pair("Foo", Schema(type = "string"))
                            )
                        )
                    )
                )
            ),
            model
        )
    }

    private fun readXml(sourceXsd: InputStream): Document {
        val dbFactory = DocumentBuilderFactory.newInstance()
        dbFactory.isNamespaceAware = true
        val dBuilder = dbFactory.newDocumentBuilder()
        val xmlInput = InputSource(sourceXsd)

        return dBuilder.parse(xmlInput)
    }

}