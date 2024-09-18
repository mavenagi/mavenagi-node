/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface MetadataPrecondition extends MavenAGI.PreconditionBase {
    /** The key that must be present in the metadata for a precondition to be met */
    key: string;
    /** If set, the value must match the metadata value for the given key */
    value?: string;
}