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
                            required = true,
                            content = mapOf(
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
                        responses = responses("ResponseSubmitQueueEntry")
                    )
                )
            ),
            command("/queue-entry/modify", "ModifyQueueEntry"),
            command("/queue-entry/resubmit", "ResubmitQueueEntry"),
            command("/queue-entry/return", "ReturnQueueEntry"),
            command("/queue-entry/request", "RequestQueueEntry"),
            command("/gang/force", "ForceGang"),
            query("/gang/status", "GangStatus", true),
            query("/known-devices", "KnownDevices", true),
            query("/known-messages", "KnownMessages", false),
            query("/known-subscriptions", "KnownSubscriptions", true),
            query("/notification", "Notification", true),
            command("/pipe-control", "PipeControl"),
            query("/queue-status", "QueueStatus", false),
            command("/resource/command", "Resource"),
            query("/resource/query", "Resource", true),
            command("/persistent-channel/stop", "StopPersistentChannel"),
            query("/status", "Status", true),
            command("/wake-up", "WakeUp"),
            command("/shutdown", "ShutDown"),
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

    private fun buildPathItem(
        path: String,
        requestType: String,
        responseType: String,
        callbackType: String? = null
    ): Pair<String, PathItem> {
        return Pair(
            path,
            PathItem(
                post = Operation(
                    requestBody = requestBody(requestType),
                    responses = responses(responseType),
                    callbacks = callbackType?.let { callbacks(requestType, callbackType) }
                )
            )
        )
    }

    private fun responses(responseType: String) = mapOf(
        Pair(
            "200",
            Response(
                content = mapOf(
                    Pair(
                        "application/json",
                        MediaType(
                            strippedXjmf(responseType)
                        )
                    )
                ),
                description = "TBD" // TODO: Add required description
            )
        )
    )

    private fun callbacks(queryType: String, signalType: String) = mapOf(
        Pair(
            "signal",
            mapOf(
                Pair(
                    "{\$request.body#/$queryType/Subscription}", // "{\$request.body#/$queryType/Subscription/URL}"
                    PathItem(
                        post = Operation(
                            requestBody = requestBody(signalType),
                            responses = responses("XJDF") //TODO: Map to correct type
                        )
                    )
                )
            )
        )
    )

    private fun requestBody(requestType: String) = RequestBody(
        required = true,
        content = mapOf(
            Pair(
                "application/json",
                MediaType(
                    strippedXjmf(requestType)
                )
            )
        )
    )

    private fun command(path: String, command: String): Pair<String, PathItem> {
        return buildPathItem(path, "Command$command", "Response$command")
    }

    private fun query(path: String, query: String, hasSignal: Boolean): Pair<String, PathItem> {
        return buildPathItem(
            path,
            "Query$query",
            "Response$query",
            if (hasSignal) "Signal$query" else null
        )
    }

}