import APIInstance from '@/core/api/instance';

import type { YearDividendModel } from '@/@types/models/dividend';
import type { ResponseSuccess } from '@/@types/models/response';

export const dividendAPI = {
  getAnnualDividend: () => {
    return APIInstance.get<ResponseSuccess<YearDividendModel>>(
      'dividend/annual',
    );
  },
  // getCalenderDividend: () => {
  //   return APIInstance.get<ResponseSuccess<>>('dividend/calender');
  // },
};
