package org.cip4.xjdf.json.openapi.model;

import lombok.Data;

@Data
public class PathItem {
    private final Operation get;
    private final Operation post;

    public static PathItem get(Operation get) {
        return new PathItem(get, null);
    }

    public static PathItem post(Operation post) {
        return new PathItem(null, post);
    }
}
