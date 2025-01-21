package org.cip4.xjdf.json.openapi.model;

import com.fasterxml.jackson.annotation.JsonTypeName;
import lombok.*;

import java.util.Map;

@AllArgsConstructor
@Getter
@JsonTypeName("OpenApi")
public class OpenApi {
    @NonNull
    private final String openapi;
    @NonNull
    private final Info info;
    @NonNull
    private final Map<String, PathItem> paths;
    @NonNull
    private final Components components;
}