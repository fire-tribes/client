import APIInstance from '@/core/api/instance';
import type {
  AnnualDividendModel,
  DividendCalanderModel,
} from '@/@types/models/dividend';
import type { ResponseSuccess } from '@/@types/models/response';

export const dividendAPI = {
  getAnnualDividend: () => {
    return APIInstance.get<ResponseSuccess<AnnualDividendModel>>(
      'dividend/annual',
    );
  },
  // TODO: 월간 정보를 받아오기 위해서 필요합니다.
  getCalenderDividend: () => {
    return APIInstance.get<ResponseSuccess<DividendCalanderModel[]>>(
      'dividend/calendar',
    );
  },
};
