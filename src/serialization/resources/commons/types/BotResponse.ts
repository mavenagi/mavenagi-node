/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { BotTextResponse } from "./BotTextResponse";
import { BotActionFormResponse } from "./BotActionFormResponse";
import { BotChartResponse } from "./BotChartResponse";

export const BotResponse: core.serialization.Schema<serializers.BotResponse.Raw, MavenAGI.BotResponse> =
    core.serialization
        .union("type", {
            text: BotTextResponse,
            actionForm: BotActionFormResponse,
            chart: BotChartResponse,
        })
        .transform<MavenAGI.BotResponse>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace BotResponse {
    export type Raw = BotResponse.Text | BotResponse.ActionForm | BotResponse.Chart;

    export interface Text extends BotTextResponse.Raw {
        type: "text";
    }

    export interface ActionForm extends BotActionFormResponse.Raw {
        type: "actionForm";
    }

    export interface Chart extends BotChartResponse.Raw {
        type: "chart";
    }
}
