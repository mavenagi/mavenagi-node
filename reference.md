# Reference

## Actions

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">createOrUpdate</a>({ ...params }) -> MavenAGI.ActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an action or create it if it doesn't exist

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.createOrUpdate({
    actionId: {
        referenceId: "get-balance",
    },
    name: "Get the user's balance",
    description: "This action calls an API to get the user's current balance.",
    userInteractionRequired: false,
    userFormParameters: [],
    precondition: {
        preconditionType: "group",
        operator: "AND",
        preconditions: [
            {
                preconditionType: "user",
                key: "userKey",
            },
            {
                preconditionType: "user",
                key: "userKey2",
            },
        ],
    },
    language: "en",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.ActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">get</a>(actionReferenceId) -> MavenAGI.ActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an action by its supplied ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.get("get-balance");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**actionReferenceId:** `string` — The reference ID of the action to get. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">delete</a>(actionReferenceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an action

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.delete("get-balance");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**actionReferenceId:** `string` — The reference ID of the action to unregister. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Analytics

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getConversationTable</a>({ ...params }) -> MavenAGI.ConversationTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves structured conversation data formatted as a table, allowing users to group, filter, and define specific metrics to display as columns.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.getConversationTable({
    conversationFilter: {
        languages: ["en", "es"],
    },
    timeGrouping: "DAY",
    fieldGroupings: [
        {
            field: "Category",
        },
    ],
    columnDefinitions: [
        {
            header: "count",
            metric: {
                type: "count",
            },
        },
        {
            header: "avg_first_response_time",
            metric: {
                type: "average",
                targetField: "FirstResponseTime",
            },
        },
        {
            header: "percentile_handle_time",
            metric: {
                type: "percentile",
                targetField: "HandleTime",
                percentile: 25,
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.ConversationTableRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getConversationChart</a>({ ...params }) -> MavenAGI.ChartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches conversation data visualized in a chart format. Supported chart types include pie chart, date histogram, and stacked bar charts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.getConversationChart({
    type: "pieChart",
    conversationFilter: {
        languages: ["en", "es"],
    },
    groupBy: {
        field: "Category",
    },
    metric: {
        type: "count",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.ConversationChartRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getFeedbackTable</a>({ ...params }) -> MavenAGI.FeedbackTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves structured feedback data formatted as a table, allowing users to group, filter, and define specific metrics to display as columns.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.analytics.getFeedbackTable({
    feedbackFilter: {
        types: ["THUMBS_UP", "INSERT"],
    },
    fieldGroupings: [
        {
            field: "CreatedBy",
        },
    ],
    columnDefinitions: [
        {
            header: "feedback_count",
            metric: {
                type: "count",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.FeedbackTableRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Analytics.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AppSettings

<details><summary><code>client.appSettings.<a href="/src/api/resources/appSettings/client/Client.ts">get</a>() -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get app settings set during installation

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appSettings.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AppSettings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.appSettings.<a href="/src/api/resources/appSettings/client/Client.ts">update</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update app settings. Performs a merge of the provided settings with the existing app settings.

- If a new key is provided, it will be added to the app settings.
- If an existing key is provided, it will be updated.
- No keys will be removed.

Note that if an array value is provided it will fully replace an existing value as arrays cannot be merged.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.appSettings.update({
    string: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Record<string, unknown>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AppSettings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Conversation

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">initialize</a>({ ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initialize a new conversation.
Only required if the ask request wishes to supply conversation level data or when syncing to external systems.

Conversations can not be modified using this API. If the conversation already exists then the existing conversation will be returned.

After initialization,

- metadata can be changed using the `updateConversationMetadata` API.
- messages can be added to the conversation with the `appendNewMessages` or `ask` APIs.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.initialize({
    conversationId: {
        referenceId: "referenceId",
    },
    messages: [
        {
            userId: {
                referenceId: "referenceId",
            },
            text: "text",
            userMessageType: "USER",
            conversationMessageId: {
                referenceId: "referenceId",
            },
        },
        {
            userId: {
                referenceId: "referenceId",
            },
            text: "text",
            userMessageType: "USER",
            conversationMessageId: {
                referenceId: "referenceId",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.ConversationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">get</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a conversation

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.get("conversationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of the conversation to get

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.ConversationGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">delete</a>(conversationId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Wipes a conversation of all user data.
The conversation ID will still exist and non-user specific data will still be retained.
Attempts to modify or add messages to the conversation will throw an error.

<Warning>This is a destructive operation and cannot be undone. <br/><br/>
The exact fields cleared include: the conversation subject, userRequest, agentResponse.
As well as the text response, followup questions, and backend LLM prompt of all messages.</Warning>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.delete("conversation-0", {
    reason: "GDPR deletion request 1234.",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of the conversation to delete

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.ConversationDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">appendNewMessages</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Append messages to an existing conversation. The conversation must be initialized first. If a message with the same ID already exists, it will be ignored. Messages do not allow modification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.appendNewMessages("conversationId", [
    {
        userId: {
            referenceId: "referenceId",
        },
        text: "text",
        userMessageType: "USER",
        conversationMessageId: {
            referenceId: "referenceId",
        },
    },
    {
        userId: {
            referenceId: "referenceId",
        },
        text: "text",
        userMessageType: "USER",
        conversationMessageId: {
            referenceId: "referenceId",
        },
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of the conversation to append messages to

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.ConversationMessageRequest[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">ask</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an answer from Maven for a given user question. If the user question or its answer already exists,
they will be reused and will not be updated. Messages do not allow modification once generated.

Concurrency Behavior:

- If another API call is made for the same user question while a response is mid-stream, partial answers may be returned.
- The second caller will receive a truncated or partial response depending on where the first stream is in its processing. The first caller's stream will remain unaffected and continue delivering the full response.

Known Limitation:

- The API does not currently expose metadata indicating whether a response or message is incomplete. This will be addressed in a future update.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.ask("conversation-0", {
    conversationMessageId: {
        referenceId: "message-0",
    },
    userId: {
        referenceId: "user-0",
    },
    text: "How do I reset my password?",
    attachments: [
        {
            type: "image/png",
            content: "iVBORw0KGgo...",
        },
    ],
    transientData: {
        userToken: "abcdef123",
        queryApiKey: "foobar456",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of a new or existing conversation to use as context for the question

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.AskRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">askStream</a>(conversationId, { ...params }) -> core.Stream<MavenAGI.StreamResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an answer from Maven for a given user question with a streaming response. The response will be sent as a stream of events.
The text portions of stream responses should be concatenated to form the full response text.
Action and metadata events should overwrite past data and do not need concatenation.

If the user question or its answer already exists, they will be reused and will not be updated.
Messages do not allow modification once generated.

Concurrency Behavior:

- If another API call is made for the same user question while a response is mid-stream, partial answers may be returned.
- The second caller will receive a truncated or partial response depending on where the first stream is in its processing. The first caller's stream will remain unaffected and continue delivering the full response.

Known Limitation:

- The API does not currently expose metadata indicating whether a response or message is incomplete. This will be addressed in a future update.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.conversation.askStream("conversation-0", {
    conversationMessageId: {
        referenceId: "message-0",
    },
    userId: {
        referenceId: "user-0",
    },
    text: "How do I reset my password?",
    attachments: [
        {
            type: "image/png",
            content: "iVBORw0KGgo...",
        },
    ],
    transientData: {
        userToken: "abcdef123",
        queryApiKey: "foobar456",
    },
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of a new or existing conversation to use as context for the question

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.AskRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">generateMavenSuggestions</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This method is deprecated and will be removed in a future release. Use either `ask` or `askStream` instead.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.generateMavenSuggestions("conversationId", {
    conversationMessageIds: [
        {
            referenceId: "referenceId",
        },
        {
            referenceId: "referenceId",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of a conversation the messages belong to

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.GenerateMavenSuggestionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">categorize</a>(conversationId) -> MavenAGI.CategorizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Uses an LLM flow to categorize the conversation. Experimental.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.categorize("conversationId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of the conversation to categorize

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">createFeedback</a>({ ...params }) -> MavenAGI.Feedback</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update feedback or create it if it doesn't exist

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.createFeedback({
    feedbackId: {
        referenceId: "feedback-0",
    },
    userId: {
        referenceId: "user-0",
    },
    conversationId: {
        referenceId: "conversation-0",
    },
    conversationMessageId: {
        referenceId: "message-1",
    },
    type: "THUMBS_UP",
    text: "Great answer!",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.FeedbackRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">submitActionForm</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit a filled out action form

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.submitActionForm("conversationId", {
    actionFormId: "actionFormId",
    parameters: {
        parameters: {
            key: "value",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of a conversation the form being submitted belongs to

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.SubmitActionFormRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">addConversationMetadata</a>(conversationId, { ...params }) -> Record<string, string></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replaced by `updateConversationMetadata`.

Adds metadata to an existing conversation. If a metadata field already exists, it will be overwritten.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.addConversationMetadata("conversationId", {
    string: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of a conversation the metadata being added belongs to

</dd>
</dl>

<dl>
<dd>

**request:** `Record<string, string>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">updateConversationMetadata</a>(conversationId, { ...params }) -> MavenAGI.ConversationMetadata</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update metadata supplied by the calling application for an existing conversation.
Does not modify metadata saved by other apps.

If a metadata field already exists for the calling app, it will be overwritten.
If it does not exist, it will be added. Will not remove metadata fields.

Returns all metadata saved by any app on the conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.updateConversationMetadata("conversation-0", {
    appId: "conversation-owning-app",
    values: {
        key: "newValue",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**conversationId:** `string` — The ID of the conversation to modify metadata for

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.UpdateMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">search</a>({ ...params }) -> MavenAGI.ConversationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search conversations

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversation.search({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.ConversationsSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversation.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Inbox

<details><summary><code>client.inbox.<a href="/src/api/resources/inbox/client/Client.ts">search</a>({ ...params }) -> MavenAGI.InboxSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of inbox items for an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inbox.search({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.InboxSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inbox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inbox.<a href="/src/api/resources/inbox/client/Client.ts">get</a>(inboxItemId, { ...params }) -> MavenAGI.InboxItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details of a specific inbox item by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inbox.get("inboxItemId", {
    appId: "appId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**inboxItemId:** `string` — The ID of the inbox item to get. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.InboxItemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inbox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inbox.<a href="/src/api/resources/inbox/client/Client.ts">getFix</a>(inboxItemFixId, { ...params }) -> MavenAGI.InboxItemFix</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a suggested fix. Includes document information if the fix is a Missing Knowledge suggestion.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inbox.getFix("inboxItemFixId", {
    appId: "appId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**inboxItemFixId:** `string` — Unique identifier for the inbox fix.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.InboxItemFixRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inbox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inbox.<a href="/src/api/resources/inbox/client/Client.ts">applyFix</a>(inboxItemFixId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply a fix to an inbox item with a specific document.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inbox.applyFix("inboxItemFixId", {
    appId: "appId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**inboxItemFixId:** `string` — Unique identifier for the inbox fix.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.ApplyInboxItemFixRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inbox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.inbox.<a href="/src/api/resources/inbox/client/Client.ts">ignore</a>(inboxItemId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ignore a specific inbox item by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inbox.ignore("inboxItemId", {
    appId: "appId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**inboxItemId:** `string` — Unique identifier for the inbox item.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.InboxItemIgnoreRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inbox.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Knowledge

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">createOrUpdateKnowledgeBase</a>({ ...params }) -> MavenAGI.KnowledgeBaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a knowledge base or create it if it doesn't exist.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.createOrUpdateKnowledgeBase({
    knowledgeBaseId: {
        referenceId: "help-center",
    },
    name: "Help center",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeBaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getKnowledgeBase</a>(knowledgeBaseReferenceId) -> MavenAGI.KnowledgeBaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an existing knowledge base by its supplied ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.getKnowledgeBase("help-center");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to get. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">createKnowledgeBaseVersion</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeBaseVersion</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new knowledge base version.

If an existing version is in progress, then that version will be finalized in an error state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.createKnowledgeBaseVersion("help-center", {
    type: "FULL",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to create a version for. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeBaseVersion`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">finalizeKnowledgeBaseVersion</a>(knowledgeBaseReferenceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Finalize the latest knowledge base version. Required to indicate the version is complete. Will throw an exception if the latest version is not in progress.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.finalizeKnowledgeBaseVersion("help-center");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to finalize a version for. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">createKnowledgeDocument</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create knowledge document. Requires an existing knowledge base with an in progress version. Will throw an exception if the latest version is not in progress.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.createKnowledgeDocument("help-center", {
    knowledgeDocumentId: {
        referenceId: "getting-started",
    },
    contentType: "MARKDOWN",
    content: "## Getting started\\nThis is a getting started guide for the help center.",
    title: "Getting started",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to create a document for. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">updateKnowledgeDocument</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Not yet implemented. Update knowledge document. Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the latest version is not in progress.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.updateKnowledgeDocument("help-center", {
    knowledgeDocumentId: {
        referenceId: "getting-started",
    },
    contentType: "MARKDOWN",
    content: "## Getting started\\nThis is a getting started guide for the help center.",
    title: "Getting started",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base that contains the document to update. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">deleteKnowledgeDocument</a>(knowledgeBaseReferenceId, knowledgeDocumentReferenceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Not yet implemented. Delete knowledge document. Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the latest version is not in progress.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.knowledge.deleteKnowledgeDocument("help-center", "getting-started");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base that contains the document to delete. All other entity ID fields are inferred from the request

</dd>
</dl>

<dl>
<dd>

**knowledgeDocumentReferenceId:** `string` — The reference ID of the knowledge document to delete. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Knowledge.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Translations

<details><summary><code>client.translations.<a href="/src/api/resources/translations/client/Client.ts">translate</a>({ ...params }) -> MavenAGI.TranslationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Translate text from one language to another

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.translations.translate({
    text: "Hello world",
    targetLanguage: "es",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.TranslationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Translations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Triggers

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">createOrUpdate</a>({ ...params }) -> MavenAGI.EventTriggerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an event trigger or create it if it doesn't exist.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.createOrUpdate({
    triggerId: {
        referenceId: "store-in-snowflake",
    },
    description: "Stores conversation data in Snowflake",
    type: "CONVERSATION_CREATED",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.EventTriggerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">get</a>(triggerReferenceId) -> MavenAGI.EventTriggerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an event trigger by its supplied ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.get("store-in-snowflake");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**triggerReferenceId:** `string` — The reference ID of the event trigger to get. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">delete</a>(triggerReferenceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an event trigger

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.delete("store-in-snowflake");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**triggerReferenceId:** `string` — The reference ID of the event trigger to delete. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Triggers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createOrUpdate</a>({ ...params }) -> MavenAGI.AppUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a user or create it if it doesn't exist.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.createOrUpdate({
    userId: {
        referenceId: "user-0",
    },
    identifiers: new Set([
        {
            value: "joe@myapp.com",
            type: "EMAIL",
        },
    ]),
    data: {
        name: {
            value: "Joe",
            visibility: "VISIBLE",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MavenAGI.AppUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(userId, { ...params }) -> MavenAGI.AppUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a user by its supplied ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.get("user-0");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The reference ID of the user to get. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.UserGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(userId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes all identifiers and user data saved by the specified app.
Does not modify data or identifiers saved by other apps.

If this user is linked to a user from another app, it will not be unlinked. Unlinking of users is not yet supported.

<Warning>This is a destructive operation and cannot be undone.</Warning>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.delete("user-0");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The reference ID of the user to delete. All other entity ID fields are inferred from the request.

</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.UserDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
