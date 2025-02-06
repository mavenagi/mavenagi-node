/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface GroupBy {
    /** Field used for data grouping. */
    field: MavenAGI.ConversationField;
    /** Limits the number of groups returned (defaults to 100 if omitted). */
    limit?: number;
    /** Numeric ranges for grouping data into predefined buckets. Applies only to numeric fields. */
    ranges?: MavenAGI.Range[];
}
