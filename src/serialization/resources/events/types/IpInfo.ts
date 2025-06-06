/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const IpInfo: core.serialization.ObjectSchema<serializers.IpInfo.Raw, MavenAGI.IpInfo> =
    core.serialization.object({
        ip: core.serialization.string().optional(),
    });

export declare namespace IpInfo {
    export interface Raw {
        ip?: string | null;
    }
}
