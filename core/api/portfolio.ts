import { ExchangeRateModel } from '@/@types/models/exchangeRate';
// import APIInstance from '@/core/api/instance';
import axios from 'axios';
import type { ResponseSuccess } from '@/@types/models/response';

export const portFolioAPI = {
  getExchangeRate: () => {
    return axios.get<ResponseSuccess<ExchangeRateModel>>(
      'http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/exchange-rate',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      },
    );
  },
};
