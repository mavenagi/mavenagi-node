/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as MavenAGI from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Knowledge {
    interface Options {
        environment?: core.Supplier<environments.MavenAGIEnvironment | string>;
        appId?: core.Supplier<string | undefined>;
        appSecret?: core.Supplier<string | undefined>;
        organizationId: core.Supplier<string>;
        agentId: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
        abortSignal?: AbortSignal;
    }
}

export class Knowledge {
    constructor(protected readonly _options: Knowledge.Options) {}

    /**
     * Create a new knowledge base.
     *
     * @param {MavenAGI.KnowledgeBase} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.createKnowledgeBase({
     *         displayName: "string",
     *         type: MavenAGI.KnowledgeBaseType.Api,
     *         url: "string",
     *         knowledgeBaseId: "string"
     *     })
     */
    public async createKnowledgeBase(
        request: MavenAGI.KnowledgeBase,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeBase> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.KnowledgeBase.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.KnowledgeBase.parseOrThrow(_response.body, {
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
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
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

    /**
     * Create a new knowledge base version. Only supported on API knowledge bases. Will throw an exception if there is an existing version in progress.
     *
     * @param {MavenAGI.KnowledgeBaseVersion} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.createKnowledgeBaseVersion({
     *         knowledgeBaseId: "string",
     *         type: MavenAGI.KnowledgeBaseVersionType.Full
     *     })
     */
    public async createKnowledgeBaseVersion(
        request: MavenAGI.KnowledgeBaseVersion,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeBaseVersion> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge/version"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.KnowledgeBaseVersion.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.KnowledgeBaseVersion.parseOrThrow(_response.body, {
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
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
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

    /**
     * Finalize the latest knowledge base version. Required to indicate the version is complete. Will throw an exception if the latest version is not in progress.
     *
     * @param {MavenAGI.KnowledgeBaseId} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.finalizeKnowledgeBaseVersion({
     *         knowledgeBaseId: "string"
     *     })
     */
    public async finalizeKnowledgeBaseVersion(
        request: MavenAGI.KnowledgeBaseId,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge/version/finalize"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.KnowledgeBaseId.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new MavenAGI.NotFoundError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
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

    /**
     * Create knowledge document. Requires an existing knowledge base with an in progress version. Will throw an exception if the latest version is not in progress.
     *
     * @param {MavenAGI.KnowledgeDocument} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.createKnowledgeDocument({
     *         title: "string",
     *         content: "string",
     *         url: "string",
     *         language: "string",
     *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
     *         updatedAt: new Date("2024-01-15T09:30:00.000Z"),
     *         author: "string",
     *         knowledgeBaseId: "string",
     *         documentId: "string"
     *     })
     */
    public async createKnowledgeDocument(
        request: MavenAGI.KnowledgeDocument,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeDocument> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge/document"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.KnowledgeDocument.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.KnowledgeDocument.parseOrThrow(_response.body, {
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
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
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

    /**
     * Update knowledge document. Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the latest version is not in progress.
     *
     * @param {MavenAGI.KnowledgeDocument} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.updateKnowledgeDocument({
     *         title: "string",
     *         content: "string",
     *         url: "string",
     *         language: "string",
     *         createdAt: new Date("2024-01-15T09:30:00.000Z"),
     *         updatedAt: new Date("2024-01-15T09:30:00.000Z"),
     *         author: "string",
     *         knowledgeBaseId: "string",
     *         documentId: "string"
     *     })
     */
    public async updateKnowledgeDocument(
        request: MavenAGI.KnowledgeDocument,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeDocument> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge/document"
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.KnowledgeDocument.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.KnowledgeDocument.parseOrThrow(_response.body, {
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
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
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

    /**
     * Delete knowledge document. Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the latest version is not in progress.
     *
     * @param {MavenAGI.KnowledgeDocumentId} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.deleteKnowledgeDocument({
     *         knowledgeBaseId: "string",
     *         documentId: "string"
     *     })
     */
    public async deleteKnowledgeDocument(
        request: MavenAGI.KnowledgeDocumentId,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge/document"
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.KnowledgeDocumentId.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new MavenAGI.NotFoundError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 400:
                    throw new MavenAGI.BadRequestError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new MavenAGI.ServerError(
                        await serializers.ErrorMessage.parseOrThrow(_response.error.body, {
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
