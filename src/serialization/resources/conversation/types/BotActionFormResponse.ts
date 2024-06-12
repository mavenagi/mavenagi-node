/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ActionFormField } from "./ActionFormField";

export const BotActionFormResponse: core.serialization.ObjectSchema<
    serializers.BotActionFormResponse.Raw,
    MavenAGI.BotActionFormResponse
> = core.serialization.object({
    formLabel: core.serialization.string(),
    fields: core.serialization.list(ActionFormField),
    submitLabel: core.serialization.string(),
});

export declare namespace BotActionFormResponse {
    interface Raw {
        formLabel: string;
        fields: ActionFormField.Raw[];
        submitLabel: string;
    }
}
