/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface GenerateMavenSuggestionsRequest {
    /** The message ids to generate a suggested response for. One suggestion will be generated for each message id. */
    conversationMessageIds: MavenAGI.EntityIdBase[];
}
