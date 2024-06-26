/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ActionSetBase } from "./ActionSetBase";

export const ActionSetRequest: core.serialization.ObjectSchema<
    serializers.ActionSetRequest.Raw,
    MavenAGI.ActionSetRequest
> = core.serialization.object({}).extend(ActionSetBase);

export declare namespace ActionSetRequest {
    interface Raw extends ActionSetBase.Raw {}
}
