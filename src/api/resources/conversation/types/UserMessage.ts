/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface UserMessage extends MavenAGI.ConversationMessageBase {
    /** The text of the message. Cannot be empty */
    text: string;
    userMessageType: MavenAGI.UserConversationMessageType;
}
