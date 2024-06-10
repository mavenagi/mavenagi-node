/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as MavenAGI from "../../../index";

export class AgentNotFoundError extends errors.MavenAGIError {
    constructor(body: MavenAGI.ErrorMessage) {
        super({
            message: "AgentNotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, AgentNotFoundError.prototype);
    }
}
