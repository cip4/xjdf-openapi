package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema

class TypeTranslator {

    fun translate(xsdName: String): Schema {
        return when (xsdName) {
            "xs:string" -> Schema(type = "string")
            "xs:hexBinary" -> Schema(type = "string") // TODO: find better mapping
            "xs:int" -> Schema(type = "integer")
            "IntegerRange" -> Schema(type = "string") // TODO: find better mapping
            "IntegerList" -> Schema(type = "array", items = translate("xs:int"))
            "xs:long" -> Schema(type = "integer") // TODO: validate mapping
            "xs:float" -> Schema(type = "number", format = "float")
            "FloatList" -> Schema(type = "array", items = translate("xs:float"))
            "xs:boolean" -> Schema(type = "boolean")
            "xs:NMTOKEN" -> Schema(type = "string") // TODO: check that this mapping is okay
            "xs:NMTOKENS" -> Schema(type = "array", items = translate("xs:NMTOKEN"))
            "URL" -> Schema(type = "string", format="uri")
            "xs:dateTime" -> Schema(type = "string", format = "date-time")
            "xs:ID" -> Schema(type = "string") // TODO: find better mapping
            "xs:IDREF" -> Schema(type = "string") // TODO: find better mapping
            "xs:IDREFS" -> Schema(type = "array", items = translate("xs:IDREF"))
            "xs:duration" -> Schema(type = "string") // TODO: find better mapping
            "shape" -> Schema(type = "string") // TODO: find better mapping
            "matrix" -> Schema(type = "string") // TODO: find better mapping
            "regExp" -> Schema(type = "string") // TODO: find better mapping
            "Side" -> Schema(type = "string") // TODO: find better mapping
            "XYPair" -> Schema(type = "string") // TODO: find better mapping
            "Orientation" -> Schema(type = "string") // TODO: find better mapping
            "Version" -> Schema(type = "string") // TODO: find better mapping
            "DeviceStatus" -> Schema(type = "string") // TODO: find better mapping
            "NodeStatus" -> Schema(type = "string") // TODO: find better mapping
            "UpdateGranularity" -> Schema(type = "string") // TODO: find better mapping
            "Activation" -> Schema(type = "string") // TODO: find better mapping
            "EnumGangPolicy" -> Schema(type = "string") // TODO: find better mapping
            "Scope" -> Schema(type = "string") // TODO: find better mapping
            "EnumChannelMode" -> Schema(type = "string") // TODO: find better mapping
            "languages" -> Schema(type = "string") // TODO: find better mapping
            "EnumGlue" -> Schema(type = "string") // TODO: find better mapping
            "EnumEmbossDirection" -> Schema(type = "string") // TODO: find better mapping
            "rectangle" -> Schema(type = "string") // TODO: find better mapping
            "Face" -> Schema(type = "string") // TODO: find better mapping
            "XPath" -> Schema(type = "string") // TODO: find better mapping
            "EmbossType" -> Schema(type = "string") // TODO: find better mapping
            "NamedColor" -> Schema(type = "string") // TODO: find better mapping
            "BundleType" -> Schema(type = "string") // TODO: find better mapping
            "Polarity" -> Schema(type = "string") // TODO: find better mapping
            "TightBacking" -> Schema(type = "string") // TODO: find better mapping
            "Severity" -> Schema(type = "string") // TODO: find better mapping
            "Anchor" -> Schema(type = "string") // TODO: find better mapping
            "PDFPath" -> Schema(type = "string") // TODO: find better mapping
            "LabColor" -> Schema(type = "string") // TODO: find better mapping
            "textElement" -> Schema(type = "string") // TODO: find better mapping
            "EnumFeedQuality" -> Schema(type = "string") // TODO: find better mapping
            "SourceObjects" -> Schema(type = "string") // TODO: find better mapping
            "sRGBColor" -> Schema(type = "string") // TODO: find better mapping
            "EnumTopBottom" -> Schema(type = "string") // TODO: find better mapping
            "PositionPolicy" -> Schema(type = "string") // TODO: find better mapping
            "EnumPreflightAction" -> Schema(type = "string") // TODO: find better mapping
            "MediaDirection" -> Schema(type = "string") // TODO: find better mapping
            "Sides" -> Schema(type = "string") // TODO: find better mapping
            "EnumFitPolicy" -> Schema(type = "string") // TODO: find better mapping
            "Edge" -> Schema(type = "string") // TODO: find better mapping
            "StapleShape" -> Schema(type = "string") // TODO: find better mapping
            "RenderingIntent" -> Schema(type = "string") // TODO: find better mapping
            "EnumIncludeResources" -> Schema(type = "string") // TODO: find better mapping
            "language" -> Schema(type = "string") // TODO: find better mapping
            "SheetLay" -> Schema(type = "string") // TODO: find better mapping
            "EnumDeviceAxis" -> Schema(type = "string") // TODO: find better mapping
            "PrintQuality" -> Schema(type = "string") // TODO: find better mapping
            "FoldCatalog" -> Schema(type = "string") // TODO: find better mapping
            "SpreadType" -> Schema(type = "string") // TODO: find better mapping
            "Coating" -> Schema(type = "string") // TODO: find better mapping
            "ISOPaperSubstrate" -> Schema(type = "string") // TODO: find better mapping
            "MediaType" -> Schema(type = "string") // TODO: find better mapping
            "EnumOpacity" -> Schema(type = "string") // TODO: find better mapping
            "CMYKColor" -> Schema(type = "string") // TODO: find better mapping
            "TransferFunction" -> Schema(type = "string") // TODO: find better mapping
            "EnumAutomation" -> Schema(type = "string") // TODO: find better mapping
            "EnumDrying" -> Schema(type = "string") // TODO: find better mapping
            "WorkStyle" -> Schema(type = "string") // TODO: find better mapping
            else -> Schema.ref(xsdName)
        }
    }

}