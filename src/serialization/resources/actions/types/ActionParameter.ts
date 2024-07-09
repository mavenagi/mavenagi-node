/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const ActionParameter: core.serialization.ObjectSchema<
    serializers.ActionParameter.Raw,
    MavenAGI.ActionParameter
> = core.serialization.object({
    id: core.serialization.string(),
    label: core.serialization.string(),
    description: core.serialization.string(),
    required: core.serialization.boolean(),
});

export declare namespace ActionParameter {
    interface Raw {
        id: string;
        label: string;
        description: string;
        required: boolean;
    }
}
