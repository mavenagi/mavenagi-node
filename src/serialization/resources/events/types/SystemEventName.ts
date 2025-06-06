/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const SystemEventName: core.serialization.Schema<serializers.SystemEventName.Raw, MavenAGI.SystemEventName> =
    core.serialization.enum_(["APP_INSTALLED", "APP_UNINSTALLED", "APP_UPDATED"]);

export declare namespace SystemEventName {
    export type Raw = "APP_INSTALLED" | "APP_UNINSTALLED" | "APP_UPDATED";
}
