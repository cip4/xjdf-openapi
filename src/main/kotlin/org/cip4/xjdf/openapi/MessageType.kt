package org.cip4.xjdf.openapi

import java.nio.file.Path
import java.nio.file.Paths

data class MessageType(
    val type: Type,
    val path: Path,
    val family: String
    ) {

    enum class Type {
        REQUEST, RESPONSE, SIGNAL
    }

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
                "Notification" -> "/notification"
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
                    "Signal" -> "/resource/query"
                    "Response" -> "/resource/query"
                    else -> throw RuntimeException("Could not map '$elementName' to a message type.")
                }
                else -> throw RuntimeException("Could not map '$elementName' to a message type.")
            }
            return MessageType(
                when (type) {
                    "Command" -> Type.REQUEST
                    "Query" -> Type.REQUEST
                    "Response" -> Type.RESPONSE
                    "Signal" -> Type.SIGNAL
                    else -> throw RuntimeException("Unknown type '$type'")
                },
                Paths.get(path),
                family
            )
        }
    }
}
