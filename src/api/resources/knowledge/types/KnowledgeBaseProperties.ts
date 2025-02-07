/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface KnowledgeBaseProperties {
    /** The name of the knowledge base */
    name: string;
    /** The type of the knowledge base. Can not be changed once created. */
    type: MavenAGI.KnowledgeBaseType;
    /** The URL to pull content from for RSS and URL knowledge bases. */
    url?: string;
    /** (Beta) The preconditions that must be met for knowledge base be relevant to a conversation. Can be used to limit knowledge to certain types of users. */
    precondition?: MavenAGI.Precondition;
}
