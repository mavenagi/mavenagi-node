/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const EntityType: core.serialization.Schema<serializers.EntityType.Raw, MavenAGI.EntityType> =
    core.serialization.enum_([
        "CONVERSATION",
        "CONVERSATION_MESSAGE",
        "KNOWLEDGE_BASE",
        "KNOWLEDGE_DOCUMENT",
        "ACTION",
        "USER",
        "USER_EVENT",
        "EVENT_TRIGGER",
    ]);

export declare namespace EntityType {
    type Raw =
        | "CONVERSATION"
        | "CONVERSATION_MESSAGE"
        | "KNOWLEDGE_BASE"
        | "KNOWLEDGE_DOCUMENT"
        | "ACTION"
        | "USER"
        | "USER_EVENT"
        | "EVENT_TRIGGER";
}
