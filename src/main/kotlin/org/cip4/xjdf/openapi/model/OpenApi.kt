package org.cip4.xjdf.openapi.model

import com.charleskorn.kaml.Yaml
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString

@Serializable
@SerialName("OpenApi")
data class OpenApi(
    val openapi: String,
    val info: Info,
    val paths: Map<String, PathItem>,
    var components: Components = Components()
) : YmlModel {
    override fun toYml(): String {
        return Yaml.default.encodeToString(this)
    }
}