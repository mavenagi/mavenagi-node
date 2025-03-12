/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const Source: core.serialization.ObjectSchema<serializers.Source.Raw, MavenAGI.Source> =
    core.serialization.object({
        title: core.serialization.string(),
        url: core.serialization.string(),
    });

export declare namespace Source {
    export interface Raw {
        title: string;
        url: string;
    }
}
