package org.cip4.xjdf.json.openapi;

import lombok.RequiredArgsConstructor;
import org.cip4.xjdf.json.openapi.model.Schema;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
public class TypeTranslator {

    private final String componentPath;
    private final Map<String, String> externalTypes;

    public TypeTranslator(String componentPath) {
        this.componentPath = componentPath;
        this.externalTypes = new HashMap<>();
    }



    public Schema translate(String xsdName) {
        return switch (xsdName) {
            case "xs:string" -> new Schema().type("string");
            case "xs:hexBinary" -> new Schema().type("string"); // TODO: find better mapping
            case "xs:int" -> new Schema().type("integer");
            case "xs:dateTime" -> new Schema().type("string").format("date-time");
            case "xs:ID", "xs:IDREF" -> new Schema()
                .type("string")
                .format("id")
                .pattern("^[a-zA-Z_][\\w.-]*$");
            case "xs:IDREFS" -> new Schema()
                .type("array")
                .items(translate("xs:IDREF"));
            case "xs:long" -> new Schema()
                .type("integer")
                .format("int64");
            case "xs:float" -> new Schema()
                .type("number")
                .format("float");
            case "xs:boolean" -> new Schema().type("boolean");
            case "xs:NMTOKEN" -> new Schema()
                .type("string")
                .pattern("^[a-zA-Z0-9._\\-:]*$");
            case "xs:NMTOKENS" -> new Schema()
                .type("array")
                .items(translate("xs:NMTOKEN"));
            case "xs:duration" -> new Schema()
                .type("string")
                .format("duration");
            case "xs:anyURI" -> new Schema()
                .type("string")
                .format("uri-reference");
            default -> {
                String ref = externalTypes.getOrDefault(xsdName, componentPath + xsdName);
                yield new Schema().ref(ref);
            }
        };
    }

    public boolean isExternalType(String type) {
        return externalTypes.containsKey(type) || type.startsWith("xs:");
    }
}
