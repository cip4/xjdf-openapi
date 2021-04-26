package org.cip4.xjdf.openapi.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Reference (
    val `$ref`: String
): YmlModel