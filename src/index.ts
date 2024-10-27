// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

const environments = {
  production: 'https://api.mpesaflow.com',
  sandbox: 'https://sandbox-api.mpesaflow.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * API key for application access
   */
  appAPIKey?: string | null | undefined;

  /**
   * API key for root access
   */
  rootAPIKey?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.mpesaflow.com`
   * - `sandbox` corresponds to `https://sandbox-api.mpesaflow.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MPESAFLOW_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Mpesaflow API.
 */
export class Mpesaflow extends Core.APIClient {
  appAPIKey: string | null;
  rootAPIKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Mpesaflow API.
   *
   * @param {string | null | undefined} [opts.appAPIKey=process.env['APP_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.rootAPIKey=process.env['ROOT_API_KEY'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['MPESAFLOW_BASE_URL'] ?? https://api.mpesaflow.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('MPESAFLOW_BASE_URL'),
    appAPIKey = Core.readEnv('APP_API_KEY') ?? null,
    rootAPIKey = Core.readEnv('ROOT_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      appAPIKey,
      rootAPIKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.MpesaflowError(
        'Ambiguous URL; The `baseURL` option (or MPESAFLOW_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.appAPIKey = appAPIKey;
    this.rootAPIKey = rootAPIKey;
  }

  apps: API.Apps = new API.Apps(this);
  transactions: API.Transactions = new API.Transactions(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.appAPIKey && headers['x-app-api-key']) {
      return;
    }
    if (customHeaders['x-app-api-key'] === null) {
      return;
    }

    if (this.rootAPIKey && headers['x-root-api-key']) {
      return;
    }
    if (customHeaders['x-root-api-key'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either appAPIKey or rootAPIKey to be set. Or for one of the "X-App-Api-Key" or "X-Root-Api-Key" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const appAPIKeyAuth = this.appAPIKeyAuth(opts);
    const rootAPIKeyAuth = this.rootAPIKeyAuth(opts);

    if (appAPIKeyAuth != null && !Core.isEmptyObj(appAPIKeyAuth)) {
      return appAPIKeyAuth;
    }

    if (rootAPIKeyAuth != null && !Core.isEmptyObj(rootAPIKeyAuth)) {
      return rootAPIKeyAuth;
    }
    return {};
  }

  protected appAPIKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.appAPIKey == null) {
      return {};
    }
    return { 'X-App-Api-Key': this.appAPIKey };
  }

  protected rootAPIKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.rootAPIKey == null) {
      return {};
    }
    return { 'X-Root-Api-Key': this.rootAPIKey };
  }

  static Mpesaflow = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MpesaflowError = Errors.MpesaflowError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  MpesaflowError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Mpesaflow {
  export import RequestOptions = Core.RequestOptions;

  export import CursorIDPagination = Pagination.CursorIDPagination;
  export import CursorIDPaginationParams = Pagination.CursorIDPaginationParams;
  export import CursorIDPaginationResponse = Pagination.CursorIDPaginationResponse;

  export import Apps = API.Apps;
  export import Application = API.Application;
  export import AppCreateResponse = API.AppCreateResponse;
  export import AppListResponse = API.AppListResponse;
  export import AppDeleteResponse = API.AppDeleteResponse;
  export import AppCreateParams = API.AppCreateParams;
  export import AppListParams = API.AppListParams;

  export import Transactions = API.Transactions;
  export import Transaction = API.Transaction;
  export import TransactionCreateResponse = API.TransactionCreateResponse;
  export import TransactionListResponse = API.TransactionListResponse;
  export import TransactionCreateParams = API.TransactionCreateParams;
  export import TransactionListParams = API.TransactionListParams;
}

export default Mpesaflow;
