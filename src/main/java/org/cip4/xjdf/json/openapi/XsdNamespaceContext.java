package org.cip4.xjdf.json.openapi;

import javax.xml.XMLConstants;
import javax.xml.namespace.NamespaceContext;
import java.util.Iterator;

public class XsdNamespaceContext implements NamespaceContext {

    @Override
    public String getNamespaceURI(String prefix) {
        if (prefix == null) {
            throw new NullPointerException("Null prefix");
        }
        return switch (prefix) {
            case "xs" -> "http://www.w3.org/2001/XMLSchema";
            case "xml" -> XMLConstants.XML_NS_URI;
            default -> XMLConstants.NULL_NS_URI;
        };
    }

    @Override
    public String getPrefix(String namespaceURI) {
        throw new UnsupportedOperationException("getPrefix is not required for XPath");
    }

    @Override
    public Iterator<String> getPrefixes(String namespaceURI) {
        throw new UnsupportedOperationException("getPrefixes is not required for XPath");
    }
}
