/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { UserMessage } from "./UserMessage";
import { BotMessage } from "./BotMessage";

export const ConversationMessageResponse: core.serialization.Schema<
    serializers.ConversationMessageResponse.Raw,
    MavenAGI.ConversationMessageResponse
> = core.serialization
    .union("type", {
        user: UserMessage,
        bot: BotMessage,
    })
    .transform<MavenAGI.ConversationMessageResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ConversationMessageResponse {
    export type Raw = ConversationMessageResponse.User | ConversationMessageResponse.Bot;

    export interface User extends UserMessage.Raw {
        type: "user";
    }

    export interface Bot extends BotMessage.Raw {
        type: "bot";
    }
}
