/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { AskStreamTextEvent } from "./AskStreamTextEvent";
import { AskStreamActionEvent } from "./AskStreamActionEvent";
import { AskStreamChartEvent } from "./AskStreamChartEvent";
import { AskStreamMetadataEvent } from "./AskStreamMetadataEvent";
import { AskStreamStartEvent } from "./AskStreamStartEvent";
import { AskStreamEndEvent } from "./AskStreamEndEvent";

export const StreamResponse: core.serialization.Schema<serializers.StreamResponse.Raw, MavenAGI.StreamResponse> =
    core.serialization
        .union("eventType", {
            text: AskStreamTextEvent,
            action: AskStreamActionEvent,
            chart: AskStreamChartEvent,
            metadata: AskStreamMetadataEvent,
            start: AskStreamStartEvent,
            end: AskStreamEndEvent,
        })
        .transform<MavenAGI.StreamResponse>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace StreamResponse {
    export type Raw =
        | StreamResponse.Text
        | StreamResponse.Action
        | StreamResponse.Chart
        | StreamResponse.Metadata
        | StreamResponse.Start
        | StreamResponse.End;

    export interface Text extends AskStreamTextEvent.Raw {
        eventType: "text";
    }

    export interface Action extends AskStreamActionEvent.Raw {
        eventType: "action";
    }

    export interface Chart extends AskStreamChartEvent.Raw {
        eventType: "chart";
    }

    export interface Metadata extends AskStreamMetadataEvent.Raw {
        eventType: "metadata";
    }

    export interface Start extends AskStreamStartEvent.Raw {
        eventType: "start";
    }

    export interface End extends AskStreamEndEvent.Raw {
        eventType: "end";
    }
}
