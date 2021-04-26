package org.cip4.xjdf.openapi

import com.charleskorn.kaml.Yaml
import com.charleskorn.kaml.YamlConfiguration
import kotlinx.serialization.encodeToString
import org.cip4.xjdf.openapi.model.*
import org.w3c.dom.Document
import org.w3c.dom.NodeList
import org.xml.sax.InputSource
import java.io.InputStream
import java.io.OutputStream
import javax.xml.parsers.DocumentBuilderFactory
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

class OpenApiConverter(sourceXsd: InputStream) {
    var doc: Document
    var xPath: XPath

    init {
        doc = readXml(sourceXsd)
        val xpFactory = XPathFactory.newInstance()
        xPath = xpFactory.newXPath()
        xPath.namespaceContext = XsdNamespaceContext()
    }

    private fun readXml(sourceXsd: InputStream): Document {
        val dbFactory = DocumentBuilderFactory.newInstance()
        dbFactory.isNamespaceAware = true
        val dBuilder = dbFactory.newDocumentBuilder()
        val xmlInput = InputSource(sourceXsd)

        return dBuilder.parse(xmlInput)
    }

    fun convert(outputStream: OutputStream, header: Boolean = false) {
        val openApi = convertModel()

        val format = Yaml(
            configuration = YamlConfiguration(
                encodeDefaults = false
            )
        )

        outputStream.writer().use { writer ->
            if (header) {
                YmlWriter(writer).writeLines(format.encodeToString(openApi))
            } else {
                YmlWriter(writer).writeLines(format.encodeToString(openApi.components.schemas))
            }
        }

    }

    fun convertModel(): OpenApi {
        val openApi = OpenApi(
            openapi = "3.0.0",
            info = info(),
            paths = mapOf(Pair("/", PathItem("void")))
        )
        val nameTranslator = TypeTranslator()
        convertTopLevelElements(nameTranslator, openApi.components)
        convertTopLevelComplexTypes(nameTranslator, openApi.components)

        return openApi
    }

    fun convertTopLevelElements(nameTranslator: TypeTranslator, components: Components) {
        val elements = xPath.evaluate(
            "/xs:schema/xs:element",
            doc,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            TopLevelElement(Context(xPath, nameTranslator, elements.item(i))).getModel()?.let { element ->
                components.add(element)
            }
        }
    }

    fun convertTopLevelComplexTypes(nameTranslator: TypeTranslator, components: Components) {
        val elements = xPath.evaluate(
            "/xs:schema/xs:complexType",
            doc,
            XPathConstants.NODESET
        ) as NodeList

        for (i in 0 until elements.length) {
            components.add(ComplexType(Context(xPath, nameTranslator, elements.item(i))).getModel())
        }
    }

    fun info(): Info {
        return Info(
            "CLOUD-XJDF",
            "The json flavour of XJDF",
            "0.0.1"
        )
    }

}