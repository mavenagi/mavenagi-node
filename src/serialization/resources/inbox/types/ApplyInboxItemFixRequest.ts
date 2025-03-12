/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { AddDocumentFixRequest } from "./AddDocumentFixRequest";

export const ApplyInboxItemFixRequest: core.serialization.ObjectSchema<
    serializers.ApplyInboxItemFixRequest.Raw,
    MavenAGI.ApplyInboxItemFixRequest
> = core.serialization.object({
    appId: core.serialization.string(),
    addDocumentRequest: AddDocumentFixRequest.optional(),
});

export declare namespace ApplyInboxItemFixRequest {
    export interface Raw {
        appId: string;
        addDocumentRequest?: AddDocumentFixRequest.Raw | null;
    }
}
