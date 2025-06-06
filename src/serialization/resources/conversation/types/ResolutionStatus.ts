/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const ResolutionStatus: core.serialization.Schema<serializers.ResolutionStatus.Raw, MavenAGI.ResolutionStatus> =
    core.serialization.enum_(["RESOLVED", "ESCALATED", "IN_PROGRESS"]);

export declare namespace ResolutionStatus {
    export type Raw = "RESOLVED" | "ESCALATED" | "IN_PROGRESS";
}
