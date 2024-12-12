package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

@Data
public class Info {
    @NonNull
    private final String title;

    private final String description;

    @NonNull
    private final String version;
}
