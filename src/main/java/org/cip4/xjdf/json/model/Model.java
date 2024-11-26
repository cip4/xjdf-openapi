package org.cip4.xjdf.json.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;

@Data
@AllArgsConstructor
public class Model {
    @NonNull
    private final String name;
    @NonNull
    private final Schema schema;
}