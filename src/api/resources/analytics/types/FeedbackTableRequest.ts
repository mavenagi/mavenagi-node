/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * @example
 *     {
 *         feedbackFilter: {
 *             types: [MavenAGI.FeedbackType.ThumbsUp, MavenAGI.FeedbackType.Insert]
 *         },
 *         fieldGroupings: [{
 *                 field: MavenAGI.FeedbackField.CreatedBy
 *             }],
 *         columnDefinitions: [{
 *                 header: "feedback_count",
 *                 metric: {
 *                     type: "count"
 *                 }
 *             }]
 *     }
 */
export interface FeedbackTableRequest extends MavenAGI.FeedbackAnalyticsRequest {
    /**
     * Defines the time interval for grouping data. If specified, data is grouped accordingly based on the time they were created.
     *  Example: If set to "DAY," data will be aggregated by day.
     */
    timeGrouping?: MavenAGI.TimeInterval;
    /**
     * Specifies the fields by which data should be grouped. Each unique combination forms a row.
     * If multiple fields are provided, the result is grouped by their unique value combinations.
     * If empty, all data is aggregated into a single row.
     * Note: The field CreatedAt should not be used here, all the time-based grouping should be done using the timeGrouping field.
     */
    fieldGroupings: MavenAGI.FeedbackGroupBy[];
    /**
     * Specifies the metrics to be displayed as columns.
     * Column headers act as keys, with computed metric values as their mapped values.
     * There needs to be at least one column definition in the table request.
     */
    columnDefinitions: MavenAGI.FeedbackColumnDefinition[];
}
