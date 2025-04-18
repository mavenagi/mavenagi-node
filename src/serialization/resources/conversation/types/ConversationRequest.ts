/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EntityIdBase } from "../../commons/types/EntityIdBase";
import { ResponseConfig } from "../../commons/types/ResponseConfig";
import { ConversationMessageRequest } from "./ConversationMessageRequest";

export const ConversationRequest: core.serialization.ObjectSchema<
    serializers.ConversationRequest.Raw,
    MavenAGI.ConversationRequest
> = core.serialization.object({
    conversationId: EntityIdBase,
    responseConfig: ResponseConfig.optional(),
    subject: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    createdAt: core.serialization.date().optional(),
    updatedAt: core.serialization.date().optional(),
    tags: core.serialization.set(core.serialization.string()).optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    messages: core.serialization.list(ConversationMessageRequest),
});

export declare namespace ConversationRequest {
    export interface Raw {
        conversationId: EntityIdBase.Raw;
        responseConfig?: ResponseConfig.Raw | null;
        subject?: string | null;
        url?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        tags?: string[] | null;
        metadata?: Record<string, string> | null;
        messages: ConversationMessageRequest.Raw[];
    }
}
