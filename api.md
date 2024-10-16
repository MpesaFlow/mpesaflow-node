# Mpesaflow

Types:

- <code><a href="./src/resources/top-level.ts">HealthResponse</a></code>

Methods:

- <code title="get /health">client.<a href="./src/index.ts">health</a>() -> string</code>

# Apps

Types:

- <code><a href="./src/resources/apps/apps.ts">Application</a></code>
- <code><a href="./src/resources/apps/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/apps/apps.ts">AppDeleteResponse</a></code>

Methods:

- <code title="post /apps/create">client.apps.<a href="./src/resources/apps/apps.ts">create</a>({ ...params }) -> AppCreateResponse</code>
- <code title="get /apps/list">client.apps.<a href="./src/resources/apps/apps.ts">list</a>({ ...params }) -> ApplicationsCursorIDPagination</code>
- <code title="delete /apps/{appId}">client.apps.<a href="./src/resources/apps/apps.ts">delete</a>(appId) -> AppDeleteResponse</code>

## APIKeys

Types:

- <code><a href="./src/resources/apps/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/apps/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/apps/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="post /apps/{appId}/api-keys/create">client.apps.apiKeys.<a href="./src/resources/apps/api-keys.ts">create</a>(appId, { ...params }) -> APIKeyCreateResponse</code>
- <code title="get /apps/{appId}/api-keys/list">client.apps.apiKeys.<a href="./src/resources/apps/api-keys.ts">list</a>(appId, { ...params }) -> APIKeyListResponsesCursorIDPagination</code>
- <code title="delete /apps/{appId}/api-keys/{apiKeyId}">client.apps.apiKeys.<a href="./src/resources/apps/api-keys.ts">delete</a>(appId, apiKeyId) -> APIKeyDeleteResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Transaction</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionCreateResponse</a></code>

Methods:

- <code title="post /transactions/create">client.transactions.<a href="./src/resources/transactions.ts">create</a>({ ...params }) -> TransactionCreateResponse</code>
- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(transactionId) -> Transaction</code>
- <code title="get /transactions/list">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionsCursorIDPagination</code>
