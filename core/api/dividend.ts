import APIInstance from '@/core/api/instance';
import type {
  AnnualDividendModel,
  DividendCalanderModel,
} from '@/@types/models/dividend';
import type { ResponseSuccess } from '@/@types/models/response';

export const dividendAPI = {
  getAnnualDividend: async () => {
    const { data } =
      await APIInstance.get<ResponseSuccess<AnnualDividendModel>>(
        'dividend/annual',
      );
    return data;
  },
  // TODO: 월간 정보를 받아오기 위해서 필요합니다.
  getCalenderDividend: async () => {
    const { data } =
      await APIInstance.get<ResponseSuccess<DividendCalanderModel[]>>(
        'dividend/calendar',
      );
    return data;
  },
};
