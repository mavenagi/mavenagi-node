/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EntityType } from "./EntityType";
import { EntityIdBase } from "./EntityIdBase";

export const EntityIdWithoutAgent: core.serialization.ObjectSchema<
    serializers.EntityIdWithoutAgent.Raw,
    MavenAGI.EntityIdWithoutAgent
> = core.serialization
    .object({
        type: EntityType,
        appId: core.serialization.string(),
    })
    .extend(EntityIdBase);

export declare namespace EntityIdWithoutAgent {
    export interface Raw extends EntityIdBase.Raw {
        type: EntityType.Raw;
        appId: string;
    }
}
