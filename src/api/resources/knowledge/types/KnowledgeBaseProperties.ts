/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface KnowledgeBaseProperties {
    /** The name of the knowledge base */
    name: string;
    /** (Beta) The preconditions that must be met for knowledge base be relevant to a conversation. Can be used to limit knowledge to certain types of users. */
    precondition?: MavenAGI.Precondition;
}
