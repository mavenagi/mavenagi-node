/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationPreview } from "../../commons/types/ConversationPreview";
import { Page } from "../../commons/types/Page";

export const ConversationsResponse: core.serialization.ObjectSchema<
    serializers.ConversationsResponse.Raw,
    MavenAGI.ConversationsResponse
> = core.serialization
    .object({
        conversations: core.serialization.list(ConversationPreview),
    })
    .extend(Page);

export declare namespace ConversationsResponse {
    export interface Raw extends Page.Raw {
        conversations: ConversationPreview.Raw[];
    }
}
