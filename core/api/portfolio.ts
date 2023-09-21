import APIInstance from '@/core/api/instance';
import type { ExchangeRateModel } from '@/@types/models/exchangeRate';
import type { MyPortfolioModel } from '@/@types/models/portfolio';
import type { ResponseSuccess } from '@/@types/models/response';

export const portFolioAPI = {
  getExchangeRate: () => {
    return APIInstance.get<ResponseSuccess<ExchangeRateModel>>(
      'exchange-rate',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      },
    );
  },
  getMyPortFolio: () => {
    return APIInstance.get<ResponseSuccess<MyPortfolioModel>>(
      'portfolio/list',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      },
    );
  },
};
