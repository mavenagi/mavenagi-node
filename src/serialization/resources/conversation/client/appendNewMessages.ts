/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationMessageRequest } from "../types/ConversationMessageRequest";

export const Request: core.serialization.Schema<
    serializers.conversation.appendNewMessages.Request.Raw,
    MavenAGI.ConversationMessageRequest[]
> = core.serialization.list(ConversationMessageRequest);

export declare namespace Request {
    export type Raw = ConversationMessageRequest.Raw[];
}
