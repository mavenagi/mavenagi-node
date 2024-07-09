/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface EntityId extends MavenAGI.EntityIdBase {
    /** The object type */
    type: MavenAGI.EntityType;
    /** The ID of the application that created this object */
    appId: string;
    /** The ID of the organization that this object belongs too */
    organizationId: string;
    /** The ID of the agent that this object belongs too */
    agentId: string;
}
