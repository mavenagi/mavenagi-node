/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface AppPrecondition extends MavenAGI.PreconditionBase {
    /** Match only conversations created by this appId */
    appId: string;
}
