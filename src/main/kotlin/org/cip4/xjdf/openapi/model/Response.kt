package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
class Response (
    val content: Map<String, MediaType>,
    val description: String
)
