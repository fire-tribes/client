import APIInstance from '@/core/api/instance';

import type { MakePortfolio } from '@/@types/models/makePortfolio';
import type { ResponseSuccess } from '@/@types/models/response';

export const makePortfolioAPI = {
  makePortfolio: () => {
    return APIInstance.post<ResponseSuccess<MakePortfolio>>('portfolio/create');
  },
};
