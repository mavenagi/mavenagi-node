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
    preconditions: {
        requiredUserContextFieldNames: new Set(["my-billing-system.userId"]),
    },
    userFormParameters: [],
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

## Conversation

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">initialize</a>({ ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pre-populate a new conversation with messages

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
        referenceId: "string",
    },
    messages: [{}],
    context: {},
    responseConfig: {
        capabilities: [MavenAGI.Capability.Markdown],
        isCopilot: true,
        responseLength: MavenAGI.ResponseLength.Short,
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">get</a>(conversationId) -> MavenAGI.ConversationResponse</code></summary>
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
await client.conversation.get("string");
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

Append messages to an existing conversation. The conversation must be initialized first. If a message with the same id already exists, it will be ignored.

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
await client.conversation.appendNewMessages("string", [
    {
        conversationMessageId: {
            referenceId: "string",
        },
        text: "string",
        userMessageType: MavenAGI.UserConversationMessageType.User,
        context: {},
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

Ask a question in a conversation

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
await client.conversation.ask("string", {
    conversationMessageId: {
        referenceId: "string",
    },
    text: "string",
    context: {},
    responseConfig: {},
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

Ask a question

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
await client.conversation.askStream("string", {
    conversationMessageId: {
        referenceId: "string",
    },
    text: "string",
    context: {},
    responseConfig: {},
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">generateMavenSuggestions</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a response suggestion for each requested message id in a conversation

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
await client.conversation.generateMavenSuggestions("string", {
    conversationMessageIds: [
        {
            referenceId: "string",
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">createFeedback</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create feedback

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
    id: "string",
    conversationId: "string",
    conversationMessageId: "string",
    type: MavenAGI.FeedbackType.ThumbsUp,
    text: "string",
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
await client.conversation.submitActionForm("string", {
    actionFormId: "string",
    userContext: {
        name: "string",
        id: {
            string: "string",
        },
        email: "string",
        context: {
            string: "string",
        },
    },
    parameters: {
        string: {
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

Add metadata to an existing conversation's Context. If a metadata field already exists, it will be overwritten.

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
await client.conversation.addConversationMetadata("string", {
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
    type: MavenAGI.KnowledgeBaseType.Api,
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

Create a new knowledge base version. Only supported on API knowledge bases. Will throw an exception if there is an existing version in progress.

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
    type: MavenAGI.KnowledgeBaseVersionType.Full,
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
    contentType: MavenAGI.KnowledgeDocumentContentType.Markdown,
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
    contentType: MavenAGI.KnowledgeDocumentContentType.Markdown,
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
    type: MavenAGI.EventTriggerType.ConversationCreated,
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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">upsertAppUser</a>({ ...params }) -> MavenAGI.AppUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new user or update an existing one

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
await client.users.upsertAppUser({
    appUserId: {
        referenceId: "string",
    },
    userIdentifiers: {
        identifiers: new Set([{}]),
    },
    metadata: {
        string: {},
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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getAppUser</a>(userId) -> MavenAGI.AppUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a user

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
await client.users.getAppUser("string");
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

**userId:** `string` — Externally supplied unique ID of the user

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