/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { Series } from "./Series";

export const BarChartResponse: core.serialization.ObjectSchema<
    serializers.BarChartResponse.Raw,
    MavenAGI.BarChartResponse
> = core.serialization.object({
    series: core.serialization.list(Series),
});

export declare namespace BarChartResponse {
    interface Raw {
        series: Series.Raw[];
    }
}
