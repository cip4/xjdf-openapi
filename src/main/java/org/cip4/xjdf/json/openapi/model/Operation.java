package org.cip4.xjdf.json.openapi.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@Builder
public class Operation {
    private final List<String> tags;
    private final RequestBody requestBody;
    private final Map<String, Response> responses;
    private final Map<String, Map<String, PathItem>> callbacks;
}
