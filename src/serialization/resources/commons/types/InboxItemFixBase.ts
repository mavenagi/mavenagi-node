/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "./EntityId";

export const InboxItemFixBase: core.serialization.ObjectSchema<
    serializers.InboxItemFixBase.Raw,
    MavenAGI.InboxItemFixBase
> = core.serialization.object({
    id: EntityId,
});

export declare namespace InboxItemFixBase {
    export interface Raw {
        id: EntityId.Raw;
    }
}
