/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";

export const UserConversationMessageType: core.serialization.Schema<
    serializers.UserConversationMessageType.Raw,
    MavenAGI.UserConversationMessageType
> = core.serialization.enum_(["USER", "HUMAN_AGENT", "EXTERNAL_SYSTEM"]);

export declare namespace UserConversationMessageType {
    type Raw = "USER" | "HUMAN_AGENT" | "EXTERNAL_SYSTEM";
}
