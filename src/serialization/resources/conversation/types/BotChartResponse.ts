/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ChartSpecSchema } from "./ChartSpecSchema";

export const BotChartResponse: core.serialization.ObjectSchema<
    serializers.BotChartResponse.Raw,
    MavenAGI.BotChartResponse
> = core.serialization.object({
    label: core.serialization.string(),
    specSchema: ChartSpecSchema,
    spec: core.serialization.string(),
});

export declare namespace BotChartResponse {
    interface Raw {
        label: string;
        specSchema: ChartSpecSchema.Raw;
        spec: string;
    }
}