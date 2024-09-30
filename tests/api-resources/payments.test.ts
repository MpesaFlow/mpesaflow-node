// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mpesaflow from 'mpesaflow';
import { Response } from 'node-fetch';

const client = new Mpesaflow({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource payments', () => {
  test('paybill: only required params', async () => {
    const responsePromise = client.payments.paybill({
      accountReference: 'accountReference',
      amount: 0,
      phoneNumber: 'phoneNumber',
      transactionDesc: 'transactionDesc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('paybill: required and optional params', async () => {
    const response = await client.payments.paybill({
      accountReference: 'accountReference',
      amount: 0,
      phoneNumber: 'phoneNumber',
      transactionDesc: 'transactionDesc',
    });
  });
});
