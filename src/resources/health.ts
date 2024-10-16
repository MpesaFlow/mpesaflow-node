// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HealthAPI from './health';

export class Health extends APIResource {
  /**
   * Health check endpoint
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/health', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HealthRetrieveResponse = string;

export namespace Health {
  export import HealthRetrieveResponse = HealthAPI.HealthRetrieveResponse;
}
