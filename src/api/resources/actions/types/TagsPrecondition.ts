/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface TagsPrecondition extends MavenAGI.PreconditionBase {
    /** The tags that must be present in the conversation context for the precondition to be met */
    tags: Set<string>;
}