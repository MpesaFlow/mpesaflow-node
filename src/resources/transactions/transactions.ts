// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TransactionStatusAPI from './transaction-status';

export class Transactions extends APIResource {
  transactionStatus: TransactionStatusAPI.TransactionStatus = new TransactionStatusAPI.TransactionStatus(
    this._client,
  );
}

export namespace Transactions {
  export import TransactionStatus = TransactionStatusAPI.TransactionStatus;
}
