/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type UserEventName =
    /**
     * A button click occurred */
    | "BUTTON_CLICKED"
    /**
     * A link was clicked */
    | "LINK_CLICKED"
    /**
     * The chat window was opened */
    | "CHAT_OPENED"
    /**
     * The chat window was closed */
    | "CHAT_CLOSED";
export const UserEventName = {
    ButtonClicked: "BUTTON_CLICKED",
    LinkClicked: "LINK_CLICKED",
    ChatOpened: "CHAT_OPENED",
    ChatClosed: "CHAT_CLOSED",
} as const;
