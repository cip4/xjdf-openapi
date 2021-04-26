package org.cip4.xjdf.openapi

import org.w3c.dom.Node
import org.w3c.dom.NodeList
import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants

class Context(
    val xPath: XPath,
    val nameTranslator: TypeTranslator,
    val node: Node
) {

    internal fun evaluateNode(xPathExpr: String) = xPath.evaluate(xPathExpr, node, XPathConstants.NODE) as Node?
    internal fun evaluateNodeList(xPathExpr: String) = xPath.evaluate(xPathExpr, node, XPathConstants.NODESET) as NodeList?

    internal fun descendant(descendant: Node) = Context(xPath, nameTranslator, descendant)

}