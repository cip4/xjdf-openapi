package org.cip4.xjdf.json.openapi.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PathItem {
    private final String summary;
    private final Operation get;
    private final Operation post;
}
