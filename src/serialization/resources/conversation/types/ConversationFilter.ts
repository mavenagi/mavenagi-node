/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { EntityIdFilter } from "../../commons/types/EntityIdFilter";
import { FeedbackType } from "../../commons/types/FeedbackType";
import { Quality } from "./Quality";
import { QualityReason } from "./QualityReason";
import { ResponseLength } from "../../commons/types/ResponseLength";
import { Sentiment } from "../../commons/types/Sentiment";
import { ResolutionStatus } from "./ResolutionStatus";

export const ConversationFilter: core.serialization.ObjectSchema<
    serializers.ConversationFilter.Raw,
    MavenAGI.ConversationFilter
> = core.serialization.object({
    search: core.serialization.string().optional(),
    createdAfter: core.serialization.date().optional(),
    createdBefore: core.serialization.date().optional(),
    apps: core.serialization.list(core.serialization.string()).optional(),
    categories: core.serialization.list(core.serialization.string()).optional(),
    actions: core.serialization.list(EntityIdFilter).optional(),
    incompleteActions: core.serialization.list(EntityIdFilter).optional(),
    feedback: core.serialization.list(FeedbackType).optional(),
    humanAgents: core.serialization.list(core.serialization.string()).optional(),
    languages: core.serialization.list(core.serialization.string()).optional(),
    quality: core.serialization.list(Quality).optional(),
    qualityReason: core.serialization.list(QualityReason).optional(),
    responseLength: core.serialization.list(ResponseLength).optional(),
    sentiment: core.serialization.list(Sentiment).optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
    resolutionStatus: core.serialization.list(ResolutionStatus).optional(),
});

export declare namespace ConversationFilter {
    export interface Raw {
        search?: string | null;
        createdAfter?: string | null;
        createdBefore?: string | null;
        apps?: string[] | null;
        categories?: string[] | null;
        actions?: EntityIdFilter.Raw[] | null;
        incompleteActions?: EntityIdFilter.Raw[] | null;
        feedback?: FeedbackType.Raw[] | null;
        humanAgents?: string[] | null;
        languages?: string[] | null;
        quality?: Quality.Raw[] | null;
        qualityReason?: QualityReason.Raw[] | null;
        responseLength?: ResponseLength.Raw[] | null;
        sentiment?: Sentiment.Raw[] | null;
        tags?: string[] | null;
        resolutionStatus?: ResolutionStatus.Raw[] | null;
    }
}
