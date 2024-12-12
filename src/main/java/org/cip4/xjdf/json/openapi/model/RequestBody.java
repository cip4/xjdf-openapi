package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

import java.util.Map;

@Data
public class RequestBody {
    private final boolean required;
    @NonNull
    private final Map<String, MediaType> content;
}
