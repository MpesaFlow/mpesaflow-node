// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TransactionStatusAPI from './transaction-status';

export class TransactionStatus extends APIResource {
  /**
   * Get transaction status
   */
  retrieve(transactionId: string, options?: Core.RequestOptions): Core.APIPromise<TransactionStatus> {
    return this._client.get(`/transaction-status/${transactionId}`, options);
  }
}

export interface TransactionStatus {
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

export namespace TransactionStatus {
  export import TransactionStatus = TransactionStatusAPI.TransactionStatus;
}
