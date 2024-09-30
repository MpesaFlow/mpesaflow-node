// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TransactionsAPI from './transactions';

export class Transactions extends APIResource {
  /**
   * Get transaction status
   */
  retrieveStatus(
    transactionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransactionRetrieveStatusResponse> {
    return this._client.get(`/transaction-status/${transactionId}`, options);
  }
}

export interface TransactionRetrieveStatusResponse {
  /**
   * Detailed description of the transaction result
   */
  resultDesc?: string;

  /**
   * The current status of the transaction
   */
  status?: 'pending' | 'completed' | 'failed';

  /**
   * Unique identifier for the transaction
   */
  transactionId?: string;
}

export namespace Transactions {
  export import TransactionRetrieveStatusResponse = TransactionsAPI.TransactionRetrieveStatusResponse;
}
