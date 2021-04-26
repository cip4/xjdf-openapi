package org.cip4.xjdf.openapi.model

import com.charleskorn.kaml.Yaml
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString

@Serializable
data class Components(
    val schemas: MutableMap<String, Schema> = mutableMapOf()
) : YmlModel {

    fun add(name: String, schema: Schema) {
        schemas[name] = schema
    }

    fun add(namedSchema: NamedSchema) {
        add(namedSchema.name, namedSchema.schema)
    }

    override fun toString(): String {
        return Yaml.default.encodeToString(this)
    }


}