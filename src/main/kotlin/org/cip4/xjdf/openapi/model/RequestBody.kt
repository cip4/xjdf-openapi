package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
data class RequestBody (
    val content: Map<String, MediaType>
)
