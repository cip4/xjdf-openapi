package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

import java.util.Map;

@Data
public class Response {
    @NonNull
    private final Map<String, MediaType> content;
    @NonNull
    private String description;
}
