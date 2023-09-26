import APIInstance from '@/core/api/instance';

import type { GetPopularStocks } from '@/@types/models/getPopularStocks';
import type { ResponseSuccess } from '@/@types/models/response';

export const popularStocksAPI = {
  getPopularStocks: () => {
    return APIInstance.get<ResponseSuccess<GetPopularStocks[]>>(
      'popular-stock/list',
      {
        params: {
          size: 10,
        },
      },
    );
  },
};
