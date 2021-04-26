package org.cip4.xjdf.openapi

import javax.xml.XMLConstants
import javax.xml.namespace.NamespaceContext

class XsdNamespaceContext : NamespaceContext {
    override fun getNamespaceURI(prefix: String?): String {
        return when (prefix) {
            null -> throw NullPointerException("Null prefix")
            "xs" -> "http://www.w3.org/2001/XMLSchema"
            "xml" -> XMLConstants.XML_NS_URI
            else -> XMLConstants.NULL_NS_URI
        }
    }

    override fun getPrefix(namespaceURI: String?): String {
        TODO("Not required for XPath")
    }

    override fun getPrefixes(namespaceURI: String?): MutableIterator<String> {
        TODO("Not required for XPath")
    }
}