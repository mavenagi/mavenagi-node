/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { FeedbackType } from "./FeedbackType";

export const Feedback: core.serialization.ObjectSchema<serializers.Feedback.Raw, MavenAGI.Feedback> =
    core.serialization.object({
        id: core.serialization.string(),
        conversationId: core.serialization.string(),
        conversationMessageId: core.serialization.string(),
        type: FeedbackType,
        text: core.serialization.string(),
    });

export declare namespace Feedback {
    interface Raw {
        id: string;
        conversationId: string;
        conversationMessageId: string;
        type: FeedbackType.Raw;
        text: string;
    }
}
