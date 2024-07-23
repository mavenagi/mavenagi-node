/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface ConversationResponse extends MavenAGI.ConversationBase {
    /** The ID that uniquely identifies this conversation */
    conversationId: MavenAGI.EntityId;
    /** The messages in the conversation */
    messages: MavenAGI.ConversationMessageResponse[];
    /** The context of the conversation */
    context: MavenAGI.ConversationContext;
}
