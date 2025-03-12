/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const TranslationResponse: core.serialization.ObjectSchema<
    serializers.TranslationResponse.Raw,
    MavenAGI.TranslationResponse
> = core.serialization.object({
    translatedText: core.serialization.string(),
});

export declare namespace TranslationResponse {
    export interface Raw {
        translatedText: string;
    }
}
