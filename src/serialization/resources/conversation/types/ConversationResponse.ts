/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../commons/types/EntityId";
import { ConversationMessageResponse } from "./ConversationMessageResponse";
import { ConversationContext } from "./ConversationContext";
import { ConversationBase } from "./ConversationBase";

export const ConversationResponse: core.serialization.ObjectSchema<
    serializers.ConversationResponse.Raw,
    MavenAGI.ConversationResponse
> = core.serialization
    .object({
        conversationId: EntityId,
        messages: core.serialization.list(ConversationMessageResponse),
        context: ConversationContext,
    })
    .extend(ConversationBase);

export declare namespace ConversationResponse {
    interface Raw extends ConversationBase.Raw {
        conversationId: EntityId.Raw;
        messages: ConversationMessageResponse.Raw[];
        context: ConversationContext.Raw;
    }
}
