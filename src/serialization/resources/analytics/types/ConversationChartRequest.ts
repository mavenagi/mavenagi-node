/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationPieChartRequest } from "./ConversationPieChartRequest";
import { ConversationDateHistogramRequest } from "./ConversationDateHistogramRequest";
import { ConversationBarChartRequest } from "./ConversationBarChartRequest";

export const ConversationChartRequest: core.serialization.Schema<
    serializers.ConversationChartRequest.Raw,
    MavenAGI.ConversationChartRequest
> = core.serialization
    .union("type", {
        pieChart: ConversationPieChartRequest,
        dateHistogram: ConversationDateHistogramRequest,
        barChart: ConversationBarChartRequest,
    })
    .transform<MavenAGI.ConversationChartRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ConversationChartRequest {
    export type Raw =
        | ConversationChartRequest.PieChart
        | ConversationChartRequest.DateHistogram
        | ConversationChartRequest.BarChart;

    export interface PieChart extends ConversationPieChartRequest.Raw {
        type: "pieChart";
    }

    export interface DateHistogram extends ConversationDateHistogramRequest.Raw {
        type: "dateHistogram";
    }

    export interface BarChart extends ConversationBarChartRequest.Raw {
        type: "barChart";
    }
}
