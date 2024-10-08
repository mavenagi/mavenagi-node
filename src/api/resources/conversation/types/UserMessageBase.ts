/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface UserMessageBase extends MavenAGI.ConversationMessageBase {
    /** ID that uniquely identifies the user that created this message */
    userId: MavenAGI.EntityIdBase;
    /** The text of the message. Cannot be empty */
    text: string;
    userMessageType: MavenAGI.UserConversationMessageType;
}
