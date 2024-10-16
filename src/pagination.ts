// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface MyCursorIDPageResponse<Item> {
  my_data: Array<Item>;
}

export interface MyCursorIDPageParams {
  starting_after?: string;

  ending_before?: string;

  limit?: number;
}

export class MyCursorIDPage<Item extends { id: string }>
  extends AbstractPage<Item>
  implements MyCursorIDPageResponse<Item>
{
  my_data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: MyCursorIDPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.my_data = body.my_data || [];
  }

  getPaginatedItems(): Item[] {
    return this.my_data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<MyCursorIDPageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const myData = this.getPaginatedItems();
    if (!myData.length) {
      return null;
    }

    const isForwards = !(
      typeof this.options.query === 'object' && 'ending_before' in (this.options.query || {})
    );
    if (isForwards) {
      const id = myData[myData.length - 1]?.id;
      if (!id) {
        return null;
      }

      return { params: { starting_after: id } };
    }

    const id = myData[0]?.id;
    if (!id) {
      return null;
    }

    return { params: { ending_before: id } };
  }
}
