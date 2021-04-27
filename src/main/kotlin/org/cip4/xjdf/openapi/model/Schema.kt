package org.cip4.xjdf.openapi.model

import kotlinx.serialization.Serializable

@Serializable
data class Schema(
    var type: String? = null,
    var properties: Map<String, Schema>? = null,
    var required: List<String>? = null,
    var items: Schema? = null,
    var format: String? = null,
    var enum: List<String>? = null,
    var minimum: Int? = null,
    var maximum: Int? = null,
    var pattern: String? = null,
    var oneOf: List<Reference>? = null,
    var allOf: List<Schema>? = null,
    var minItems: Int? = null,
    var maxItems: Int? = null,
    val `$ref`: String? = null
) : YmlModel {

    companion object {
        fun ref(reference: String) = Schema(`$ref` = "#/components/schemas/$reference")
    }
}