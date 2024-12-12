package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

@Data
public class MediaType {
    @NonNull
    private final Schema schema;
}
