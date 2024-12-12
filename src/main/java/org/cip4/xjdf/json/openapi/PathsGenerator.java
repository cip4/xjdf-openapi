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
        Map<String, PathItem> paths = new HashMap<>();

        paths.put(
            "/queue-entry/submit",
            PathItem.builder()
                .post(
                    Operation.builder()
                        .requestBody(requestBody("CommandSubmitQueueEntry"))
                        .responses(responses("ResponseSubmitQueueEntry"))
                        .build()
                )
                .build()
        );

        paths.putAll(
            Stream.of(
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
                command("/shutdown", "ShutDown")
            ).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue))
        );

        return paths;
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

    private Map.Entry<String, PathItem> buildPathItem(String path, String requestType, String responseType, String callbackType) {
        return Map.entry(
            path, PathItem.builder().post(
                Operation.builder()
                    .requestBody(requestBody(requestType))
                    .responses(responses(responseType))
                    .callbacks(callbackType != null ? callbacks(requestType, callbackType) : null)
                    .build()
            ).build()
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
                // "{\\$request.body#/" + queryType + "/Subscription/URL}"
                PathItem.builder().post(
                    Operation.builder()
                        .requestBody(requestBody(signalType))
                        .responses(responses("XJDF")) // Map to correct type if needed
                        .build()
                ).build()
            )
        );
    }

    private RequestBody requestBody(String requestType) {
        return new RequestBody(
            true,
            Map.of("application/vnd.cip4-xjmf+json", new MediaType(strippedXjmf(requestType)))
        );
    }

    private Map.Entry<String, PathItem> command(String path, String command) {
        return buildPathItem(path, "Command" + command, "Response" + command, null);
    }

    private Map.Entry<String, PathItem> query(String path, String query, boolean hasSignal) {
        return buildPathItem(
            path,
            "Query" + query,
            "Response" + query,
            hasSignal ? "Signal" + query : null
        );
    }
}
