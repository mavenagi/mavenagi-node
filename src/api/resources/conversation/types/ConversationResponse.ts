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
 *         analysis: {
 *             resolutionStatus: "Resolved",
 *             sentiment: MavenAGI.Sentiment.Positive
 *         },
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
 *                         url: "https://example.com/attachment-0"
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
export interface ConversationResponse extends MavenAGI.ConversationBase {
    /** The ID that uniquely identifies this conversation */
    conversationId: MavenAGI.EntityId;
    /** The messages in the conversation */
    messages: MavenAGI.ConversationMessageResponse[];
    /** An analysis of the conversation. */
    analysis: MavenAGI.ConversationAnalysis;
}
