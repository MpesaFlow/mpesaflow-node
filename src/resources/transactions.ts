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
  retrieve(
    transactionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionRetrieveResponse> {
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
  accountReference?: string;

  amount?: number;

  date_created?: string;

  mpesaRequestId?: string;

  phoneNumber?: string;

  resultDesc?: string;

  status?: 'pending' | 'completed' | 'failed';

  transactionDesc?: string;

  transactionId?: string;
}

export interface TransactionCreateResponse {
  message?: string;

  transactionId?: string;
}

export interface TransactionRetrieveResponse {
  transaction?: Transaction;
}

export type TransactionListResponse = Array<Transaction>;

export interface TransactionCreateParams {
  accountReference?: string;

  amount?: number;

  mpesaRequestId?: string;

  phoneNumber?: string;

  transactionDesc?: string;
}

export interface TransactionListParams {
  appId: string;
}

export namespace Transactions {
  export import Transaction = TransactionsAPI.Transaction;
  export import TransactionCreateResponse = TransactionsAPI.TransactionCreateResponse;
  export import TransactionRetrieveResponse = TransactionsAPI.TransactionRetrieveResponse;
  export import TransactionListResponse = TransactionsAPI.TransactionListResponse;
  export import TransactionCreateParams = TransactionsAPI.TransactionCreateParams;
  export import TransactionListParams = TransactionsAPI.TransactionListParams;
}