/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type EntityType =
    | "CONVERSATION"
    | "CONVERSATION_MESSAGE"
    | "KNOWLEDGE_BASE"
    | "KNOWLEDGE_DOCUMENT"
    | "ACTION"
    | "USER"
    | "USER_EVENT"
    | "EVENT_TRIGGER"
    | "USER_PROFILE";

export const EntityType = {
    Conversation: "CONVERSATION",
    ConversationMessage: "CONVERSATION_MESSAGE",
    KnowledgeBase: "KNOWLEDGE_BASE",
    KnowledgeDocument: "KNOWLEDGE_DOCUMENT",
    Action: "ACTION",
    User: "USER",
    UserEvent: "USER_EVENT",
    EventTrigger: "EVENT_TRIGGER",
    UserProfile: "USER_PROFILE",
} as const;
