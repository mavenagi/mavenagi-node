/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * The input from the user to send through the WebSocket.
 */
export type PublishEvent = MavenAGI.PublishEvent.Audio | MavenAGI.PublishEvent.HangUp;

export namespace PublishEvent {
    export interface Audio extends MavenAGI.AudioPublishEvent {
        messageType: "audio";
    }

    export interface HangUp extends MavenAGI.HangUpPublishEvent {
        messageType: "hangUp";
    }
}
