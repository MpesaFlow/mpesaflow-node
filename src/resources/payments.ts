// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PaymentsAPI from './payments';

export class Payments extends APIResource {
  /**
   * Initiate a payment
   */
  paybill(
    body: PaymentPaybillParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentPaybillResponse> {
    return this._client.post('/paybill', { body, ...options });
  }
}

export interface PaymentPaybillResponse {
  /**
   * Additional information about the transaction
   */
  message?: string;

  /**
   * M-Pesa request identifier
   */
  mpesaRequestId?: string;

  /**
   * The status of the transaction
   */
  status?: 'pending' | 'completed' | 'failed';

  /**
   * Unique identifier for the transaction
   */
  transactionId?: string;
}

export interface PaymentPaybillParams {
  /**
   * A reference for the transaction
   */
  accountReference: string;

  /**
   * The amount to be paid
   */
  amount: number;

  /**
   * The phone number of the payer
   */
  phoneNumber: string;

  /**
   * A description of the transaction
   */
  transactionDesc: string;
}

export namespace Payments {
  export import PaymentPaybillResponse = PaymentsAPI.PaymentPaybillResponse;
  export import PaymentPaybillParams = PaymentsAPI.PaymentPaybillParams;
}
