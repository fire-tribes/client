import { ExchangeRateModel } from '@/@types/models/exchangeRate';
import APIInstance from '@/core/api/instance';
import type { ResponseSuccess } from '@/@types/models/response';

export const portFolioAPI = {
  getExchangeRate: () =>
    APIInstance.get<ResponseSuccess<ExchangeRateModel>>('exchange-rate', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJna3N3bjQ1QG5hdmVyLmNvbSIsInVzZXJJZCI6MywiZW1haWwiOiJna3N3bjQ1QG5hdmVyLmNvbSIsImV4cCI6MTY5NDg4NDcwOH0.5n8j1Bqz3DaT0EJUn2m5HPZTy_yKTr7Iy7X777mtnIkm4p3sJO7F-WlRBK4ZgSubfrmpllTncOcb35PK0auhEA',
      },
    }),
};
