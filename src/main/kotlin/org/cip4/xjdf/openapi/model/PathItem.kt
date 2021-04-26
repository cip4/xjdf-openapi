package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
data class PathItem(
    val summary: String
): PathItemOrReference {
    override fun toYml(): String {
        return "summary: $summary"
    }
}
