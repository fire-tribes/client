import APIInstance from '@/core/api/instance';

import type { AddStocksAtPortfolio } from '@/@types/models/addStocksAtPortfolio';
import type { ResponseSuccess } from '@/@types/models/response';

export const addStocksAtPortfolioAPI = {
  addStocksAtPortfolio: (
    portfolioId: number,
    assets: Array<{
      assetId: number;
      price: number;
      count: number;
      currencyType: string;
    }>,
  ) => {
    return APIInstance.post<ResponseSuccess<AddStocksAtPortfolio[]>>(
      `portfolio/asset/add`,
      {
        portfolioId: portfolioId,
        assets: assets,
      },
    );
  },
};
