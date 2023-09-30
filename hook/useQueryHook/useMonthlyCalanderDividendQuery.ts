import { dividendAPI } from '@/core/api/dividend';
import { useControlMode } from '@/hook/useControlMode';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useMonthlyCalanderDividendQuery = () => {
  const { data } = useQuery(
    queryKeys.monthlyCalanderDividend(),
    dividendAPI.getCalenderDividend,
  );
  return { ...data?.data };
};

export const useMonthlyCalanderDividendExchangeQuery = () => {
  const { data: datas } = useMonthlyCalanderDividendQuery();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();

  return useQuery(
    queryKeys.monthlyCalanderDividend(modeData.isSimple, exchangeRate),
    () => {
      if (datas?.length && exchangeRate) {
        return datas.map((data) => ({
          ...data,
          예상배당금: data.예상배당금 * exchangeRate,
        }));
      }

      return datas;
    },
  );
};
