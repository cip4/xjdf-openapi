package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
data class Operation (
    val tags: List<String>? = null,
    val requestBody: RequestBody? = null,
    val responses: Map<String, Response>? = null,
    val callbacks: Map<String, Map<String, PathItem>>? = null,
)
