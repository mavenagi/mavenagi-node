/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface ConversationExecutedActionPrecondition extends MavenAGI.PreconditionBase {
    /** ID of an action that must have executed in this conversation for the precondition to be met */
    actionId: string;
    /** App ID that the given actionId belongs to. If not provided, the calling appId will be used. */
    appId?: string;
}
