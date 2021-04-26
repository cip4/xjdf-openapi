package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
data class NamedSchema(
    val name: String,
    val schema: Schema
): YmlModel {

    override fun toYml(): String {
        return "$name:\n${schema.toYml().prependIndent("  ")}"
    }

    override fun toString(): String {
        return toYml()
    }

}