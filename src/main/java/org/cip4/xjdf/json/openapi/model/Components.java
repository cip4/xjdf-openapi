package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NonNull;

@Data
public class Components {
    @NonNull
    private final Schema[] schemas = new Schema[0];
}
