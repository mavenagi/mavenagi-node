/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface UserMessage extends MavenAGI.UserMessageBase {
    /** The ID that uniquely identifies this message within the conversation */
    conversationMessageId: MavenAGI.EntityId;
    /** The language of the message in ISO 639-1 code format */
    language?: string;
    /** The attachments associated with the message */
    attachments: MavenAGI.UserMessageAttachment[];
    /** The display name of the user who created this message. Only available for users who have saved name information. */
    userDisplayName?: string;
}
