/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const KnowledgeDocumentContentType: core.serialization.Schema<
    serializers.KnowledgeDocumentContentType.Raw,
    MavenAGI.KnowledgeDocumentContentType
> = core.serialization.enum_(["HTML", "MARKDOWN"]);

export declare namespace KnowledgeDocumentContentType {
    export type Raw = "HTML" | "MARKDOWN";
}
