/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Actions } from "./api/resources/actions/client/Client";
import { Analytics } from "./api/resources/analytics/client/Client";
import { AppSettings } from "./api/resources/appSettings/client/Client";
import { Conversation } from "./api/resources/conversation/client/Client";
import { Inbox } from "./api/resources/inbox/client/Client";
import { Knowledge } from "./api/resources/knowledge/client/Client";
import { Translations } from "./api/resources/translations/client/Client";
import { Triggers } from "./api/resources/triggers/client/Client";
import { Users } from "./api/resources/users/client/Client";

export declare namespace MavenAGIClient {
    export interface Options {
        environment?: core.Supplier<environments.MavenAGIEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        appId?: core.Supplier<string | undefined>;
        appSecret?: core.Supplier<string | undefined>;
        /** Override the X-Organization-Id header */
        organizationId: core.Supplier<string>;
        /** Override the X-Agent-Id header */
        agentId: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Organization-Id header */
        organizationId?: string;
        /** Override the X-Agent-Id header */
        agentId?: string;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class MavenAGIClient {
    protected _actions: Actions | undefined;
    protected _analytics: Analytics | undefined;
    protected _appSettings: AppSettings | undefined;
    protected _conversation: Conversation | undefined;
    protected _inbox: Inbox | undefined;
    protected _knowledge: Knowledge | undefined;
    protected _translations: Translations | undefined;
    protected _triggers: Triggers | undefined;
    protected _users: Users | undefined;

    constructor(protected readonly _options: MavenAGIClient.Options) {}

    public get actions(): Actions {
        return (this._actions ??= new Actions(this._options));
    }

    public get analytics(): Analytics {
        return (this._analytics ??= new Analytics(this._options));
    }

    public get appSettings(): AppSettings {
        return (this._appSettings ??= new AppSettings(this._options));
    }

    public get conversation(): Conversation {
        return (this._conversation ??= new Conversation(this._options));
    }

    public get inbox(): Inbox {
        return (this._inbox ??= new Inbox(this._options));
    }

    public get knowledge(): Knowledge {
        return (this._knowledge ??= new Knowledge(this._options));
    }

    public get translations(): Translations {
        return (this._translations ??= new Translations(this._options));
    }

    public get triggers(): Triggers {
        return (this._triggers ??= new Triggers(this._options));
    }

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }
}
