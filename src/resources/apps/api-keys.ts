// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as APIKeysAPI from './api-keys';

export class APIKeys extends APIResource {
  /**
   * Create a new API key for an application
   */
  create(
    appId: string,
    body: APIKeyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyCreateResponse> {
    return this._client.post(`/apps/${appId}/api-keys/create`, { body, ...options });
  }

  /**
   * List all API keys for an application
   */
  list(
    appId: string,
    query?: APIKeyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyListResponse>;
  list(appId: string, options?: Core.RequestOptions): Core.APIPromise<APIKeyListResponse>;
  list(
    appId: string,
    query: APIKeyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyListResponse> {
    if (isRequestOptions(query)) {
      return this.list(appId, {}, query);
    }
    return this._client.get(`/apps/${appId}/api-keys/list`, { query, ...options });
  }

  /**
   * Delete an API key
   */
  delete(
    appId: string,
    apiKeyId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIKeyDeleteResponse> {
    return this._client.delete(`/apps/${appId}/api-keys/${apiKeyId}`, options);
  }
}

export interface APIKeyCreateResponse {
  apiKeyId?: string;

  message?: string;
}

export interface APIKeyListResponse {
  data?: Array<APIKeyListResponse.Data>;
}

export namespace APIKeyListResponse {
  export interface Data {
    id?: string;

    applicationId?: string;

    keyName?: string;
  }
}

export interface APIKeyDeleteResponse {
  message?: string;
}

export interface APIKeyCreateParams {
  keyName?: string;
}

export interface APIKeyListParams {
  /**
   * Cursor for the previous page
   */
  ending_before?: string;

  /**
   * Number of items to return
   */
  limit?: number;

  /**
   * Cursor for the next page
   */
  starting_after?: string;
}

export namespace APIKeys {
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeyListResponse = APIKeysAPI.APIKeyListResponse;
  export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
  export import APIKeyListParams = APIKeysAPI.APIKeyListParams;
}
