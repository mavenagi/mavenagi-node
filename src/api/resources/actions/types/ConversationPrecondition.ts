/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export type ConversationPrecondition =
    | MavenAGI.ConversationPrecondition.Tags
    | MavenAGI.ConversationPrecondition.Metadata
    | MavenAGI.ConversationPrecondition.ActionExecuted;

export declare namespace ConversationPrecondition {
    interface Tags extends MavenAGI.TagsPrecondition {
        conversationPreconditionType: "tags";
    }

    interface Metadata extends MavenAGI.MetadataPrecondition {
        conversationPreconditionType: "metadata";
    }

    interface ActionExecuted extends MavenAGI.ConversationExecutedActionPrecondition {
        conversationPreconditionType: "actionExecuted";
    }
}
