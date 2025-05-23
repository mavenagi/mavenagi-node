/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface Agent {
    /** ID that uniquely identifies this action */
    agentId: MavenAGI.EntityId;
    /** The name of the agent. */
    name: string;
    /** When the agent was created. */
    createdAt: Date;
    /** The environment of the agent. Default is `DEMO`. */
    environment: MavenAGI.AgentEnvironment;
}
