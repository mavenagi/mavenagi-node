/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const ActionParameterType: core.serialization.Schema<
    serializers.ActionParameterType.Raw,
    MavenAGI.ActionParameterType
> = core.serialization.enum_(["STRING", "BOOLEAN", "NUMBER"]);

export declare namespace ActionParameterType {
    type Raw = "STRING" | "BOOLEAN" | "NUMBER";
}