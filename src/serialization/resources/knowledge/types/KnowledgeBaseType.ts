/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const KnowledgeBaseType: core.serialization.Schema<
    serializers.KnowledgeBaseType.Raw,
    MavenAGI.KnowledgeBaseType
> = core.serialization.enum_(["API"]);

export declare namespace KnowledgeBaseType {
    export type Raw = "API";
}
