/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * @example
 *     {
 *         entityId: {
 *             referenceId: "get-balance"
 *         },
 *         name: "Get the user's balance",
 *         description: "This action calls an API to get the user's current balance.",
 *         userInteractionRequired: false,
 *         requiredUserContextFieldNames: new Set(["my-billing-system.userId"]),
 *         userFormParameters: []
 *     }
 */
export interface ActionRequest extends MavenAGI.ActionBase {
    /** ID that uniquely identifies this action */
    entityId: MavenAGI.EntityIdBase;
}