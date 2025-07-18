/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InboxItemFixType =
    /**
     * The inbox item fix is to deactivate a knowledge base document. */
    | "REMOVE_DOCUMENT"
    /**
     * The inbox item fix is to add a new knowledge base document. */
    | "ADD_DOCUMENT";
export const InboxItemFixType = {
    RemoveDocument: "REMOVE_DOCUMENT",
    AddDocument: "ADD_DOCUMENT",
} as const;
