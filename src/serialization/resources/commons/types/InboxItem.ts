/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { InboxItemDuplicateKnowledgeBase } from "./InboxItemDuplicateKnowledgeBase";
import { InboxItemDuplicateDocuments } from "./InboxItemDuplicateDocuments";
import { InboxItemKnowledgeBaseAlert } from "./InboxItemKnowledgeBaseAlert";
import { InboxItemMissingKnowledge } from "./InboxItemMissingKnowledge";

export const InboxItem: core.serialization.Schema<serializers.InboxItem.Raw, MavenAGI.InboxItem> = core.serialization
    .union("type", {
        duplicateKnowledgeBase: InboxItemDuplicateKnowledgeBase,
        duplicateDocuments: InboxItemDuplicateDocuments,
        knowledgeBaseAlert: InboxItemKnowledgeBaseAlert,
        missingKnowledge: InboxItemMissingKnowledge,
    })
    .transform<MavenAGI.InboxItem>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace InboxItem {
    export type Raw =
        | InboxItem.DuplicateKnowledgeBase
        | InboxItem.DuplicateDocuments
        | InboxItem.KnowledgeBaseAlert
        | InboxItem.MissingKnowledge;

    export interface DuplicateKnowledgeBase extends InboxItemDuplicateKnowledgeBase.Raw {
        type: "duplicateKnowledgeBase";
    }

    export interface DuplicateDocuments extends InboxItemDuplicateDocuments.Raw {
        type: "duplicateDocuments";
    }

    export interface KnowledgeBaseAlert extends InboxItemKnowledgeBaseAlert.Raw {
        type: "knowledgeBaseAlert";
    }

    export interface MissingKnowledge extends InboxItemMissingKnowledge.Raw {
        type: "missingKnowledge";
    }
}
