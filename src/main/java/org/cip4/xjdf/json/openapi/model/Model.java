package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

@Data
public class Model {
    @NonNull
    private final String name;
    @NonNull
    private final Schema schema;
}