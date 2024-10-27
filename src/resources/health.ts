// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HealthAPI from './health';

export class Health extends APIResource {
  /**
   * Check server health
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<HealthRetrieveResponse> {
    return this._client.get('/health', options);
  }
}

export interface HealthRetrieveResponse {
  status?: 'healthy';
}

export namespace Health {
  export import HealthRetrieveResponse = HealthAPI.HealthRetrieveResponse;
}
