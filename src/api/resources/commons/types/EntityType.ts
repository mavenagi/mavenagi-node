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
    | "EVENT"
    | "EVENT_TRIGGER"
    | "USER_PROFILE"
    | "FEEDBACK"
    | "INBOX_ITEM"
    | "INBOX_ITEM_FIX";
export const EntityType = {
    Conversation: "CONVERSATION",
    ConversationMessage: "CONVERSATION_MESSAGE",
    KnowledgeBase: "KNOWLEDGE_BASE",
    KnowledgeDocument: "KNOWLEDGE_DOCUMENT",
    Action: "ACTION",
    User: "USER",
    Event: "EVENT",
    EventTrigger: "EVENT_TRIGGER",
    UserProfile: "USER_PROFILE",
    Feedback: "FEEDBACK",
    InboxItem: "INBOX_ITEM",
    InboxItemFix: "INBOX_ITEM_FIX",
} as const;
