package org.cip4.xjdf.openapi.model

import com.charleskorn.kaml.Yaml
import kotlinx.serialization.*

@Serializable
data class Info(
    val title: String,
    val description: String?,
    val version: String
): YmlModel