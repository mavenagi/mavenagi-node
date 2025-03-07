/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { TimeInterval } from "./TimeInterval";
import { ConversationGroupBy } from "./ConversationGroupBy";
import { ConversationColumnDefinition } from "./ConversationColumnDefinition";
import { ConversationAnalyticsRequest } from "./ConversationAnalyticsRequest";

export const ConversationTableRequest: core.serialization.ObjectSchema<
    serializers.ConversationTableRequest.Raw,
    MavenAGI.ConversationTableRequest
> = core.serialization
    .object({
        timeGrouping: TimeInterval.optional(),
        fieldGroupings: core.serialization.list(ConversationGroupBy),
        columnDefinitions: core.serialization.list(ConversationColumnDefinition),
    })
    .extend(ConversationAnalyticsRequest);

export declare namespace ConversationTableRequest {
    interface Raw extends ConversationAnalyticsRequest.Raw {
        timeGrouping?: TimeInterval.Raw | null;
        fieldGroupings: ConversationGroupBy.Raw[];
        columnDefinitions: ConversationColumnDefinition.Raw[];
    }
}
