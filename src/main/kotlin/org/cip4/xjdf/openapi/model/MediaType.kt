package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
data class MediaType (
    val schema: Schema
)
