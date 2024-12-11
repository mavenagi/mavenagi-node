/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as MavenAGI from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Translations {
    interface Options {
        environment?: core.Supplier<environments.MavenAGIEnvironment | string>;
        appId?: core.Supplier<string | undefined>;
        appSecret?: core.Supplier<string | undefined>;
        /** Override the X-Organization-Id header */
        organizationId: core.Supplier<string>;
        /** Override the X-Agent-Id header */
        agentId: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
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
    }
}

export class Translations {
    constructor(protected readonly _options: Translations.Options) {}

    /**
     * Translate text from one language to another
     *
     * @param {MavenAGI.TranslationRequest} request
     * @param {Translations.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.translations.translate({
     *         text: "Hello world",
     *         targetLanguage: "es"
     *     })
     */
    public async translate(
        request: MavenAGI.TranslationRequest,
        requestOptions?: Translations.RequestOptions
    ): Promise<MavenAGI.TranslationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/translations/translate"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "1.0.4",
                "User-Agent": "mavenagi/1.0.4",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.TranslationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.TranslationResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new MavenAGI.NotFoundError(
                        serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.MavenAGIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MavenAGIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MavenAGITimeoutError();
            case "unknown":
                throw new errors.MavenAGIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const appId = (await core.Supplier.get(this._options.appId)) ?? process?.env["MAVENAGI_APP_ID"];
        const appSecret = (await core.Supplier.get(this._options.appSecret)) ?? process?.env["MAVENAGI_APP_SECRET"];
        if (appId != null && appSecret != null) {
            return core.BasicAuth.toAuthorizationHeader({
                username: appId,
                password: appSecret,
            });
        }

        return undefined;
    }
}
