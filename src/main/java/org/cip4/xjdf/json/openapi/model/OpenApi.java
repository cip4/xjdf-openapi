package org.cip4.xjdf.json.openapi.model;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.Data;
import lombok.NonNull;

import java.util.Map;

@Data
@JsonTypeName("OpenApi")
public class OpenApi {
    @NonNull
    private final String openapi;
    @NonNull
    private final Info info;
    @NonNull
    private final Map<String, PathItem> paths;
    @NonNull
    private Components components  = new Components();
}