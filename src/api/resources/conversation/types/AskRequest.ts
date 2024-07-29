/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface AskRequest {
    /** Externally supplied ID to uniquely identify this message within the conversation */
    conversationMessageId: MavenAGI.EntityIdBase;
    /** The text of the message */
    text: string;
    /** The context of the message */
    context?: MavenAGI.ConversationMessageContext;
    /** Optional configuration for responses to this conversation. Only applies to new conversations. */
    responseConfig?: MavenAGI.ResponseConfig;
}
