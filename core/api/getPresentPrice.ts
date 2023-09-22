import APIInstance from '@/core/api/instance';

import type { GetPresentPrice } from '@/@types/models/getPresentPrice';
import type { ResponseSuccess } from '@/@types/models/response';

export const getPresentPriceAPI = {
  getPresentPrice: (assetIds: number) => {
    return APIInstance.get<ResponseSuccess<GetPresentPrice>>('asset/price', {
      params: {
        assetIds: assetIds,
      },
    });
  },
};
