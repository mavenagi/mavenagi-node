/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { KnowledgeDocumentId } from "./KnowledgeDocumentId";

export const KnowledgeDocument: core.serialization.ObjectSchema<
    serializers.KnowledgeDocument.Raw,
    MavenAGI.KnowledgeDocument
> = core.serialization
    .object({
        title: core.serialization.string(),
        content: core.serialization.string(),
        url: core.serialization.string().optional(),
        language: core.serialization.string().optional(),
        createdAt: core.serialization.date().optional(),
        updatedAt: core.serialization.date().optional(),
        author: core.serialization.string().optional(),
    })
    .extend(KnowledgeDocumentId);

export declare namespace KnowledgeDocument {
    interface Raw extends KnowledgeDocumentId.Raw {
        title: string;
        content: string;
        url?: string | null;
        language?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        author?: string | null;
    }
}
