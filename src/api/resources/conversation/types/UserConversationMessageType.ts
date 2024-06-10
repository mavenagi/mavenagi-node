/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of user message
 */
export type UserConversationMessageType = "USER" | "HUMAN_AGENT" | "EXTERNAL_SYSTEM";

export const UserConversationMessageType = {
    User: "USER",
    HumanAgent: "HUMAN_AGENT",
    ExternalSystem: "EXTERNAL_SYSTEM",
} as const;
