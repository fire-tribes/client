import { DividendCalanderModel } from '@/@types/models/dividend';
import { ResponseSuccess } from '@/@types/models/response';
import { getShortCurrencyKR } from '@/components/Chart/utils';
import { dividendAPI } from '@/core/api/dividend';
import { useControlMode } from '@/hook/useControlMode';
import { useControlTax } from '@/hook/useControlTax';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useMonthlyCalanderDividendQuery = () => {
  const queryClient = useQueryClient();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();

  return useQuery(
    queryKeys.monthlyCalanderDividend(),
    () => dividendAPI.getCalenderDividend(),
    {
      onSuccess: () => {
        console.log(
          queryKeys.monthlyCalanderDividend(
            modeData.isSimple,
            exchangeRate,
            taxData.isTax,
          ),
        );
        queryClient.invalidateQueries(
          queryKeys.monthlyCalanderDividend(
            modeData.isSimple,
            exchangeRate,
            taxData.isTax,
          ),
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
  const { taxData } = useControlTax();

  const divideByTax = (price: number) => Math.floor(price * (85 / 100));
  const divideSimple = (price: number) => getShortCurrencyKR(Math.floor(price));

  const getPriceByTaxWithSimple = (price: number) => {
    let newPrice: number = Math.floor(price);

    if (taxData.isTax) {
      newPrice = divideByTax(price);
    }

    if (modeData.isSimple) {
      return divideSimple(newPrice) + '원';
    }

    return newPrice.toLocaleString('ko-kr') + '원';
  };

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
          expectedDividends: getPriceByTaxWithSimple(
            data.expectedDividends * exchangeRate,
          ),
        })),
      };
    }

    return monthlyCalanderDividendData;
  };

  return useQuery(
    queryKeys.monthlyCalanderDividend(
      modeData.isSimple,
      exchangeRate,
      taxData.isTax,
    ),
    getQueryFunction,
  );
};
