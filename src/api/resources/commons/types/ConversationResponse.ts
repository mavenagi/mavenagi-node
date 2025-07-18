/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as MavenAGI from "../../../index";

/**
 * @example
 *     {
 *         conversationId: {
 *             referenceId: "conversation-0",
 *             appId: "myapp",
 *             organizationId: "acme",
 *             agentId: "support",
 *             type: MavenAGI.EntityType.Conversation
 *         },
 *         deleted: false,
 *         analysis: {
 *             resolutionStatus: "Resolved",
 *             sentiment: MavenAGI.Sentiment.Positive,
 *             resolvedByMaven: true
 *         },
 *         summary: {
 *             actionIds: [],
 *             incompleteActionIds: [],
 *             insertCount: 0,
 *             thumbsUpCount: 0,
 *             thumbsDownCount: 0,
 *             userMessageCount: 1,
 *             humanAgents: [],
 *             humanAgentsWithInserts: [],
 *             users: []
 *         },
 *         metadata: {},
 *         allMetadata: {},
 *         messages: [{
 *                 type: "user",
 *                 userMessageType: MavenAGI.UserConversationMessageType.User,
 *                 conversationMessageId: {
 *                     referenceId: "message-0",
 *                     appId: "myapp",
 *                     organizationId: "acme",
 *                     agentId: "support",
 *                     type: MavenAGI.EntityType.ConversationMessage
 *                 },
 *                 userId: {
 *                     referenceId: "user-0"
 *                 },
 *                 text: "How do I reset my password?",
 *                 attachments: [{
 *                         url: "https://example.com/attachment-0",
 *                         type: "image/png"
 *                     }]
 *             }, {
 *                 type: "bot",
 *                 botMessageType: MavenAGI.BotConversationMessageType.BotResponse,
 *                 conversationMessageId: {
 *                     referenceId: "message-1",
 *                     appId: "myapp",
 *                     organizationId: "acme",
 *                     agentId: "support",
 *                     type: MavenAGI.EntityType.ConversationMessage
 *                 },
 *                 status: MavenAGI.BotMessageStatus.Sent,
 *                 responses: [{
 *                         type: "text",
 *                         text: "Hi! Go to acme.com/reset-password"
 *                     }],
 *                 metadata: {
 *                     followupQuestions: ["What if I did not get the reset email?"],
 *                     sources: []
 *                 }
 *             }]
 *     }
 */
export interface ConversationResponse extends MavenAGI.BaseConversationResponse {
    /** The messages in the conversation */
    messages: MavenAGI.ConversationMessageResponse[];
}
