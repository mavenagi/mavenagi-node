/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { User } from "../../commons/types/User";

export const ActionExecutionRequest: core.serialization.ObjectSchema<
    serializers.ActionExecutionRequest.Raw,
    MavenAGI.ActionExecutionRequest
> = core.serialization.object({
    actionFormId: core.serialization.string(),
    userContext: User,
    parameters: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace ActionExecutionRequest {
    interface Raw {
        actionFormId: string;
        userContext: User.Raw;
        parameters: Record<string, unknown>;
    }
}
