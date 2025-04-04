/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { ActionParameter } from "./ActionParameter";

export const ActionBase: core.serialization.ObjectSchema<serializers.ActionBase.Raw, MavenAGI.ActionBase> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string(),
        userInteractionRequired: core.serialization.boolean(),
        buttonName: core.serialization.string().optional(),
        precondition: core.serialization.lazy(() => serializers.Precondition).optional(),
        userFormParameters: core.serialization.list(ActionParameter),
        language: core.serialization.string().optional(),
    });

export declare namespace ActionBase {
    export interface Raw {
        name: string;
        description: string;
        userInteractionRequired: boolean;
        buttonName?: string | null;
        precondition?: serializers.Precondition.Raw | null;
        userFormParameters: ActionParameter.Raw[];
        language?: string | null;
    }
}
