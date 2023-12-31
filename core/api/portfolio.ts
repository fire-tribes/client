import APIInstance from '@/core/api/instance';

import type { GetAssetDetail } from '@/@types/models/getAssetDetail';
import type { AddStocksAtPortfolio } from '@/@types/models/addStocksAtPortfolio';
import type { ExchangeRateModel } from '@/@types/models/exchangeRate';
import type { MakePortfolio } from '@/@types/models/makePortfolio';
import type { MyPortfolioModel } from '@/@types/models/portfolio';
import type { UpdatePortfolio } from '@/@types/models/updatePortfolio';
import type { DeletePortfolio } from '@/@types/models/deletePortfolio';
import type { ResponseSuccess } from '@/@types/models/response';

export const portfolioAPI = {
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
  getExchangeRate: () => {
    return APIInstance.get<ResponseSuccess<ExchangeRateModel>>('exchange-rate');
  },
  makePortfolio: () => {
    return APIInstance.post<ResponseSuccess<MakePortfolio>>('portfolio/create');
  },
  getMyPortFolio: () => {
    return APIInstance.get<ResponseSuccess<MyPortfolioModel>>('portfolio/list');
  },
  getAssetDetail: (portfolioId: number, portfolioAssetId: number) => {
    return APIInstance.get<ResponseSuccess<GetAssetDetail>>(
      `portfolio/asset?portfolioId=${portfolioId}&portfolioAssetId=${portfolioAssetId}`,
    );
  },
  updatePortfolio: (
    portfolioId: number,
    assets: Array<{
      portfolioAssetId: number;
      price: number;
      count: number;
      currencyType: string;
    }>,
  ) => {
    return APIInstance.post<ResponseSuccess<UpdatePortfolio>>(
      'portfolio/asset/update',
      {
        portfolioId: portfolioId,
        assets: assets,
      },
    );
  },
  deletePortfolio: (portfolioId: number) => {
    return APIInstance.delete<ResponseSuccess<DeletePortfolio>>(
      `portfolio?portfolioId=${portfolioId}`,
    );
  },
};

// 추가;
// 삭제;
// 생성;
// 수정;
// 자산추가;
