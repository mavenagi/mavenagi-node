/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as MavenAGI from "../../../index";

export class ConversationAlreadyExistsError extends errors.MavenAGIError {
    constructor(body: MavenAGI.ErrorMessage) {
        super({
            message: "ConversationAlreadyExistsError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, ConversationAlreadyExistsError.prototype);
    }
}
