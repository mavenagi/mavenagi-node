/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationGroupBy } from "./ConversationGroupBy";
import { ConversationMetric } from "./ConversationMetric";
import { ConversationAnalyticsRequest } from "./ConversationAnalyticsRequest";

export const BarChartRequest: core.serialization.ObjectSchema<
    serializers.BarChartRequest.Raw,
    MavenAGI.BarChartRequest
> = core.serialization
    .object({
        barDefinition: ConversationGroupBy,
        metric: ConversationMetric,
        verticalGrouping: ConversationGroupBy.optional(),
    })
    .extend(ConversationAnalyticsRequest);

export declare namespace BarChartRequest {
    interface Raw extends ConversationAnalyticsRequest.Raw {
        barDefinition: ConversationGroupBy.Raw;
        metric: ConversationMetric.Raw;
        verticalGrouping?: ConversationGroupBy.Raw | null;
    }
}
