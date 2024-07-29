/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { VisibilityType } from "./VisibilityType";

export const UserData: core.serialization.ObjectSchema<serializers.UserData.Raw, MavenAGI.UserData> =
    core.serialization.object({
        value: core.serialization.string(),
        visibility: VisibilityType.optional(),
    });

export declare namespace UserData {
    interface Raw {
        value: string;
        visibility?: VisibilityType.Raw | null;
    }
}