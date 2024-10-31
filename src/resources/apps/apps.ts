// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AppsAPI from './apps';
import * as APIKeysAPI from './api-keys';

export class Apps extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);

  /**
   * Create a new application
   */
  create(body: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<AppCreateResponse> {
    return this._client.post('/apps/create', { body, ...options });
  }

  /**
   * List all applications
   */
  list(query?: AppListParams, options?: Core.RequestOptions): Core.APIPromise<AppListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AppListResponse>;
  list(
    query: AppListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/apps/list', { query, ...options });
  }

  /**
   * Delete an application
   */
  delete(appId: string, options?: Core.RequestOptions): Core.APIPromise<AppDeleteResponse> {
    return this._client.delete(`/apps/${appId}`, options);
  }
}

export interface AppCreateResponse {
  applicationId?: string;

  message?: string;
}

export interface AppListResponse {
  data?: Array<AppListResponse.Data>;
}

export namespace AppListResponse {
  export interface Data {
    id: string;

    name: string;

    description?: string;
  }
}

export interface AppDeleteResponse {
  message?: string;
}

export interface AppCreateParams {
  description?: string;

  name?: string;
}

export interface AppListParams {
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

export namespace Apps {
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppListParams = AppsAPI.AppListParams;
  export import APIKeys = APIKeysAPI.APIKeys;
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeyListResponse = APIKeysAPI.APIKeyListResponse;
  export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
  export import APIKeyListParams = APIKeysAPI.APIKeyListParams;
}
