package org.cip4.xjdf.openapi.model

import com.charleskorn.kaml.Yaml
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString

@Serializable
data class NamedSchema(
    val name: String,
    val schema: Schema
): YmlModel