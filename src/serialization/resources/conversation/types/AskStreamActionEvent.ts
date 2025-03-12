/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { BotActionFormResponse } from "../../commons/types/BotActionFormResponse";

export const AskStreamActionEvent: core.serialization.ObjectSchema<
    serializers.AskStreamActionEvent.Raw,
    MavenAGI.AskStreamActionEvent
> = core.serialization.object({}).extend(BotActionFormResponse);

export declare namespace AskStreamActionEvent {
    export interface Raw extends BotActionFormResponse.Raw {}
}
