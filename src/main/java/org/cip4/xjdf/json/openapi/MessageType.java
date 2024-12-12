package org.cip4.xjdf.json.openapi;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public record MessageType(org.cip4.xjdf.json.openapi.MessageType.Type type, Path path, String family) {

    public enum Type {
        REQUEST, RESPONSE, SIGNAL
    }

    private static final Pattern REGEX = Pattern.compile("^(Command|Query|Response|Signal)(.*)$");

    public static MessageType fromElement(String elementName) {
        Matcher matcher = REGEX.matcher(elementName);
        if (!matcher.find()) {
            throw new RuntimeException(String.format("Could not map '%s' to a message type.", elementName));
        }

        String type = matcher.group(1);
        String family = matcher.group(2);

        String path = switch (family) {
            case "PipeControl" -> "/pipe-control";
            case "KnownDevices" -> "/known-devices";
            case "ShutDown" -> "/shutdown";
            case "KnownMessages" -> "/known-messages";
            case "Notification" -> "/notification";
            case "Status" -> "/status";
            case "SubmitQueueEntry" -> "/queue-entry/submit";
            case "ReturnQueueEntry" -> "/queue-entry/return";
            case "ModifyQueueEntry" -> "/queue-entry/modify";
            case "ResubmitQueueEntry" -> "/queue-entry/resubmit";
            case "KnownSubscriptions" -> "/known-subscriptions";
            case "StopPersistentChannel" -> "/persistent-channel/stop";
            case "Resource" -> switch (type) {
                case "Command" -> "/resource/command";
                case "Query", "Signal", "Response" -> "/resource/query";
                default -> throw new RuntimeException(String.format(
                    "Could not map '%s' to a message type.",
                    elementName
                ));
            };
            default -> throw new RuntimeException(String.format("Could not map '%s' to a message type.", elementName));
        };

        return new MessageType(
            switch (type) {
                case "Command", "Query" -> Type.REQUEST;
                case "Response" -> Type.RESPONSE;
                case "Signal" -> Type.SIGNAL;
                default -> throw new RuntimeException(String.format("Unknown type '%s'", type));
            },
            Paths.get(path),
            family
        );
    }
}
