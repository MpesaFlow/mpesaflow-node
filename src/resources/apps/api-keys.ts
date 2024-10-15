// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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

export interface APIKeyDeleteResponse {
  message?: string;
}

export interface APIKeyCreateParams {
  keyName?: string;
}

export namespace APIKeys {
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
}
