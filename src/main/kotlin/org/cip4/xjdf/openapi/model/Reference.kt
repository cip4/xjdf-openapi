package org.cip4.xjdf.openapi.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
@SerialName("Reference")
data class Reference (
    val `$ref`: String
): YmlModel {

    override fun toYml(): String = "\$ref: '#/components/schemas/$`$ref`'"

}