/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const SubmitActionFormRequest: core.serialization.ObjectSchema<
    serializers.SubmitActionFormRequest.Raw,
    MavenAGI.SubmitActionFormRequest
> = core.serialization.object({
    actionFormId: core.serialization.string(),
    parameters: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    transientData: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace SubmitActionFormRequest {
    export interface Raw {
        actionFormId: string;
        parameters: Record<string, unknown>;
        transientData?: Record<string, string> | null;
    }
}
