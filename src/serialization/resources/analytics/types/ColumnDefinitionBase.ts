/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const ColumnDefinitionBase: core.serialization.ObjectSchema<
    serializers.ColumnDefinitionBase.Raw,
    MavenAGI.ColumnDefinitionBase
> = core.serialization.object({
    header: core.serialization.string(),
});

export declare namespace ColumnDefinitionBase {
    export interface Raw {
        header: string;
    }
}
