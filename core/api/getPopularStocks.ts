import APIInstance from '@/core/api/instance';

import type { GetPopularStocks } from '@/@types/models/popular';
import type { ResponseSuccess } from '@/@types/models/response';

export const getPopularStocksAPI = {
  getPopularStocks: () => {
    return APIInstance.get<ResponseSuccess<GetPopularStocks>>(
      'popular-stock/list',
      {
        params: {
          size: 10,
        },
      },
    );
  },
  // getCalenderDividend: () => {
  //   return APIInstance.get<ResponseSuccess<>>('dividend/calender');
  // },
};
