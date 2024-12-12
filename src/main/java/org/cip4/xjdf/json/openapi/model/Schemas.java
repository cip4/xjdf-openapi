package org.cip4.xjdf.json.openapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Schemas implements Map<String, Schema> {
    private Map<String, Schema> schemas = new HashMap<>();

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

    @Nullable
    @Override
    public Schema put(String key, Schema value) {
        return schemas.put(key, value);
    }

    @Override
    public Schema remove(Object key) {
        return schemas.remove(key);
    }

    @Override
    public void putAll(@NotNull Map<? extends String, ? extends Schema> m) {
        schemas.putAll(m);
    }

    @Override
    public void clear() {
        schemas.clear();
    }

    @NotNull
    @Override
    public Set<String> keySet() {
        return schemas.keySet();
    }

    @NotNull
    @Override
    public Collection<Schema> values() {
        return schemas.values();
    }

    @NotNull
    @Override
    public Set<Entry<String, Schema>> entrySet() {
        return schemas.entrySet();
    }
}