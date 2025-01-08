/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface ActionFormField {
    /** The ID field should be used as the key in the submitActionForm API call. */
    id: string;
    /** The title of the field to show on the form. */
    label: string;
    /** A longer description of the field which should be shown in smaller text near the label. */
    description: string;
    /** Whether the field is required for the action. Client side validation is recommended for an improved user experience. */
    required: boolean;
    /** A value for the field provided by the LLM. All form fields should default to this value if present. */
    suggestion?: unknown;
    /** Describes how the action field should be validated. Client side validation is recommended but not required. | If `enumOptions` are provided, using a dropdown or radio field is preferred. Otherwise, if the `type` is `BOOLEAN` a checkbox is preferred. | Fallback to a text input. */
    type: MavenAGI.ActionParameterType;
    /** The options that should be shown to the user as a dropdown or radio. */
    enumOptions?: MavenAGI.ActionEnumOption[];
}
