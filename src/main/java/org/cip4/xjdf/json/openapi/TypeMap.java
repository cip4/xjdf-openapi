package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.Schema;

import java.util.HashMap;
import java.util.Map;

public class TypeMap {

    private final Map<String, String> types = new HashMap<>();

    public TypeMap(Map<String, Schema> schemas) {
        schemas.forEach(this::register);
    }

    private void register(String rootElement, Schema schema) {
        if (schema.id() != null) {
            types.put(rootElement, schema.id());
            String prefix = schema.id() + "#/$defs/";
            if (schema.defs() != null) {
                schema.defs().keySet().forEach(elementName -> types.put(elementName, prefix + elementName));
            }
        }
    }

    public Schema getReference(String elementName) {
        String ref = types.get(elementName);
        if (ref == null) {
            throw new IllegalArgumentException("No reference found for element name: " + elementName);
        }
        Schema schema = new Schema();
        schema.ref(ref);
        return schema;
    }
}
