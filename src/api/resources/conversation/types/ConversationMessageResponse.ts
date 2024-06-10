/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export type ConversationMessageResponse =
    | MavenAGI.ConversationMessageResponse.User
    | MavenAGI.ConversationMessageResponse.Bot;

export declare namespace ConversationMessageResponse {
    interface User extends MavenAGI.UserMessage {
        type: "user";
    }

    interface Bot extends MavenAGI.BotMessage {
        type: "bot";
    }
}
