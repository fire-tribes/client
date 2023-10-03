import { DividendCalanderModel } from '@/@types/models/dividend';
import { ResponseSuccess } from '@/@types/models/response';
import { getShortCurrencyKR } from '@/components/Chart/utils';
import { dividendAPI } from '@/core/api/dividend';
import { useControlMode } from '@/hook/useControlMode';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useMonthlyCalanderDividendQuery = () => {
  const queryClient = useQueryClient();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();

  return useQuery(
    queryKeys.monthlyCalanderDividend(),
    () => dividendAPI.getCalenderDividend(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          queryKeys.monthlyCalanderDividend(modeData.isSimple, exchangeRate),
        );
      },
    },
  );
};

export const useMonthlyCalanderDividendExchangeQuery = () => {
  useMonthlyCalanderDividendQuery();
  const queryClient = useQueryClient();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();

  const getQueryFunction = () => {
    const monthlyCalanderDividendData:
      | ResponseSuccess<DividendCalanderModel[]>
      | undefined = queryClient.getQueryData(
      queryKeys.monthlyCalanderDividend(),
    );

    const calanderDividendDatas = monthlyCalanderDividendData?.data;

    if (calanderDividendDatas?.length && exchangeRate) {
      return {
        ...monthlyCalanderDividendData,
        data: calanderDividendDatas?.map((data) => ({
          ...data,
          expectedDividends: modeData.isSimple
            ? getShortCurrencyKR(
                Math.floor(data.expectedDividends * exchangeRate),
              ) + '원'
            : Math.floor(data.expectedDividends * exchangeRate).toLocaleString(
                'ko-kr',
              ) + '원',
        })),
      };
    }

    return monthlyCalanderDividendData;
  };

  return useQuery(
    queryKeys.monthlyCalanderDividend(modeData.isSimple, exchangeRate),
    getQueryFunction,
  );
};
