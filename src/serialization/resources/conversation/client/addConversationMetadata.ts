/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.conversation.addConversationMetadata.Request.Raw,
    Record<string, string>
> = core.serialization.record(core.serialization.string(), core.serialization.string());

export declare namespace Request {
    export type Raw = Record<string, string>;
}

export const Response: core.serialization.Schema<
    serializers.conversation.addConversationMetadata.Response.Raw,
    Record<string, string>
> = core.serialization.record(core.serialization.string(), core.serialization.string());

export declare namespace Response {
    export type Raw = Record<string, string>;
}
