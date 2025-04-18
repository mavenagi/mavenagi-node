/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ConversationRow } from "./ConversationRow";
import { TableResponseBase } from "./TableResponseBase";

export const ConversationTableResponse: core.serialization.ObjectSchema<
    serializers.ConversationTableResponse.Raw,
    MavenAGI.ConversationTableResponse
> = core.serialization
    .object({
        rows: core.serialization.list(ConversationRow),
    })
    .extend(TableResponseBase);

export declare namespace ConversationTableResponse {
    export interface Raw extends TableResponseBase.Raw {
        rows: ConversationRow.Raw[];
    }
}
