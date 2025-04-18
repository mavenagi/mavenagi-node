/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const KnowledgeBaseVersionType: core.serialization.Schema<
    serializers.KnowledgeBaseVersionType.Raw,
    MavenAGI.KnowledgeBaseVersionType
> = core.serialization.enum_(["FULL", "PARTIAL"]);

export declare namespace KnowledgeBaseVersionType {
    export type Raw = "FULL" | "PARTIAL";
}
