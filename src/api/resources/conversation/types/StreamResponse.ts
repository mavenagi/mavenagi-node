/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export type StreamResponse =
    | MavenAGI.StreamResponse.Text
    | MavenAGI.StreamResponse.Action
    | MavenAGI.StreamResponse.Chart
    | MavenAGI.StreamResponse.Metadata
    | MavenAGI.StreamResponse.Start
    | MavenAGI.StreamResponse.End;

export declare namespace StreamResponse {
    interface Text extends MavenAGI.AskStreamTextEvent {
        eventType: "text";
    }

    interface Action extends MavenAGI.AskStreamActionEvent {
        eventType: "action";
    }

    interface Chart extends MavenAGI.AskStreamChartEvent {
        eventType: "chart";
    }

    interface Metadata extends MavenAGI.AskStreamMetadataEvent {
        eventType: "metadata";
    }

    interface Start extends MavenAGI.AskStreamStartEvent {
        eventType: "start";
    }

    interface End extends MavenAGI.AskStreamEndEvent {
        eventType: "end";
    }
}
