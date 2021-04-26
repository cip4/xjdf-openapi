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
    var pattern: String? = null,
    var oneOf: List<Reference>? = null,
    var allOf: List<Schema>? = null,
    var minItems: Int? = null,
    val `$ref`: String? = null
) : YmlModel {

    override fun toYml(): String {
        return StringBuilder().apply {
            type?.let { type ->
                appendLine("type: $type")
            }
            items?.let { items ->
                appendLine("items:")
                appendLine(items.toYml().prependIndent("  "))
            }
            enum?.let { enum ->
                appendLine("enum: [ ${enum.joinToString(", ") { "'$it'" }} ]")
            }
            minimum?.let { minimum ->
                appendLine("minimum: $minimum")
            }
            minItems?.let { minItems ->
                appendLine("minItems: $minItems")
            }
            pattern?.let { pattern ->
                appendLine("pattern: '$pattern'")
            }
            format?.let { format ->
                appendLine("format: $format")
            }
            oneOf?.let { oneOf ->
                appendLine("oneOf:")
                oneOf.forEach { item ->
                    appendLine("  - ${item.toYml().prependIndent("    ").trimStart(' ')}")
                }
            }
            allOf?.let { allOf ->
                appendLine("allOf:")
                allOf.forEach { item ->
                    appendLine("  - ${item.toYml().prependIndent("    ").trimStart(' ')}")
                }
            }
            properties?.let { properties ->
                appendLine("properties:")
                properties.forEach { property ->
                    appendLine((property.key + ": " + property.value.toYml()).prependIndent("  "))
                }
            }
            required?.let { required ->
                appendLine("required: [ ${required.joinToString(", ")} ]")
            }
        }.toString().trimEnd()
    }

    companion object {
        fun ref(reference: String) = Schema(`$ref` = "#/components/schemas/$reference")
    }
}