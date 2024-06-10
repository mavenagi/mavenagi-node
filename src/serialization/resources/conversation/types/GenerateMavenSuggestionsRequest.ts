/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const GenerateMavenSuggestionsRequest: core.serialization.ObjectSchema<
    serializers.GenerateMavenSuggestionsRequest.Raw,
    MavenAGI.GenerateMavenSuggestionsRequest
> = core.serialization.object({
    messageIds: core.serialization.list(core.serialization.string()),
});

export declare namespace GenerateMavenSuggestionsRequest {
    interface Raw {
        messageIds: string[];
    }
}
