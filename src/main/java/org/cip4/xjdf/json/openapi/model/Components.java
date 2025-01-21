package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

import java.util.Map;

@Data
public class Components {
    @NonNull
    private final Map<String, Schema> schemas;
}
