/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * @example
 *     {
 *         type: "pieChart",
 *         series: {
 *             name: "Series",
 *             data: [{
 *                     label: "Sales",
 *                     y: 5
 *                 }, {
 *                     label: "Support",
 *                     y: 10
 *                 }]
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "dateHistogram",
 *         timeSeries: [{
 *                 name: "Sales",
 *                 data: [{
 *                         x: 1633046400000,
 *                         y: 5
 *                     }, {
 *                         x: 1633132800000,
 *                         y: 7
 *                     }]
 *             }, {
 *                 name: "Support",
 *                 data: [{
 *                         x: 1633046400000,
 *                         y: 10
 *                     }, {
 *                         x: 1633132800000,
 *                         y: 8
 *                     }]
 *             }]
 *     }
 *
 * @example
 *     {
 *         type: "barChart",
 *         series: [{
 *                 name: "Resolved",
 *                 data: [{
 *                         label: "Sales",
 *                         y: 5
 *                     }, {
 *                         label: "Support",
 *                         y: 10
 *                     }]
 *             }, {
 *                 name: "Escalated",
 *                 data: [{
 *                         label: "Sales",
 *                         y: 7
 *                     }, {
 *                         label: "Support",
 *                         y: 8
 *                     }]
 *             }]
 *     }
 */
export type ChartResponse =
    | MavenAGI.ChartResponse.PieChart
    | MavenAGI.ChartResponse.DateHistogram
    | MavenAGI.ChartResponse.BarChart;

export namespace ChartResponse {
    export interface PieChart extends MavenAGI.PieChartResponse {
        type: "pieChart";
    }

    export interface DateHistogram extends MavenAGI.DateHistogramResponse {
        type: "dateHistogram";
    }

    export interface BarChart extends MavenAGI.BarChartResponse {
        type: "barChart";
    }
}
