/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as MavenAGI from "../../../index";

export class VersionInProgressError extends errors.MavenAGIError {
    constructor(body: MavenAGI.IdBody) {
        super({
            message: "VersionInProgressError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, VersionInProgressError.prototype);
    }
}
