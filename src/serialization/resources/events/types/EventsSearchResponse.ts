/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EventResponse } from "./EventResponse";
import { Page } from "../../commons/types/Page";

export const EventsSearchResponse: core.serialization.ObjectSchema<
    serializers.EventsSearchResponse.Raw,
    MavenAGI.EventsSearchResponse
> = core.serialization
    .object({
        events: core.serialization.list(EventResponse),
    })
    .extend(Page);

export declare namespace EventsSearchResponse {
    export interface Raw extends Page.Raw {
        events: EventResponse.Raw[];
    }
}
