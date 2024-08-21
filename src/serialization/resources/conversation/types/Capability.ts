/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const Capability: core.serialization.Schema<serializers.Capability.Raw, MavenAGI.Capability> =
    core.serialization.enum_(["MARKDOWN", "FORMS", "IMAGES"]);

export declare namespace Capability {
    type Raw = "MARKDOWN" | "FORMS" | "IMAGES";
}
