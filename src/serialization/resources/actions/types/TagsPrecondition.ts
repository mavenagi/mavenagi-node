/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { PreconditionBase } from "./PreconditionBase";

export const TagsPrecondition: core.serialization.ObjectSchema<
    serializers.TagsPrecondition.Raw,
    MavenAGI.TagsPrecondition
> = core.serialization
    .object({
        tags: core.serialization.set(core.serialization.string()),
    })
    .extend(PreconditionBase);

export declare namespace TagsPrecondition {
    interface Raw extends PreconditionBase.Raw {
        tags: string[];
    }
}
