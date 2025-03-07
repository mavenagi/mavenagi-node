/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationNumericMetric } from "./ConversationNumericMetric";

export const ConversationMax: core.serialization.ObjectSchema<
    serializers.ConversationMax.Raw,
    MavenAGI.ConversationMax
> = core.serialization.object({}).extend(ConversationNumericMetric);

export declare namespace ConversationMax {
    interface Raw extends ConversationNumericMetric.Raw {}
}
