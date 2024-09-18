/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * @example
 *     {
 *         preconditionType: "group",
 *         operator: MavenAGI.PreconditionGroupOperator.And,
 *         preconditions: [{
 *                 preconditionType: "user",
 *                 key: "userKey"
 *             }, {
 *                 preconditionType: "user",
 *                 key: "userKey2"
 *             }]
 *     }
 */
export type Precondition =
    | MavenAGI.Precondition.User
    | MavenAGI.Precondition.Conversation
    | MavenAGI.Precondition.Group;

export declare namespace Precondition {
    interface User extends MavenAGI.MetadataPrecondition {
        preconditionType: "user";
    }

    interface Conversation {
        preconditionType: "conversation";
        value: MavenAGI.ConversationPrecondition;
    }

    interface Group extends MavenAGI.PreconditionGroup {
        preconditionType: "group";
    }
}