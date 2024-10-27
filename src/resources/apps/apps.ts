// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AppsAPI from './apps';
import * as APIKeysAPI from './api-keys';
import { CursorIDPagination, type CursorIDPaginationParams } from '../../pagination';

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
  list(
    query?: AppListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationsCursorIDPagination, Application>;
  list(options?: Core.RequestOptions): Core.PagePromise<ApplicationsCursorIDPagination, Application>;
  list(
    query: AppListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationsCursorIDPagination, Application> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/apps/list', ApplicationsCursorIDPagination, { query, ...options });
  }

  /**
   * Delete an application
   */
  delete(appId: string, options?: Core.RequestOptions): Core.APIPromise<AppDeleteResponse> {
    return this._client.delete(`/apps/${appId}`, options);
  }
}

export class ApplicationsCursorIDPagination extends CursorIDPagination<Application> {}

export interface Application {
  id: string;

  description?: string;

  name?: string;
}

export interface AppCreateResponse {
  applicationId?: string;

  message?: string;
}

export interface AppDeleteResponse {
  message?: string;
}

export interface AppCreateParams {
  description?: string;

  name?: string;
}

export interface AppListParams extends CursorIDPaginationParams {}

export namespace Apps {
  export import Application = AppsAPI.Application;
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import ApplicationsCursorIDPagination = AppsAPI.ApplicationsCursorIDPagination;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppListParams = AppsAPI.AppListParams;
  export import APIKeys = APIKeysAPI.APIKeys;
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeyListResponse = APIKeysAPI.APIKeyListResponse;
  export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
  export import APIKeyListResponsesCursorIDPagination = APIKeysAPI.APIKeyListResponsesCursorIDPagination;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
  export import APIKeyListParams = APIKeysAPI.APIKeyListParams;
}
