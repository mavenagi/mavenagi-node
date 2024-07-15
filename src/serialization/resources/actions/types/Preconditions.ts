/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const Preconditions: core.serialization.ObjectSchema<serializers.Preconditions.Raw, MavenAGI.Preconditions> =
    core.serialization.object({
        requiredUserContextFieldNames: core.serialization.set(core.serialization.string()),
    });

export declare namespace Preconditions {
    interface Raw {
        requiredUserContextFieldNames: string[];
    }
}
