package org.cip4.xjdf.openapi

import org.cip4.xjdf.openapi.model.*

class PathsGenerator {

    fun paths(): Map<String, PathItem> {
        return mapOf(
            Pair(
                "/queue-entry/submit",
                PathItem(
                    post = Operation(
                        requestBody = RequestBody(
                            mapOf(
                                Pair(
                                    "application/json",
                                    MediaType(
                                        strippedXjmf("CommandSubmitQueueEntry")
                                    )
                                ),
                                Pair(
                                    "multipart/form-data",
                                    MediaType(
                                        Schema(
                                            type = "object",
                                            properties = mapOf(
                                                Pair(
                                                    "XJMF",
                                                    strippedXjmf("CommandSubmitQueueEntry"),
                                                ),
                                                Pair(
                                                    "XJDF",
                                                    Schema(`$ref` = "#/components/schemas/XJDF")
                                                ),
                                                Pair(
                                                    "attachments",
                                                    Schema(
                                                        type = "array",
                                                        items = Schema(
                                                            type = "string",
                                                            format = "binary"
                                                        )
                                                    )
                                                )
                                            ),
                                            required = listOf("XJMF")
                                        )
                                    )
                                )
                            )
                        ),
                        responses = mapOf(
                            Pair(
                                "200",
                                Response(
                                    content = mapOf(
                                        Pair(
                                            "application/json",
                                            MediaType(
                                                strippedXjmf("ResponseSubmitQueueEntry")
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            Pair(
                "/queue-status/query",
                PathItem(
                    post = Operation(
                        requestBody = RequestBody(
                            mapOf(
                                Pair(
                                    "application/json",
                                    MediaType(
                                        strippedXjmf("QueryQueueStatus")
                                    )
                                )
                            )
                        ),
                        responses = mapOf(
                            Pair(
                                "200",
                                Response(
                                    content = mapOf(
                                        Pair(
                                            "application/json",
                                            MediaType(
                                                strippedXjmf("ResponseQueueStatus")
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    }

    fun strippedXjmf(operation: String): Schema {
        return Schema(
            type = "object",
            properties = mapOf(
                Pair("Version", Schema(type = "string")),
                Pair("Header", Schema(`$ref` = "#/components/schemas/Header")),
                Pair(operation, Schema(`$ref` = "#/components/schemas/$operation"))
            ),
            required = listOf("Header", operation)
        )
    }

}