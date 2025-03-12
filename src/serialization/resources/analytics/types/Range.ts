/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const Range: core.serialization.ObjectSchema<serializers.Range.Raw, MavenAGI.Range> = core.serialization.object({
    from: core.serialization.number().optional(),
    to: core.serialization.number().optional(),
});

export declare namespace Range {
    export interface Raw {
        from?: number | null;
        to?: number | null;
    }
}
