/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const OsType: core.serialization.Schema<serializers.OsType.Raw, MavenAGI.OsType> = core.serialization.enum_([
    "WINDOWS",
    "MACOS",
    "LINUX",
    "ANDROID",
    "IOS",
    "OTHER",
]);

export declare namespace OsType {
    export type Raw = "WINDOWS" | "MACOS" | "LINUX" | "ANDROID" | "IOS" | "OTHER";
}
