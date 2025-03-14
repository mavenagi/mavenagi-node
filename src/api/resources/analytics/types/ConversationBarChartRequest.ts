/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

export interface ConversationBarChartRequest extends MavenAGI.ConversationAnalyticsRequest {
    /**
     * Determines how data is grouped along the x-axis. Each unique value forms a separate bar.
     * The name of the bar is derived from the grouping field's value or range.
     */
    barDefinition: MavenAGI.ConversationGroupBy;
    /** Metric defining the y-axis values for the bar chart. */
    metric: MavenAGI.ConversationMetric;
    /**
     * Optionally defines vertical grouping within each bar, producing multiple series.
     * If omitted, a single series is generated.
     */
    verticalGrouping?: MavenAGI.ConversationGroupBy;
}
