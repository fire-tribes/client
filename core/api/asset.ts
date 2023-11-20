import APIInstance from '@/core/api/instance';

import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import type { GetCurrentPrice } from '@/@types/models/getCurrentPrice';
import type { GetSearchedResults } from '@/@types/models/getSearchedResults';
import type { ResponseSuccess } from '@/@types/models/response';

export const assetAPI = {
  getCurrentPrice: (assetId: number, currencyType: ExchangeRateSymbol) => {
    return APIInstance.post<ResponseSuccess<GetCurrentPrice[]>>('asset/price', [
      {
        assetId: assetId,
        currencyType: currencyType,
      },
    ]);
  },
  getSearchedResults: (word: string, pageIndex: number) => {
    // return APIInstance.get<ResponseSuccess<GetSearchedResults>>('asset/find', {
    return APIInstance.get<GetSearchedResults>('asset/find', {
      params: {
        category: 'STOCK',
        word: word,
        pageIndex: pageIndex,
        pageSize: 10,
      },
    });
  },
};
