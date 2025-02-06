/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * A fully specified object ID, unique across the entire system.
 */
export interface EntityId extends MavenAGI.EntityIdWithoutAgent {
    /** The ID of the organization that this object belongs to */
    organizationId: string;
    /** The ID of the agent that this object belongs to */
    agentId: string;
}
