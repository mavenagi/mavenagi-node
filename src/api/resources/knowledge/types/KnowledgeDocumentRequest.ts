/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * @example
 *     {
 *         knowledgeDocumentId: {
 *             referenceId: "getting-started"
 *         },
 *         contentType: MavenAGI.KnowledgeDocumentContentType.Markdown,
 *         content: "## Getting started\\nThis is a getting started guide for the help center.",
 *         title: "Getting started"
 *     }
 */
export interface KnowledgeDocumentRequest extends MavenAGI.BaseKnowledgeDocument {
    /** ID that uniquely identifies this knowledge document within its knowledge base */
    knowledgeDocumentId: MavenAGI.EntityIdBase;
    contentType: MavenAGI.KnowledgeDocumentContentType;
    /** The content of the document. Not shown directly to users. May be provided in HTML or markdown. HTML will be converted to markdown automatically. Images are not currently supported and will be ignored. */
    content: string;
}
