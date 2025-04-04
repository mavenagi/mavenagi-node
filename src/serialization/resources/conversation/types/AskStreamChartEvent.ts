/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { BotChartResponse } from "../../commons/types/BotChartResponse";

export const AskStreamChartEvent: core.serialization.ObjectSchema<
    serializers.AskStreamChartEvent.Raw,
    MavenAGI.AskStreamChartEvent
> = core.serialization.object({}).extend(BotChartResponse);

export declare namespace AskStreamChartEvent {
    export interface Raw extends BotChartResponse.Raw {}
}
