package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema

class TypeTranslator {

    fun translate(xsdName: String): Schema {
        return when (xsdName) {
            "xs:string" -> Schema(type = "string")
            "xs:hexBinary" -> Schema(type = "string") // TODO: find better mapping
            "xs:int" -> Schema(type = "integer")
            "xs:dateTime" -> Schema(type = "string", format = "date-time")
            "xs:ID" -> Schema(type = "string") // TODO: find better mapping
            "xs:IDREF" -> Schema(type = "string") // TODO: find better mapping
            "xs:IDREFS" -> Schema(type = "array", items = translate("xs:IDREF"))
            "xs:long" -> Schema(type = "integer") // TODO: validate mapping
            "xs:float" -> Schema(type = "number", format = "float")
            "xs:boolean" -> Schema(type = "boolean")
            "xs:NMTOKEN" -> Schema(type = "string") // TODO: check that this mapping is okay
            "xs:NMTOKENS" -> Schema(type = "array", items = translate("xs:NMTOKEN"))
            "xs:duration" -> Schema(type = "string") // TODO: find better mapping
            "xs:anyURI" -> Schema(type = "string", format = "uri") // TODO: find better mapping
            else -> Schema.ref(xsdName)
        }
    }

}