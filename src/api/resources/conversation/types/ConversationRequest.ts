/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface ConversationRequest extends MavenAGI.ConversationBase {
    /** An externally supplied ID to uniquely identify this conversation */
    conversationId: MavenAGI.EntityIdBase;
    /** The messages in the conversation */
    messages: MavenAGI.ConversationMessageRequest[];
}
