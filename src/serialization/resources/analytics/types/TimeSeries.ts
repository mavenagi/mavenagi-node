/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { TimeDataPoint } from "./TimeDataPoint";

export const TimeSeries: core.serialization.ObjectSchema<serializers.TimeSeries.Raw, MavenAGI.TimeSeries> =
    core.serialization.object({
        name: core.serialization.string(),
        data: core.serialization.list(TimeDataPoint),
    });

export declare namespace TimeSeries {
    export interface Raw {
        name: string;
        data: TimeDataPoint.Raw[];
    }
}
