/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { FeedbackType } from "./FeedbackType";

export const FeedbackBase: core.serialization.ObjectSchema<serializers.FeedbackBase.Raw, MavenAGI.FeedbackBase> =
    core.serialization.object({
        type: FeedbackType,
        text: core.serialization.string().optional(),
    });

export declare namespace FeedbackBase {
    export interface Raw {
        type: FeedbackType.Raw;
        text?: string | null;
    }
}
