/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const BaseKnowledgeDocument: core.serialization.ObjectSchema<
    serializers.BaseKnowledgeDocument.Raw,
    MavenAGI.BaseKnowledgeDocument
> = core.serialization.object({
    title: core.serialization.string(),
    url: core.serialization.string().optional(),
    language: core.serialization.string().optional(),
    createdAt: core.serialization.date().optional(),
    updatedAt: core.serialization.date().optional(),
    author: core.serialization.string().optional(),
});

export declare namespace BaseKnowledgeDocument {
    export interface Raw {
        title: string;
        url?: string | null;
        language?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        author?: string | null;
    }
}
