/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface InboxItemDuplicateKnowledgeBase extends MavenAGI.InboxItemBase {
    /** The fix recommended for being applied */
    recommendedFixes: MavenAGI.InboxItemFixDeactivateKnowledgeBase[];
    /** List of fixes associated with the inbox item. */
    otherFixes: MavenAGI.InboxItemFixDeactivateKnowledgeBase[];
    /** List of Knowledge Base information objects associated with the inbox item. */
    knowledgeBases: MavenAGI.KnowledgeBaseInformation[];
}
