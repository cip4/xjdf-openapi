package org.cip4.xjdf.json.openapi;

import org.cip4.xjdf.json.openapi.model.*;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class PathsGenerator {

    private final TypeMap typeMap;

    public PathsGenerator(TypeMap typeMap) {
        this.typeMap = typeMap;
    }

    public Map<String, PathItem> paths() {
        return Stream.of(
            Map.entry(
                "/queue-entry/submit",
                PathItem.post(
                    Operation.builder()
                        .requestBody(requestBody("CommandSubmitQueueEntry"))
                        .responses(responses("ResponseSubmitQueueEntry"))
                        .build()
                )
            ),
            Map.entry("/queue-entry/modify", command("ModifyQueueEntry")),
            Map.entry("/queue-entry/resubmit", command("ResubmitQueueEntry")),
            Map.entry("/queue-entry/return", command("ReturnQueueEntry")),
            Map.entry("/queue-entry/request", command("RequestQueueEntry")),
            Map.entry("/gang/force", command("ForceGang")),
            Map.entry("/gang/status", query("GangStatus", true)),
            Map.entry("/known-devices", query("KnownDevices", true)),
            Map.entry("/known-messages", query("KnownMessages", false)),
            Map.entry("/known-subscriptions", query("KnownSubscriptions", true)),
            Map.entry("/notification", query("Notification", true)),
            Map.entry("/pipe-control", command("PipeControl")),
            Map.entry("/queue-status", query("QueueStatus", false)),
            Map.entry("/resource/command", command("Resource")),
            Map.entry("/resource/query", query("Resource", true)),
            Map.entry("/persistent-channel/stop", command("StopPersistentChannel")),
            Map.entry("/status", query("Status", true)),
            Map.entry("/wake-up", command("WakeUp")),
            Map.entry("/shutdown", command("ShutDown"))
        ).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    }

    private Schema strippedXjmf(String operation) {
        Schemas properties = new Schemas();
        properties.put("Version", new Schema().type("string"));
        properties.put("Header", typeMap.getReference("Header"));
        properties.put(operation, typeMap.getReference(operation));

        return new Schema()
            .type("object")
            .properties(properties)
            .required(Arrays.asList("Header", operation));
    }

    private PathItem buildPathItem(String requestType, String responseType, String callbackType) {
        return PathItem.post(
            Operation.builder()
                .requestBody(requestBody(requestType))
                .responses(responses(responseType))
                .callbacks(callbackType != null ? callbacks(requestType, callbackType) : null)
                .build()
        );
    }

    private Map<String, Response> responses(String responseType) {
        Map<String, Response> responseMap = new HashMap<>();
        responseMap.put(
            "200", new Response(
                Map.of("application/vnd.cip4-xjmf+json", new MediaType(strippedXjmf(responseType))),
                "" // Add description if required
            )
        );
        return responseMap;
    }

    private Map<String, Map<String, PathItem>> callbacks(String queryType, String signalType) {
        return Map.of(
            "signal", Map.of(
                "{\\$request.body#/" + queryType + "/Subscription}",
                PathItem.post(
                    Operation.builder()
                        .requestBody(requestBody(signalType))
                        .responses(responses("XJDF")) // Map to correct type if needed
                        .build()
                )
            )
        );
    }

    private RequestBody requestBody(String requestType) {
        return new RequestBody(
            true,
            Map.of("application/vnd.cip4-xjmf+json", new MediaType(strippedXjmf(requestType)))
        );
    }

    private PathItem command(String command) {
        return buildPathItem(
            "Command" + command,
            "Response" + command,
            null
        );
    }

    private PathItem query(String query, boolean hasSignal) {
        return buildPathItem(
            "Query" + query,
            "Response" + query,
            hasSignal ? "Signal" + query : null
        );
    }
}
