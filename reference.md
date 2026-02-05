# Reference
## Actions
<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">search</a>({ ...params }) -> MavenAGI.ActionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.search({});

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

**request:** `MavenAGI.ActionsSearchRequest` 
    
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
        referenceId: "get-balance"
    },
    name: "Get the user's balance",
    description: "This action calls an API to get the user's current balance.",
    userInteractionRequired: false,
    userFormParameters: [],
    precondition: {
        preconditionType: "group",
        operator: "AND",
        preconditions: [{
                "preconditionType": "user",
                "key": "userKey"
            }, {
                "preconditionType": "user",
                "key": "userKey2"
            }]
    },
    language: "en"
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

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">get</a>(actionReferenceId, { ...params }) -> MavenAGI.ActionResponse</code></summary>
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

**request:** `MavenAGI.ActionGetRequest` 
    
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

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">patch</a>(actionReferenceId, { ...params }) -> MavenAGI.ActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable action fields

The `appId` field can be provided to update an action owned by a different app. 
All other fields will overwrite the existing value on the action only if provided.
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
await client.actions.patch("get-balance", {
    instructions: "Use this action when the user asks about their account balance or remaining credits.",
    llmInclusionStatus: "WHEN_RELEVANT",
    segmentId: {
        referenceId: "premium-users",
        appId: "my-billing-system",
        organizationId: "acme",
        agentId: "support",
        type: "SEGMENT"
    }
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

**actionReferenceId:** `string` — The reference ID of the action to patch.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.ActionPatchRequest` 
    
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

## Agents
<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">search</a>({ ...params }) -> MavenAGI.AgentsSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for agents across all organizations.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.agents.search({});

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

**request:** `MavenAGI.AgentsSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">list</a>(organizationReferenceId) -> MavenAGI.Agent[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all agents for an organization
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
await client.agents.list("organizationReferenceId");

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

**organizationReferenceId:** `string` — The ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">create</a>(organizationReferenceId, agentReferenceId, { ...params }) -> MavenAGI.Agent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new agent

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.agents.create("organizationReferenceId", "agentReferenceId", {
    name: "name",
    environment: "DEMO"
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

**organizationReferenceId:** `string` — The ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**agentReferenceId:** `string` — The ID of the agent.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.CreateAgentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">get</a>(organizationReferenceId, agentReferenceId) -> MavenAGI.Agent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an agent
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
await client.agents.get("organizationReferenceId", "agentReferenceId");

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

**organizationReferenceId:** `string` — The ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**agentReferenceId:** `string` — The ID of the agent.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">patch</a>(organizationReferenceId, agentReferenceId, { ...params }) -> MavenAGI.Agent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable agent fields 
All fields will overwrite the existing value on the agent only if provided.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.agents.patch("organizationReferenceId", "agentReferenceId");

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

**organizationReferenceId:** `string` — The ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**agentReferenceId:** `string` — The ID of the agent.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.AgentPatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">delete</a>(organizationReferenceId, agentReferenceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an agent.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.agents.delete("organizationReferenceId", "agentReferenceId");

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

**organizationReferenceId:** `string` — The ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**agentReferenceId:** `string` — The ID of the agent.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions` 
    
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
        languages: ["en", "es"]
    },
    timeGrouping: "DAY",
    fieldGroupings: [{
            field: "Category"
        }],
    columnDefinitions: [{
            header: "count",
            metric: {
                type: "count"
            }
        }, {
            header: "avg_first_response_time",
            metric: {
                type: "average",
                targetField: "FirstResponseTime"
            }
        }, {
            header: "percentile_handle_time",
            metric: {
                type: "percentile",
                targetField: "HandleTime",
                percentile: 25
            }
        }]
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
        languages: ["en", "es"]
    },
    groupBy: {
        field: "Category"
    },
    metric: {
        type: "count"
    }
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

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">exportConversationTable</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export the conversation analytics table to a CSV file.

This outputs the current table view defined by the request. For most programmatic use cases, prefer `getConversationTable` and format client-side. The CSV format may change and should not be relied upon by code consumers. A maximum of 10,000 rows can be exported at a time.
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
await client.analytics.exportConversationTable({
    fieldGroupings: [{
            field: "Category"
        }, {
            field: "Category"
        }],
    columnDefinitions: [{
            metric: {
                type: "count"
            },
            header: "header"
        }, {
            metric: {
                type: "count"
            },
            header: "header"
        }]
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

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getFeedbackTable</a>({ ...params }) -> MavenAGI.FeedbackTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves structured feedback data formatted as a table, allowing users to group, filter,  and define specific metrics to display as columns.
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
        types: ["THUMBS_UP", "INSERT"]
    },
    fieldGroupings: [{
            field: "CreatedBy"
        }],
    columnDefinitions: [{
            header: "feedback_count",
            metric: {
                type: "count"
            }
        }]
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

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getAgentUserTable</a>({ ...params }) -> MavenAGI.AgentUserTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves structured agent user data formatted as a table, allowing users to group, filter,  and define specific metrics to display as columns.
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
await client.analytics.getAgentUserTable({
    agentUserFilter: {
        search: "john"
    },
    columnDefinitions: [{
            header: "user_count",
            metric: {
                type: "count"
            }
        }]
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

**request:** `MavenAGI.AgentUserTableRequest` 
    
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

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getEventTable</a>({ ...params }) -> MavenAGI.EventTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves structured event data formatted as a table, allowing users to group, filter,  and define specific metrics to display as columns.
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
await client.analytics.getEventTable({
    eventFilter: {
        eventTypes: ["USER"]
    },
    fieldGroupings: [{
            field: "EVENT_NAME"
        }],
    columnDefinitions: [{
            header: "event_count",
            metric: {
                type: "count"
            }
        }]
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

**request:** `MavenAGI.EventTableRequest` 
    
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

<details><summary><code>client.analytics.<a href="/src/api/resources/analytics/client/Client.ts">getEventChart</a>({ ...params }) -> MavenAGI.ChartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches event data visualized in a chart format. Supported chart types include pie chart, date histogram, and stacked bar charts.
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
await client.analytics.getEventChart({
    type: "pieChart",
    eventFilter: {
        eventTypes: ["USER"]
    },
    groupBy: {
        field: "EVENT_NAME"
    },
    metric: {
        type: "count"
    }
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

**request:** `MavenAGI.EventChartRequest` 
    
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
<details><summary><code>client.appSettings.<a href="/src/api/resources/appSettings/client/Client.ts">search</a>({ ...params }) -> MavenAGI.SearchAppSettingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for app settings which have the `$index` key set to the provided value.

You can set the `$index` key using the Update app settings API.

<Warning>This API currently requires an organization ID and agent ID for any agent which is installed on the app. This requirement will be removed in a future update.</Warning>
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
await client.appSettings.search({
    index: "index"
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

**request:** `MavenAGI.SearchAppSettingsRequest` 
    
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

<details><summary><code>client.appSettings.<a href="/src/api/resources/appSettings/client/Client.ts">get</a>() -> Record&lt;string, unknown&gt;</code></summary>
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

<details><summary><code>client.appSettings.<a href="/src/api/resources/appSettings/client/Client.ts">update</a>({ ...params }) -> Record&lt;string, unknown&gt;</code></summary>
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
    "string": {
        "key": "value"
    }
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

## Assets
<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">initiateUpload</a>({ ...params }) -> MavenAGI.InitiateAssetUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initiate an upload. 
Returns a pre-signed URL for direct file upload and an asset ID for subsequent operations.
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
await client.assets.initiateUpload({
    type: "type"
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

**request:** `MavenAGI.InitiateAssetUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.assets.<a href="/src/api/resources/assets/client/Client.ts">commitUpload</a>(assetReferenceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Commit an upload after successful file transfer.
Updates the asset status and makes it available for use.
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
await client.assets.commitUpload("assetReferenceId", {});

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

**assetReferenceId:** `string` — The reference ID of the asset to commit (provided by the initiate call). All other entity ID fields are inferred from the API request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.CommitAssetUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Assets.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Auth
<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">sessionToken</a>({ ...params }) -> MavenAGI.SessionTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a short-lived session token that can be used to authenticate 
WebSocket connections. Session tokens are useful for client-side applications where 
you don’t want to expose your API key.
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
await client.auth.sessionToken({
    ttlSeconds: 3600
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

**request:** `MavenAGI.SessionTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions` 
    
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
        referenceId: "x"
    },
    messages: [{
            conversationMessageId: {
                referenceId: "x"
            },
            userId: {
                referenceId: "x"
            },
            text: "text",
            userMessageType: "USER"
        }, {
            conversationMessageId: {
                referenceId: "x"
            },
            userId: {
                referenceId: "x"
            },
            text: "text",
            userMessageType: "USER"
        }]
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">patch</a>(conversationId, { ...params }) -> MavenAGI.ConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable conversation fields. 

The `appId` field can be provided to update a conversation owned by a different app. 
All other fields will overwrite the existing value on the conversation only if provided.
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
await client.conversation.patch("conversation-0", {
    llmEnabled: true
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

**conversationId:** `string` — The ID of the conversation to patch
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.ConversationPatchRequest` 
    
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

Simulation conversations will no longer be visible in search results nor metrics. 
Non-simulation conversations will remain visible - they can not be fully removed from the system.

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
    reason: "GDPR deletion request 1234."
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
await client.conversation.appendNewMessages("conversationId", [{
        conversationMessageId: {
            referenceId: "x"
        },
        userId: {
            referenceId: "x"
        },
        text: "text",
        userMessageType: "USER"
    }, {
        conversationMessageId: {
            referenceId: "x"
        },
        userId: {
            referenceId: "x"
        },
        text: "text",
        userMessageType: "USER"
    }]);

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
        referenceId: "message-0"
    },
    userId: {
        referenceId: "user-0"
    },
    text: "How do I reset my password?",
    attachments: [{
            type: "image/png",
            content: "iVBORw0KGgo..."
        }],
    transientData: {
        "userToken": "abcdef123",
        "queryApiKey": "foobar456"
    },
    timezone: "America/New_York"
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">askStream</a>(conversationId, { ...params }) -> core.Stream&lt;MavenAGI.StreamResponse&gt;</code></summary>
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
        referenceId: "message-0"
    },
    userId: {
        referenceId: "user-0"
    },
    text: "How do I reset my password?",
    attachments: [{
            type: "image/png",
            content: "iVBORw0KGgo..."
        }],
    transientData: {
        "userToken": "abcdef123",
        "queryApiKey": "foobar456"
    },
    timezone: "America/New_York"
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">askObjectStream</a>(conversationId, { ...params }) -> core.Stream&lt;MavenAGI.ObjectStreamResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a structured object response based on a provided schema and user prompt with a streaming response. 
The response will be sent as a stream of events containing text, start, and end events.
The text portions of stream responses should be concatenated to form the full response text.

If the user question and object response already exist, they will be reused and not updated.

Concurrency Behavior:
- If another API call is made for the same user question while a response is mid-stream, partial answers may be returned.
- The second caller will receive a truncated or partial response depending on where the first stream is in its processing. The first caller's stream will remain unaffected and continue delivering the full response.

Known Limitations:
- Schema enforcement is best-effort and may not guarantee exact conformity.
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
const response = await client.conversation.askObjectStream("conversationId", {
    schema: "schema",
    conversationMessageId: {
        referenceId: "x"
    },
    userId: {
        referenceId: "x"
    },
    text: "text"
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

**conversationId:** `string` — The ID of a new or existing conversation to use as context for the object generation request
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.AskObjectRequest` 
    
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
        referenceId: "feedback-0"
    },
    userId: {
        referenceId: "user-0"
    },
    conversationId: {
        referenceId: "conversation-0"
    },
    conversationMessageId: {
        referenceId: "message-1"
    },
    type: "THUMBS_UP",
    text: "Great answer!"
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

Submit a filled out action form. 
Action forms can not be submitted more than once, attempting to do so will result in an error.

Additionally, form submission is only allowed when the form is the last message in the conversation. 
Forms should be disabled in surface UI if a conversation continues and they remain unsubmitted.
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
        "parameters": {
            "key": "value"
        }
    }
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">addConversationMetadata</a>(conversationId, { ...params }) -> Record&lt;string, string&gt;</code></summary>
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
    "string": "string"
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
        "key": "newValue"
    }
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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">export</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export conversations to a CSV file. 

This will output a summary of each conversation that matches the supplied filter. A maximum of 10,000 conversations can be exported at a time.

For most use cases it is recommended to use the `search` API instead and convert the JSON response to your desired format. 
The CSV format may change over time and should not be relied upon by code consumers.
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
await client.conversation.export({});

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

<details><summary><code>client.conversation.<a href="/src/api/resources/conversation/client/Client.ts">deliverMessage</a>({ ...params }) -> MavenAGI.DeliverMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deliver a message to a user or conversation.

<Warning>
Currently, messages can only be successfully delivered to conversations with the `ASYNC` capability that are `open`. 
User message delivery is not yet supported.
</Warning>
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
await client.conversation.deliverMessage({
    type: "user",
    userId: {
        type: "AGENT",
        appId: "appId",
        referenceId: "x"
    },
    message: {
        conversationMessageId: {
            referenceId: "x"
        },
        userId: {
            referenceId: "x"
        },
        text: "text",
        userMessageType: "USER"
    }
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

**request:** `MavenAGI.DeliverMessageRequest` 
    
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

## Customers
<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">search</a>({ ...params }) -> MavenAGI.CustomersSearchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customers.search({});

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

**request:** `MavenAGI.CustomersSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">createOrUpdate</a>({ ...params }) -> MavenAGI.CustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a customer of an agent or create it if it doesn't exist. In case of an update, fields not provided (e.g., description, status) will be preserved.
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
await client.customers.createOrUpdate({
    customerId: {
        referenceId: "acme"
    },
    name: "Acme Corporation"
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

**request:** `MavenAGI.CustomerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">get</a>(customerReferenceId, { ...params }) -> MavenAGI.CustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a customer by its supplied ID
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
await client.customers.get("acme");

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

**customerReferenceId:** `string` — The reference ID of the customer to get. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.CustomerGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customers.<a href="/src/api/resources/customers/client/Client.ts">patch</a>(customerReferenceId, { ...params }) -> MavenAGI.CustomerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable customer fields

The `appId` field can be provided to update a customer owned by a different app.
All other fields will overwrite the existing value on the customer only if provided.
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
await client.customers.patch("customerReferenceId", {});

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

**customerReferenceId:** `string` — The reference ID of the customer to update. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.CustomerPatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customers.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Events
<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">create</a>({ ...params }) -> MavenAGI.EventResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new event
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
await client.events.create({
    eventType: "userEvent",
    id: {
        referenceId: "x"
    },
    eventName: "BUTTON_CLICKED",
    userInfo: {
        id: {
            referenceId: "x"
        }
    }
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

**request:** `MavenAGI.EventRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">search</a>({ ...params }) -> MavenAGI.EventsSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search events
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
await client.events.search({});

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

**request:** `MavenAGI.EventsSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">get</a>(eventId, { ...params }) -> MavenAGI.EventResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details of a specific Event item by its ID.
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
await client.events.get("eventId", {
    appId: "appId"
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

**eventId:** `string` — The ID of the Event to get.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.EventGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">export</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export events to a CSV file.

This will output a summary of each event that matches the supplied filter. A maximum of 10,000 events can be exported at a time. For most use cases it is recommended to use the search API instead and convert the JSON response to your desired format. The CSV format may change over time and should not be relied upon by code consumers.
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
await client.events.export({});

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

**request:** `MavenAGI.EventsSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions` 
    
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
    appId: "appId"
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
    appId: "appId"
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

<details><summary><code>client.inbox.<a href="/src/api/resources/inbox/client/Client.ts">applyFixes</a>(inboxItemId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply a list of fixes belonging to an inbox item.
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
await client.inbox.applyFixes("inboxItemId", {
    appId: "appId",
    fixReferenceIds: ["fixReferenceIds", "fixReferenceIds"]
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

**request:** `MavenAGI.ApplyFixesRequest` 
    
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
    appId: "appId"
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

## Integrations
<details><summary><code>client.integrations.<a href="/src/api/resources/integrations/client/Client.ts">update</a>(organizationId, integrationId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an integration.
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
await client.integrations.update("organizationId", "integrationId", {});

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

**organizationId:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**integrationId:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.UpdateIntegrationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Integrations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Knowledge
<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">searchKnowledgeBases</a>({ ...params }) -> MavenAGI.KnowledgeBasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search knowledge bases
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
await client.knowledge.searchKnowledgeBases({});

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

**request:** `MavenAGI.KnowledgeBaseSearchRequest` 
    
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
        referenceId: "help-center"
    },
    name: "Help center"
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getKnowledgeBase</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeBaseResponse</code></summary>
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

**request:** `MavenAGI.KnowledgeBaseGetRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">refreshKnowledgeBase</a>(knowledgeBaseReferenceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Request that a knowledge base refresh itself.

Knowledge bases refresh on a schedule determined by the `refreshFrequency` field.
They can also be refreshed on demand by calling this endpoint.
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
await client.knowledge.refreshKnowledgeBase("help-center", {
    appId: "readme"
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

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to refresh. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeBaseRefreshRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">patchKnowledgeBase</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeBaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable knowledge base fields

The `appId` field can be provided to update a knowledge base owned by a different app.
All other fields will overwrite the existing value on the knowledge base only if provided.
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
await client.knowledge.patchKnowledgeBase("help-center", {
    name: "Updated Help Center",
    tags: new Set(["tag1", "tag2", "tag3"]),
    segmentId: {
        referenceId: "premium-users",
        appId: "readme",
        organizationId: "acme",
        agentId: "support",
        type: "SEGMENT"
    }
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

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to patch.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeBasePatchRequest` 
    
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
    type: "FULL"
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

**request:** `MavenAGI.KnowledgeBaseVersionRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">finalizeKnowledgeBaseVersion</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeBaseVersion</code></summary>
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
await client.knowledge.finalizeKnowledgeBaseVersion("help-center", {
    versionId: {
        type: "KNOWLEDGE_BASE_VERSION",
        referenceId: "versionId",
        appId: "maven"
    },
    status: "SUCCEEDED"
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

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to finalize a version for. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.FinalizeKnowledgeBaseVersionRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">listKnowledgeBaseVersions</a>(knowledgeBaseReferenceId, { ...params }) -> MavenAGI.KnowledgeBaseVersionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all active versions for a knowledge base. Returns the most recent versions first.
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
await client.knowledge.listKnowledgeBaseVersions("knowledgeBaseReferenceId");

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

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to list versions for. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeBaseVersionsListRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">searchKnowledgeDocuments</a>({ ...params }) -> MavenAGI.KnowledgeDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search knowledge documents
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
await client.knowledge.searchKnowledgeDocuments({});

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

**request:** `MavenAGI.KnowledgeDocumentSearchRequest` 
    
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

Create or update a knowledge document. Requires an existing knowledge base with an in progress version.
Will throw an exception if the latest version is not in progress.

<Tip>
This API maintains document version history. If for the same reference ID none of the `title`, `text`, `sourceUrl`, `metadata` fields
have changed, a new document version will not be created. The existing version will be reused.
</Tip>
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
        referenceId: "getting-started"
    },
    versionId: {
        type: "KNOWLEDGE_BASE_VERSION",
        referenceId: "versionId",
        appId: "maven"
    },
    contentType: "MARKDOWN",
    content: "## Getting started\\nThis is a getting started guide for the help center.",
    title: "Getting started",
    metadata: {
        "category": "getting-started"
    }
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">deleteKnowledgeDocument</a>(knowledgeBaseReferenceId, knowledgeDocumentReferenceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete knowledge document from a specific version.
Requires an existing knowledge base with an in progress version of type PARTIAL. Will throw an exception if the version is not in progress.
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
await client.knowledge.deleteKnowledgeDocument("help-center", "getting-started", {
    versionId: {
        type: "KNOWLEDGE_BASE_VERSION",
        appId: "maven",
        referenceId: "versionId"
    }
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

**request:** `MavenAGI.KnowledgeDeleteRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">getKnowledgeDocument</a>(knowledgeBaseVersionReferenceId, knowledgeDocumentReferenceId, { ...params }) -> MavenAGI.KnowledgeDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a knowledge document by its supplied version and document IDs. Response includes document content in markdown format.
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
await client.knowledge.getKnowledgeDocument("knowledgeBaseVersionReferenceId", "knowledgeDocumentReferenceId", {
    knowledgeBaseVersionAppId: "knowledgeBaseVersionAppId"
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

**knowledgeBaseVersionReferenceId:** `string` — The reference ID of the knowledge base version that contains the document. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**knowledgeDocumentReferenceId:** `string` — The reference ID of the knowledge document to get. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeDocumentGetRequest` 
    
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

<details><summary><code>client.knowledge.<a href="/src/api/resources/knowledge/client/Client.ts">patchKnowledgeDocument</a>(knowledgeBaseReferenceId, knowledgeDocumentReferenceId, { ...params }) -> MavenAGI.KnowledgeDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable knowledge document fields that can be set independently of a knowledge base version.

For any changes in document content see the `createKnowledgeBaseVersion` and `createKnowledgeDocument` endpoints.

The `knowledgeBaseAppId` field can be provided to update a knowledge document in a knowledge base owned by a different app.
All other fields will overwrite the existing value on the knowledge document only if provided.
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
await client.knowledge.patchKnowledgeDocument("help-center", "how-it-works", {
    llmInclusionStatus: "ALWAYS"
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

**knowledgeBaseReferenceId:** `string` — The reference ID of the knowledge base to patch.
    
</dd>
</dl>

<dl>
<dd>

**knowledgeDocumentReferenceId:** `string` — The reference ID of the knowledge document to patch.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.KnowledgeDocumentPatchRequest` 
    
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

## Organizations
<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">create</a>(organizationReferenceId, { ...params }) -> MavenAGI.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new organization.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.organizations.create("organizationReferenceId", {
    name: "name",
    defaultLanguage: "defaultLanguage"
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

**organizationReferenceId:** `string` — The reference ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.CreateOrganizationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">get</a>(organizationReferenceId) -> MavenAGI.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an organization by ID
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
await client.organizations.get("organizationReferenceId");

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

**organizationReferenceId:** `string` — The reference ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">patch</a>(organizationReferenceId, { ...params }) -> MavenAGI.Organization</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable organization fields.
All fields will overwrite the existing value on the organization only if provided.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.organizations.patch("organizationReferenceId", {});

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

**organizationReferenceId:** `string` — The reference ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.OrganizationPatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">delete</a>(organizationReferenceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an organization.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.organizations.delete("organizationReferenceId");

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

**organizationReferenceId:** `string` — The reference ID of the organization.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getConversationTable</a>({ ...params }) -> MavenAGI.ConversationTableResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves structured conversation data across all organizations, formatted as a table, 
allowing users to group, filter, and define specific metrics to display as columns.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.organizations.getConversationTable({
    conversationFilter: {
        languages: ["en", "es"]
    },
    timeGrouping: "DAY",
    fieldGroupings: [{
            field: "Category"
        }],
    columnDefinitions: [{
            header: "count",
            metric: {
                type: "count"
            }
        }, {
            header: "avg_first_response_time",
            metric: {
                type: "average",
                targetField: "FirstResponseTime"
            }
        }, {
            header: "percentile_handle_time",
            metric: {
                type: "percentile",
                targetField: "HandleTime",
                percentile: 25
            }
        }]
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

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">getConversationChart</a>({ ...params }) -> MavenAGI.ChartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches conversation data across all organizations, visualized in a chart format. 
Supported chart types include pie chart, date histogram, and stacked bar charts.

<Tip>
This endpoint requires additional permissions. Contact support to request access.
</Tip>
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
await client.organizations.getConversationChart({
    type: "pieChart",
    conversationFilter: {
        languages: ["en", "es"]
    },
    groupBy: {
        field: "Category"
    },
    metric: {
        type: "count"
    }
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

**requestOptions:** `Organizations.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Segments
<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">search</a>({ ...params }) -> MavenAGI.SegmentsSearchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.search({});

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

**request:** `MavenAGI.SegmentsSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">createOrUpdate</a>({ ...params }) -> MavenAGI.SegmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a segment or create it if it doesn't exist.
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
await client.segments.createOrUpdate({
    segmentId: {
        referenceId: "admin-users"
    },
    name: "Admin users",
    precondition: {
        preconditionType: "group",
        operator: "AND",
        preconditions: [{
                "preconditionType": "user",
                "key": "userKey"
            }, {
                "preconditionType": "user",
                "key": "userKey2"
            }]
    }
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

**request:** `MavenAGI.SegmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">get</a>(segmentReferenceId, { ...params }) -> MavenAGI.SegmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a segment by its supplied ID
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
await client.segments.get("admin-users");

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

**segmentReferenceId:** `string` — The reference ID of the segment to get. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.SegmentGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">patch</a>(segmentReferenceId, { ...params }) -> MavenAGI.SegmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update mutable segment fields

The `appId` field can be provided to update a segment owned by a different app.
All other fields will overwrite the existing value on the segment only if provided.
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
await client.segments.patch("segmentReferenceId", {});

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

**segmentReferenceId:** `string` — The reference ID of the segment to update. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.SegmentPatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">delete</a>(segmentReferenceId, { ...params }) -> MavenAGI.SegmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft delete a segment. Only INACTIVE segments can be deleted.

Deleted segments are excluded from search results but can still be retrieved by ID for archival purposes. Creating a new segment with the same referenceId as a deleted segment will overwrite the deleted segment and restore it to ACTIVE status.

Deleted segments cannot be modified.
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
await client.segments.delete("segmentReferenceId");

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

**segmentReferenceId:** `string` — The reference ID of the segment to delete. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.SegmentDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Segments.RequestOptions` 
    
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
    targetLanguage: "es"
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
<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">search</a>({ ...params }) -> MavenAGI.EventTriggersSearchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.triggers.search({});

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

**request:** `MavenAGI.EventTriggersSearchRequest` 
    
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
        referenceId: "store-in-snowflake"
    },
    description: "Stores conversation data in Snowflake",
    type: "CONVERSATION_CREATED"
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

<details><summary><code>client.triggers.<a href="/src/api/resources/triggers/client/Client.ts">partialUpdate</a>(triggerReferenceId, { ...params }) -> MavenAGI.EventTriggerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an event trigger. Only the enabled field is editable.
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
await client.triggers.partialUpdate("triggerReferenceId", {
    body: {}
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

**triggerReferenceId:** `string` — The reference ID of the event trigger to update. All other entity ID fields are inferred from the request.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MavenAGI.PartialUpdateRequest` 
    
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
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">search</a>({ ...params }) -> MavenAGI.AgentUserSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search across all agent users on an agent.

Agent users are a merged view of the users created by individual apps.
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
await client.users.search({});

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

**request:** `MavenAGI.AgentUserSearchRequest` 
    
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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getAgentUser</a>(agentUserId) -> MavenAGI.AgentUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an agent user by its supplied ID.

Agent users are a merged view of the users created by individual apps.
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
await client.users.getAgentUser("aus_1234567890");

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

**agentUserId:** `string` — The ID of the agent user to get.
    
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

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">createOrUpdate</a>({ ...params }) -> MavenAGI.AppUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an app user or create it if it doesn't exist.
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
        referenceId: "user-0"
    },
    identifiers: [{
            value: "joe@myapp.com",
            type: "EMAIL"
        }],
    data: {
        "name": {
            value: "Joe",
            visibility: "VISIBLE"
        }
    }
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

Get an app user by its supplied ID
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

**userId:** `string` — The reference ID of the app user to get. All other entity ID fields are inferred from the request.
    
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

**userId:** `string` — The reference ID of the app user to delete. All other entity ID fields are inferred from the request.
    
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
