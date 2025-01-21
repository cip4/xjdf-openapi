package org.cip4.xjdf.json.openapi;

import com.networknt.schema.*;
import org.junit.jupiter.api.Test;

class OpenApiConverterTest {

    @Test
    public void generatedXjdfJsonSchemaIsValid() {
        JsonSchemaFactory jsonSchemaFactory = JsonSchemaFactory.getInstance(SpecVersion.VersionFlag.V202012);
        SchemaValidatorsConfig config = SchemaValidatorsConfig.builder().build();
        JsonSchema schema = jsonSchemaFactory.getSchema(SchemaLocation.of(SchemaId.OPENAPI_3_1), config);

        SchemaSingleton.assertValid(
            schema,
            SchemaSingleton.openApiSpec.getSchemaNode()
        );
    }

}