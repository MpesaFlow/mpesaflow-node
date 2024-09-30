// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PaymentsAPI from './payments';

export class Payments extends APIResource {
  /**
   * Initiate a payment
   */
  create(body: PaymentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Payment> {
    return this._client.post('/paybill', { body, ...options });
  }
}

export interface Payment {
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

export interface PaymentCreateParams {
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
  export import Payment = PaymentsAPI.Payment;
  export import PaymentCreateParams = PaymentsAPI.PaymentCreateParams;
}
