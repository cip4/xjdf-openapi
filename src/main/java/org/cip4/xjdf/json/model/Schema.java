package org.cip4.xjdf.json.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@Builder
public class Schema {
    private String $schema;
    private String $id;
    private String type;
    private Map<String, Schema> properties;
    private List<String> required;
    private Schema items;
    private String format;
    private List<String> enumValues;
    private Float minimum;
    private Float maximum;
    private String pattern;
    private List<Schema> oneOf;
    private Discriminator discriminator;
    private List<Schema> allOf;
    private List<Schema> anyOf;
    @NonNull
    @Builder.Default
    private Schemas schemas = new Schemas();
    private String $ref;
}