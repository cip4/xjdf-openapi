package org.cip4.xjdf.openapi

import java.nio.file.Path
import java.nio.file.Paths

data class MessageType(
    val isRequest: Boolean,
    val path: Path,
    val family: String
    ) {
    companion object Factory {
        private val regex = Regex("^(Command|Query|Response|Signal)(.*)$")
        fun fromElement(elementName: String): MessageType {
            val match = regex.find(elementName)
                ?: throw RuntimeException("Could not map '%s' to a message type.".format(elementName))
            val (type, family) = match.destructured

            val path = when (family) {
                "PipeControl" -> "/pipe-control"
                "KnownDevices" -> "/known-devices"
                "ShutDown" -> "/shutdown"
                "KnownMessages" -> "/known-messages"
                "Status" -> "/status"
                "SubmitQueueEntry" -> "/queue-entry/submit"
                "ReturnQueueEntry" -> "/queue-entry/return"
                "ModifyQueueEntry" -> "/queue-entry/modify"
                "ResubmitQueueEntry" -> "/queue-entry/resubmit"
                "KnownSubscriptions" -> "/known-subscriptions"
                "StopPersistentChannel" -> "/persistent-channel/stop"
                "Resource" -> when(type) {
                    "Command" -> "/resource/command"
                    "Query" -> "/resource/query"
                    else -> throw RuntimeException("Could not map '%s' to a message type.".format(elementName))
                }
                else -> throw RuntimeException("Could not map '%s' to a message type.".format(elementName))
            }
            val isRequest = type == "Command" || type == "Query"
            return MessageType(isRequest, Paths.get(path), family)
        }

        private fun request(path: String): Pair<Boolean, Path> {
            return Pair(true, Paths.get(path))
        }

    }

}
