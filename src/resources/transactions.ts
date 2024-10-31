// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TransactionsAPI from './transactions';

export class Transactions extends APIResource {
  /**
   * Create a new transaction
   */
  create(
    body: TransactionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionCreateResponse> {
    return this._client.post('/transactions/create', { body, ...options });
  }

  /**
   * Get transaction details
   */
  retrieve(transactionId: string, options?: Core.RequestOptions): Core.APIPromise<Transaction> {
    return this._client.get(`/transactions/${transactionId}`, options);
  }

  /**
   * List all transactions
   */
  list(
    query: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionListResponse> {
    return this._client.get('/transactions/list', { query, ...options });
  }
}

export interface Transaction {
  id: string;

  accountReference: string;

  amount: number;

  phoneNumber: string;

  transactionDesc: string;

  transactionId: string;

  date_created?: string;

  resultDesc?: string;

  status?: 'pending' | 'completed' | 'failed';
}

export interface TransactionCreateResponse {
  message?: string;

  transactionId?: string;
}

export interface TransactionListResponse {
  data?: Array<Transaction>;
}

export interface TransactionCreateParams {
  accountReference?: string;

  amount?: number;

  phoneNumber?: string;

  transactionDesc?: string;
}

export interface TransactionListParams {
  appId: string;

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

export namespace Transactions {
  export import Transaction = TransactionsAPI.Transaction;
  export import TransactionCreateResponse = TransactionsAPI.TransactionCreateResponse;
  export import TransactionListResponse = TransactionsAPI.TransactionListResponse;
  export import TransactionCreateParams = TransactionsAPI.TransactionCreateParams;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
}
