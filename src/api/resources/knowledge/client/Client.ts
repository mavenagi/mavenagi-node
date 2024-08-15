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

export class Knowledge {
    constructor(protected readonly _options: Knowledge.Options) {}

    /**
     * Update a knowledge base or create it if it doesn't exist.
     *
     * @param {MavenAGI.KnowledgeBaseRequest} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.createOrUpdateKnowledgeBase({
     *         knowledgeBaseId: {
     *             referenceId: "help-center"
     *         },
     *         name: "Help center",
     *         type: MavenAGI.KnowledgeBaseType.Api
     *     })
     */
    public async createOrUpdateKnowledgeBase(
        request: MavenAGI.KnowledgeBaseRequest,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeBaseResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                "/v1/knowledge"
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.KnowledgeBaseRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.KnowledgeBaseResponse.parseOrThrow(_response.body, {
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

    /**
     * Get an existing knowledge base by its supplied ID
     *
     * @param {string} knowledgeBaseReferenceId - The reference ID of the knowledge base to get. All other entity ID fields are inferred from the request.
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.getKnowledgeBase("help-center")
     */
    public async getKnowledgeBase(
        knowledgeBaseReferenceId: string,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeBaseResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                `/v1/knowledge/${encodeURIComponent(knowledgeBaseReferenceId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.KnowledgeBaseResponse.parseOrThrow(_response.body, {
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

    /**
     * Create a new knowledge base version. Only supported on API knowledge bases. Will throw an exception if there is an existing version in progress.
     *
     * @param {string} knowledgeBaseReferenceId - The reference ID of the knowledge base to create a version for. All other entity ID fields are inferred from the request.
     * @param {MavenAGI.KnowledgeBaseVersion} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.createKnowledgeBaseVersion("help-center", {
     *         type: MavenAGI.KnowledgeBaseVersionType.Full
     *     })
     */
    public async createKnowledgeBaseVersion(
        knowledgeBaseReferenceId: string,
        request: MavenAGI.KnowledgeBaseVersion,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeBaseVersion> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                `/v1/knowledge/${encodeURIComponent(knowledgeBaseReferenceId)}/version`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.KnowledgeBaseVersion.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.KnowledgeBaseVersion.parseOrThrow(_response.body, {
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

    /**
     * Finalize the latest knowledge base version. Required to indicate the version is complete. Will throw an exception if the latest version is not in progress.
     *
     * @param {string} knowledgeBaseReferenceId - The reference ID of the knowledge base to finalize a version for. All other entity ID fields are inferred from the request.
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.finalizeKnowledgeBaseVersion("help-center")
     */
    public async finalizeKnowledgeBaseVersion(
        knowledgeBaseReferenceId: string,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                `/v1/knowledge/${encodeURIComponent(knowledgeBaseReferenceId)}/version/finalize`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
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

    /**
     * Create knowledge document. Requires an existing knowledge base with an in progress version. Will throw an exception if the latest version is not in progress.
     *
     * @param {string} knowledgeBaseReferenceId - The reference ID of the knowledge base to create a document for. All other entity ID fields are inferred from the request.
     * @param {MavenAGI.KnowledgeDocumentRequest} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.createKnowledgeDocument("help-center", {
     *         knowledgeDocumentId: {
     *             referenceId: "getting-started"
     *         },
     *         contentType: MavenAGI.KnowledgeDocumentContentType.Markdown,
     *         content: "## Getting started\\nThis is a getting started guide for the help center.",
     *         title: "Getting started"
     *     })
     */
    public async createKnowledgeDocument(
        knowledgeBaseReferenceId: string,
        request: MavenAGI.KnowledgeDocumentRequest,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeDocumentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                `/v1/knowledge/${encodeURIComponent(knowledgeBaseReferenceId)}/document`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.KnowledgeDocumentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.KnowledgeDocumentResponse.parseOrThrow(_response.body, {
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

    /**
     * Not yet implemented. Update knowledge document. Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the latest version is not in progress.
     *
     * @param {string} knowledgeBaseReferenceId - The reference ID of the knowledge base that contains the document to update. All other entity ID fields are inferred from the request.
     * @param {MavenAGI.KnowledgeDocumentRequest} request
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.updateKnowledgeDocument("help-center", {
     *         knowledgeDocumentId: {
     *             referenceId: "getting-started"
     *         },
     *         contentType: MavenAGI.KnowledgeDocumentContentType.Markdown,
     *         content: "## Getting started\\nThis is a getting started guide for the help center.",
     *         title: "Getting started"
     *     })
     */
    public async updateKnowledgeDocument(
        knowledgeBaseReferenceId: string,
        request: MavenAGI.KnowledgeDocumentRequest,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<MavenAGI.KnowledgeDocumentResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                `/v1/knowledge/${encodeURIComponent(knowledgeBaseReferenceId)}/document`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.KnowledgeDocumentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.KnowledgeDocumentResponse.parseOrThrow(_response.body, {
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

    /**
     * Not yet implemented. Delete knowledge document. Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the latest version is not in progress.
     *
     * @param {string} knowledgeBaseReferenceId - The reference ID of the knowledge base that contains the document to delete. All other entity ID fields are inferred from the request
     * @param {string} knowledgeDocumentReferenceId - The reference ID of the knowledge document to delete. All other entity ID fields are inferred from the request.
     * @param {Knowledge.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link MavenAGI.NotFoundError}
     * @throws {@link MavenAGI.BadRequestError}
     * @throws {@link MavenAGI.ServerError}
     *
     * @example
     *     await client.knowledge.deleteKnowledgeDocument("help-center", "getting-started")
     */
    public async deleteKnowledgeDocument(
        knowledgeBaseReferenceId: string,
        knowledgeDocumentReferenceId: string,
        requestOptions?: Knowledge.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MavenAGIEnvironment.Production,
                `/v1/knowledge/${encodeURIComponent(knowledgeBaseReferenceId)}/${encodeURIComponent(
                    knowledgeDocumentReferenceId
                )}/document`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Organization-Id": await core.Supplier.get(this._options.organizationId),
                "X-Agent-Id": await core.Supplier.get(this._options.agentId),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "mavenagi",
                "X-Fern-SDK-Version": "0.0.0-alpha.14",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
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
