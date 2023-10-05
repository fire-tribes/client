import APIInstance from '@/core/api/instance';

import type { GetCurrentPrice } from '@/@types/models/getCurrentPrice';
import type { GetSearchedResults } from '@/@types/models/getSearchedResults';
import type { ResponseSuccess } from '@/@types/models/response';

export const assetAPI = {
  getCurrentPrice: (assetIds: number) => {
    return APIInstance.get<ResponseSuccess<[GetCurrentPrice] | []>>(
      'asset/price',
      {
        params: {
          assetIds: assetIds,
        },
      },
    );
  },
  getSearchedResults: (word: string, pageIndex: number) => {
    return APIInstance.get<ResponseSuccess<GetSearchedResults>>('asset/find', {
      params: {
        category: 'STOCK',
        word: word,
        pageIndex: pageIndex,
        pageSize: 10,
      },
    });
  },
};
