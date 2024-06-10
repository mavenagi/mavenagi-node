/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationMessageContext } from "./ConversationMessageContext";

export const AskRequest: core.serialization.ObjectSchema<serializers.AskRequest.Raw, MavenAGI.AskRequest> =
    core.serialization.object({
        id: core.serialization.string(),
        text: core.serialization.string(),
        context: ConversationMessageContext.optional(),
    });

export declare namespace AskRequest {
    interface Raw {
        id: string;
        text: string;
        context?: ConversationMessageContext.Raw | null;
    }
}
