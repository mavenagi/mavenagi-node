/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { BasicMetric } from "./BasicMetric";

export const Sum: core.serialization.ObjectSchema<serializers.Sum.Raw, MavenAGI.Sum> = core.serialization
    .object({})
    .extend(BasicMetric);

export declare namespace Sum {
    interface Raw extends BasicMetric.Raw {}
}
