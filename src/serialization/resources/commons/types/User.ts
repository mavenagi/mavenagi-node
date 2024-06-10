/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, MavenAGI.User> = core.serialization.object({
    name: core.serialization.string().optional(),
    id: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    email: core.serialization.string().optional(),
});

export declare namespace User {
    interface Raw {
        name?: string | null;
        id?: Record<string, string> | null;
        email?: string | null;
    }
}
