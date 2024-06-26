/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationMessageResponse } from "./ConversationMessageResponse";
import { ConversationBase } from "./ConversationBase";

export const ConversationResponse: core.serialization.ObjectSchema<
    serializers.ConversationResponse.Raw,
    MavenAGI.ConversationResponse
> = core.serialization
    .object({
        messages: core.serialization.list(ConversationMessageResponse),
    })
    .extend(ConversationBase);

export declare namespace ConversationResponse {
    interface Raw extends ConversationBase.Raw {
        messages: ConversationMessageResponse.Raw[];
    }
}
