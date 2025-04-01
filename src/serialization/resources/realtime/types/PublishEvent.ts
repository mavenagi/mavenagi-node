/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { AudioPublishEvent } from "./AudioPublishEvent";

export const PublishEvent: core.serialization.Schema<serializers.PublishEvent.Raw, MavenAGI.PublishEvent> =
    core.serialization
        .union("messageType", {
            audio: AudioPublishEvent,
        })
        .transform<MavenAGI.PublishEvent>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PublishEvent {
    export type Raw = PublishEvent.Audio;

    export interface Audio extends AudioPublishEvent.Raw {
        messageType: "audio";
    }
}
