package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.Schema

class TypeMap(schemas: Map<String, Schema>) {

    private val types: MutableMap<String, String> = mutableMapOf()

    init {
        schemas.forEach { register(it.key, it.value) }
    }

    private fun register(rootElement: String, schema: Schema) {
        types[rootElement] = schema.`$id`!!
        val prefix = schema.`$id` + "#/\$defs/"
        schema.`$defs`.keys.forEach { elementName ->
            types[elementName] = prefix.plus(elementName)
        }
    }

    fun getReference(elementName: String): Schema {
        return Schema(
            `$ref` = types[elementName]
        )
    }

}