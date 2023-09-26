import APIInstance from '@/core/api/instance';

import type { GetCurrentPrice } from '@/@types/models/getCurrentPrice';
import type { ResponseSuccess } from '@/@types/models/response';

export const getCurrentPriceAPI = {
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
};
