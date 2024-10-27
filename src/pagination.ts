// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface CursorIDPaginationResponse<Item> {
  data: Array<Item>;
}

export interface CursorIDPaginationParams {
  starting_after?: string;

  ending_before?: string;

  limit?: number;
}

export class CursorIDPagination<Item extends { id: string }>
  extends AbstractPage<Item>
  implements CursorIDPaginationResponse<Item>
{
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: CursorIDPaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CursorIDPaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const data = this.getPaginatedItems();
    if (!data.length) {
      return null;
    }

    const isForwards = !(
      typeof this.options.query === 'object' && 'ending_before' in (this.options.query || {})
    );
    if (isForwards) {
      const id = data[data.length - 1]?.id;
      if (!id) {
        return null;
      }

      return { params: { starting_after: id } };
    }

    const id = data[0]?.id;
    if (!id) {
      return null;
    }

    return { params: { ending_before: id } };
  }
}
