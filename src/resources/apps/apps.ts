// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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
  list(options?: Core.RequestOptions): Core.APIPromise<AppListResponse> {
    return this._client.get('/apps/list', options);
  }

  /**
   * Delete an application
   */
  delete(appId: string, options?: Core.RequestOptions): Core.APIPromise<AppDeleteResponse> {
    return this._client.delete(`/apps/${appId}`, options);
  }
}

export interface Application {
  id?: string;

  description?: string;

  name?: string;
}

export interface AppCreateResponse {
  applicationId?: string;

  message?: string;
}

export type AppListResponse = Array<Application>;

export interface AppDeleteResponse {
  message?: string;
}

export interface AppCreateParams {
  description?: string;

  name?: string;
}

export namespace Apps {
  export import Application = AppsAPI.Application;
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import APIKeys = APIKeysAPI.APIKeys;
  export import APIKeyCreateResponse = APIKeysAPI.APIKeyCreateResponse;
  export import APIKeyDeleteResponse = APIKeysAPI.APIKeyDeleteResponse;
  export import APIKeyCreateParams = APIKeysAPI.APIKeyCreateParams;
}
