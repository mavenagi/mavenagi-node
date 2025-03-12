/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InboxItemStatus =
    /**
     * The inbox item is open. */
    | "OPEN"
    /**
     * The inbox item was resolved by the user. */
    | "USER_RESOLVED"
    /**
     * The inbox item was resolved by the system. */
    | "SYSTEM_RESOLVED"
    /**
     * The inbox item has regressed. */
    | "REGRESSED"
    /**
     * The inbox item was ignored. */
    | "IGNORED";
export const InboxItemStatus = {
    Open: "OPEN",
    UserResolved: "USER_RESOLVED",
    SystemResolved: "SYSTEM_RESOLVED",
    Regressed: "REGRESSED",
    Ignored: "IGNORED",
} as const;
