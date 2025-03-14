/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { InboxItemFixAddDocument } from "./InboxItemFixAddDocument";
import { InboxItemFixDeactivateDocument } from "./InboxItemFixDeactivateDocument";
import { InboxItemFixDeactivateKnowledgeBase } from "./InboxItemFixDeactivateKnowledgeBase";

export const InboxItemFix: core.serialization.Schema<serializers.InboxItemFix.Raw, MavenAGI.InboxItemFix> =
    core.serialization
        .union("type", {
            addDocument: InboxItemFixAddDocument,
            deactivateDocument: InboxItemFixDeactivateDocument,
            deactivateKnowledgeBase: InboxItemFixDeactivateKnowledgeBase,
        })
        .transform<MavenAGI.InboxItemFix>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace InboxItemFix {
    export type Raw = InboxItemFix.AddDocument | InboxItemFix.DeactivateDocument | InboxItemFix.DeactivateKnowledgeBase;

    export interface AddDocument extends InboxItemFixAddDocument.Raw {
        type: "addDocument";
    }

    export interface DeactivateDocument extends InboxItemFixDeactivateDocument.Raw {
        type: "deactivateDocument";
    }

    export interface DeactivateKnowledgeBase extends InboxItemFixDeactivateKnowledgeBase.Raw {
        type: "deactivateKnowledgeBase";
    }
}
