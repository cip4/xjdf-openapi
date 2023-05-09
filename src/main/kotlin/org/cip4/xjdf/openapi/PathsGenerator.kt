/*
 * The CIP4 Software License, Version 1.0
 *
 * Copyright (c) 2001-2021 The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress (CIP4). All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation and/or
 * other materials provided with the distribution.
 *
 * 3. The end-user documentation included with the redistribution, if any, must
 * include the following acknowledgment: &quot;This product includes software developed
 * by the The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress (www.cip4.org)&quot; Alternately, this acknowledgment
 * may appear in the software itself, if and wherever such third-party
 * acknowledgments normally appear.
 *
 * 4. The names &quot;CIP4&quot; and &quot;The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress&quot; must not be used to endorse or
 * promote products derived from this software without prior written permission.
 * For written permission, please contact info@cip4.org
 *
 * 5. Products derived from this software may not be called &quot;CIP4&quot;, nor may &quot;CIP4&quot;
 * appear in their name, without prior written permission of the CIP4 organization
 *
 * &quot;CIP4&quot; and &quot;The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress&quot; are trademarks of The International Cooperation
 * for the Integration of Processes in Prepress, Press and Postpress (CIP4).  All
 * other names and brands are the property of their respective owners.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. CIP4 AND ITS CONTRIBUTORS MAKE
 * NO REPRESENTATION THAT THE USE OF THIS SOFTWARE OR DATA WILL NOT INFRINGE ANY
 * PATENTS, COPYRIGHTS, TRADEMARKS, OR OTHER RIGHTS. IN NO EVENT SHALL CIP4 OR ITS
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
 * OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
 * OF SUCH DAMAGE.
 * ====================================================================
 *
 * This software consists of voluntary contributions made by many individuals on
 * behalf of the The International Cooperation for the Integration of Processes in
 * Prepress, Press and Postpress and was originally based on software some of which
 * contributed by and copyrighted by Adobe Systems and Man Roland. copyright (c)
 * 2000-2001, Adobe Systems copyright (c) 2001-2001, Man Roland
 *
 * For more information on The International Cooperation for the Integration of
 * Processes in Prepress, Press and Postpress , please see &lt;http://www.cip4.org/&gt;.
 */

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
                                    "application/vnd.cip4-xjmf+json",
                                    MediaType(
                                        strippedXjmf("CommandSubmitQueueEntry")
                                    )
                                ),
                                Pair(
                                    "multipart/form-data",
                                    MediaType(
                                        Schema(
                                            type = "object",
                                            properties = mutableMapOf(
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
                                            required = mutableListOf("XJMF")
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

    private fun strippedXjmf(operation: String): Schema {
        return Schema(
            type = "object",
            properties = mutableMapOf(
                Pair("Version", Schema(type = "string")),
                Pair("Header", Schema(`$ref` = "#/components/schemas/Header")),
                Pair(operation, Schema(`$ref` = "#/components/schemas/$operation"))
            ),
            required = mutableListOf("Header", operation)
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
                        "application/vnd.cip4-xjmf+json",
                        MediaType(
                            strippedXjmf(responseType)
                        )
                    )
                ),
                // TODO: Add required description
                description = ""
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
                "application/vnd.cip4-xjmf+json",
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