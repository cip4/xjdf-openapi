package org.cip4.xjdf.json.openapi.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.experimental.Accessors;
import org.jetbrains.annotations.NotNull;

import java.util.*;

@Data
@NoArgsConstructor
@Accessors(fluent = true)
public class Schema {
    @JsonProperty(value = "$schema", index = 0)
    private String schema;
    @JsonProperty("$id")
    private String id;
    @JsonProperty
    private String type;
    @JsonProperty
    private Schemas properties;
    @JsonProperty
    private List<String> required = new ArrayList<>();
    @JsonProperty
    private Schema items;
    @JsonProperty
    private String format;
    @JsonProperty("enum")
    private List<String> enumValues;
    @JsonProperty
    private Float minimum;
    @JsonProperty
    private Float maximum;
    @JsonProperty
    private String pattern;
    @JsonProperty
    private List<Schema> oneOf;
    @JsonProperty
    private Discriminator discriminator;
    @JsonProperty
    private List<Schema> allOf;
    @JsonProperty
    private List<Schema> anyOf;
    @JsonProperty
    private Schema not;
    @JsonProperty
    private Integer minItems;
    @JsonProperty
    private Integer maxItems;
    @JsonProperty("const")
    private String constValue;
    @JsonProperty("$ref")
    private String ref;
    private Schemas defs = new Schemas();

    public void oneOfAdd(List<Schema> schemas) {
        if (oneOf == null) {
            oneOf = new ArrayList<>();
        }
        oneOf.addAll(schemas);
    }

    public void propertiesPutAll(@NonNull Map<String, Schema> map) {
        if (properties == null) {
            properties = new Schemas();
        }
        properties.putAll(map);
    }

    public void propertiesPut(@NonNull String name, @NonNull Schema schema) {
        if (properties == null) {
            properties = new Schemas();
        }
        properties.put(name, schema);
    }

    @JsonGetter("$defs")
    public Map<String, Schema> defsForJson() {
        if (defs == null || defs.isEmpty()) {
            return null;
        } else {
            return defs;
        }
    }

    @JsonSetter("$defs")
    public void defsFromJson(Schemas defs) {
        this.defs = defs;
    }
}