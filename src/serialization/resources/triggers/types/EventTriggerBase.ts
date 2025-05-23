/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EventTriggerType } from "./EventTriggerType";

export const EventTriggerBase: core.serialization.ObjectSchema<
    serializers.EventTriggerBase.Raw,
    MavenAGI.EventTriggerBase
> = core.serialization.object({
    description: core.serialization.string(),
    type: EventTriggerType,
});

export declare namespace EventTriggerBase {
    export interface Raw {
        description: string;
        type: EventTriggerType.Raw;
    }
}
