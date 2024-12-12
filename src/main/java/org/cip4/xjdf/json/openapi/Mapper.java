package org.cip4.xjdf.json.openapi;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import lombok.SneakyThrows;

public class Mapper {

    @SneakyThrows
    public String toYamlString(Object schema) {
        YAMLMapper mapper = new YAMLMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        mapper.setSerializationInclusion(JsonInclude.Include.NON_DEFAULT);
        mapper.configure(YAMLGenerator.Feature.WRITE_DOC_START_MARKER, false);
        mapper.configure(YAMLGenerator.Feature.MINIMIZE_QUOTES, true);
        mapper.configure(YAMLGenerator.Feature.INDENT_ARRAYS_WITH_INDICATOR, true);
        mapper.configure(YAMLGenerator.Feature.USE_NATIVE_TYPE_ID, true);

        return mapper.writeValueAsString(schema);
    }
}
