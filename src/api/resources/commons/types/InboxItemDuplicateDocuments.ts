/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface InboxItemDuplicateDocuments extends MavenAGI.InboxItemBase {
    /** The fix recommended for being applied */
    recommendedFixes: MavenAGI.InboxItemFixDeactivateDocument[];
    /** List of fixes associated with the inbox item. */
    otherFixes: MavenAGI.InboxItemFixDeactivateDocument[];
    /** Information about the source document associated with the inbox item. */
    sourceDocument?: MavenAGI.DocumentInformation;
    /** List of Document information objects related to the inbox item. */
    documents: MavenAGI.DocumentInformation[];
}
