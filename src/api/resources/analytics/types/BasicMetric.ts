/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface BasicMetric {
    /** Field to apply the metric to. The field should be numeric for all metrics except for Count (no field) and DistinctCount. */
    targetField: MavenAGI.ConversationField;
}
