import APIInstance from '@/core/api/instance';

import type { GetPortfolio } from '@/@types/models/getPortfolio';
import type { ResponseSuccess } from '@/@types/models/response';

export const getPortfolioAPI = {
  getPortfolio: () => {
    return APIInstance.get<ResponseSuccess<GetPortfolio>>('portfolio/list');
  },
};
