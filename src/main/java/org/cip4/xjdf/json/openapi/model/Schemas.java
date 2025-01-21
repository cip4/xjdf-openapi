package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor(force = true)
public class Schemas implements Map<String, Schema> {
    private final Map<String, Schema> schemas = new HashMap<>();
    private final String prefix;
    private final List<String> acquiredPrefixes = new ArrayList<>();

    public Schemas(Map<String, Schema> schemas) {
        this.schemas.putAll(schemas);
        prefix = null;
    }

    public Schemas(String prefix) {
        this.prefix = prefix;
    }

    @Override
    public int size() {
        return schemas.size();
    }

    @Override
    public boolean isEmpty() {
        return schemas.isEmpty();
    }

    @Override
    public boolean containsKey(Object key) {
        return schemas.containsKey(key);
    }

    @Override
    public boolean containsValue(Object value) {
        return schemas.containsValue(value);
    }

    @Override
    public Schema get(Object key) {
        return schemas.get(key);
    }

    @Override
    public Schema put(String key, Schema value) {
        return schemas.put(key, value);
    }

    @Override
    public Schema remove(Object key) {
        return schemas.remove(key);
    }

    @Override
    public void putAll(@NonNull Map<? extends String, ? extends Schema> m) {
        schemas.putAll(m);
    }

    @Override
    public void clear() {
        schemas.clear();
    }

    @NonNull
    @Override
    public Set<String> keySet() {
        return schemas.keySet();
    }

    @NonNull
    @Override
    public Collection<Schema> values() {
        return schemas.values();
    }

    @NonNull
    @Override
    public Set<Entry<String, Schema>> entrySet() {
        return schemas.entrySet();
    }

    public void acquire(String schemaName, Schema schema) {
        Schema.SchemaBuilder schemaBuilder = schema.toBuilder();

        Pattern prefixPattern = createPrefixPattern();

        if (schema.id() != null) {
            acquiredPrefixes.add(schema.id());
            schemaBuilder.id(null);
        }

        if (schema.defs() != null) {
            schema.defs().forEach((defName, defSchema) ->
                schemas.put(defName, rewriteDef(defSchema, prefixPattern)
                ));
            schemaBuilder.defs(null);
        }

        schemas.put(schemaName, rewriteDef(schemaBuilder.build(), prefixPattern));
    }

    private Schema rewriteDef(Schema schema, Pattern prefixPattern) {
        if (prefix == null) {
            throw new RuntimeException("Prefix must be set when acquiring schemas");
        }
        Schema.SchemaBuilder schemaBuilder = schema.toBuilder();

        if (schema.ref() != null) {
            Matcher matcher = prefixPattern.matcher(schema.ref());
            schemaBuilder.ref(
                matcher.replaceFirst("")
                    .replace("#/$defs/", prefix)
            );
        }
        if (schema.properties() != null) {
            Map<String, Schema> propSchemas = schema.properties()
                .entrySet()
                .stream()
                .collect(Collectors.toMap(
                    Entry::getKey,
                    entry -> rewriteDef(entry.getValue(), prefixPattern)
                ));
            schemaBuilder.properties(new Schemas(propSchemas));
        }
        if (schema.allOf() != null) {
            schemaBuilder.allOf(
                schema.allOf().stream().map(subSchema -> rewriteDef(subSchema, prefixPattern)).toList()
            );
        }
        if (schema.oneOf() != null) {
            schemaBuilder.oneOf(
                schema.oneOf().stream().map(subSchema -> rewriteDef(subSchema, prefixPattern)).toList()
            );
        }
        if (schema.items() != null) {
            schemaBuilder.items(
                rewriteDef(schema.items(), prefixPattern)
            );
        }

        return schemaBuilder.build();
    }


    private Pattern createPrefixPattern() {
        String regex = acquiredPrefixes.stream()
            .map(Pattern::quote)
            .reduce((a, b) -> a + "|" + b)
            .orElse("");

        return Pattern.compile("^(" + regex + ")");
    }
}