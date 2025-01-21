package org.cip4.xjdf.json.openapi;

import lombok.Getter;
import org.cip4.xjdf.json.openapi.model.Schema;
import org.cip4.xjdf.json.openapi.model.Schemas;

import java.util.HashMap;
import java.util.Map;

@Getter
public class TypeMap {

    private final Map<String, String> prefixes = new HashMap<>();

    public TypeMap(Schemas schemas) {
        schemas.forEach((s, schema) -> register(schemas.getPrefix(), s, schema));
    }

    private void register(String prefix, String rootElement, Schema schema) {
        prefixes.put(rootElement, prefix);
        if (schema.defs() != null) {
            schema.defs().keySet().forEach(key -> prefixes.put(key, prefix));
        }
    }

    public Schema getReference(String elementName) {
        if (!prefixes.containsKey(elementName)) {
            throw new IllegalArgumentException("No reference found for element name: " + elementName);
        }
        return new Schema().ref(prefixes.get(elementName) + elementName);
    }
}
