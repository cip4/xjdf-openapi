package org.cip4.xjdf.json;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.cip4.xjdf.json.model.Schema;

import java.util.Map;

@Data
@NoArgsConstructor
public class TypeTranslator {
    private String componentPath;
    private Map<String, String> externalTypes;

    public Schema translate(String xsdName) {
        switch (xsdName) {
            case "xs:string":
                return Schema.builder().type("string").build();
            case "xs:hexBinary":
                return Schema.builder().type("string").build(); // TODO: find better mapping
            case "xs:int":
                return Schema.builder().type("integer").build();
            case "xs:dateTime":
                return Schema.builder().type("string").format("date-time").build();
            case "xs:ID":
                return Schema.builder().type("string").format("id").pattern("^[a-zA-Z_][\\w.-]*$").build();
            case "xs:IDREF":
                return Schema.builder().type("string").format("id").pattern("^[a-zA-Z_][\\w.-]*$").build();
            default:
                return externalTypes.containsKey(xsdName) ? Schema.builder().type(externalTypes.get(xsdName)).build() : Schema.builder().type(xsdName).build();
        }
    }

    public boolean isExternalType(String typeName) {
        return externalTypes.containsKey(typeName);
    }
}