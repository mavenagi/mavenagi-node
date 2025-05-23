/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EventField } from "./EventField";
import { EventFilter } from "./EventFilter";
import { BasePaginatedRequest } from "../../commons/types/BasePaginatedRequest";

export const EventsSearchRequest: core.serialization.ObjectSchema<
    serializers.EventsSearchRequest.Raw,
    MavenAGI.EventsSearchRequest
> = core.serialization
    .object({
        sort: EventField.optional(),
        filter: EventFilter.optional(),
    })
    .extend(BasePaginatedRequest);

export declare namespace EventsSearchRequest {
    export interface Raw extends BasePaginatedRequest.Raw {
        sort?: EventField.Raw | null;
        filter?: EventFilter.Raw | null;
    }
}
