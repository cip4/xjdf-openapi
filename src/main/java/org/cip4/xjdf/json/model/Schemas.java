package org.cip4.xjdf.json.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class Schemas {
    private Map<String, Schema> schemas = new HashMap<>();

    public Schema getSchema(String name) {
        return schemas.get(name);
    }

    public void addSchema(String name, Schema schema) {
        schemas.put(name, schema);
    }

    public void removeSchema(String name) {
        schemas.remove(name);
    }

    public boolean containsSchema(String name) {
        return schemas.containsKey(name);
    }
}