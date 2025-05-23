/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type SystemEventName =
    /**
     * An app was installed */
    | "APP_INSTALLED"
    /**
     * An app was uninstalled */
    | "APP_UNINSTALLED"
    /**
     * An app was updated */
    | "APP_UPDATED";
export const SystemEventName = {
    AppInstalled: "APP_INSTALLED",
    AppUninstalled: "APP_UNINSTALLED",
    AppUpdated: "APP_UPDATED",
} as const;
