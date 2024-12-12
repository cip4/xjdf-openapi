package org.cip4.xjdf.json.openapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
public class Discriminator {
    @NonNull
    private final String propertyName;
}
