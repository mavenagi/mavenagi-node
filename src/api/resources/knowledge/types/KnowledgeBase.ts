/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface KnowledgeBase extends MavenAGI.KnowledgeBaseId {
    /** The name of the knowledge base */
    displayName: string;
    /** The type of the knowledge base */
    type: MavenAGI.KnowledgeBaseType;
    /** The URL to pull content from for RSS and URL knowledge bases. */
    url?: string;
}
