/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const FeedbackField: core.serialization.Schema<serializers.FeedbackField.Raw, MavenAGI.FeedbackField> =
    core.serialization.enum_(["Type", "CreatedBy", "CreatedAt"]);

export declare namespace FeedbackField {
    export type Raw = "Type" | "CreatedBy" | "CreatedAt";
}
