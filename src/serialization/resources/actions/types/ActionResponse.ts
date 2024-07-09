/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../commons/types/EntityId";
import { ActionBase } from "./ActionBase";

export const ActionResponse: core.serialization.ObjectSchema<serializers.ActionResponse.Raw, MavenAGI.ActionResponse> =
    core.serialization
        .object({
            entityId: EntityId,
        })
        .extend(ActionBase);

export declare namespace ActionResponse {
    interface Raw extends ActionBase.Raw {
        entityId: EntityId.Raw;
    }
}
