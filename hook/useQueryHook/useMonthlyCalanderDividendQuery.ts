import { DividendCalanderModel } from '@/@types/models/dividend';
import { ResponseSuccess } from '@/@types/models/response';
// import { getShortCurrencyKR } from '@/components/Chart/utils';
import { dividendAPI } from '@/core/api/dividend';
import { useControlMode } from '@/hook/useControlMode';
import { useControlTax } from '@/hook/useControlTax';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { useFormatPrice } from '@/hook/useFormatPrice';
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

export const useMonthlyCalanderDividendKRQuery = () => {
  const queryClient = useQueryClient();
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();

  return useQuery(
    queryKeys.monthlyCalanderDividendKR(),
    () => dividendAPI.getCalenderDividend(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          queryKeys.monthlyCalanderDividendKR(modeData.isSimple, taxData.isTax),
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

  const { getPriceByTaxWithSimple } = useFormatPrice();

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

export const useMonthlyCalanderDividendKRWithSimpleQuery = () => {
  useMonthlyCalanderDividendQuery();
  const queryClient = useQueryClient();
  // const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();

  const { getPriceByTaxWithSimple } = useFormatPrice();

  const getQueryFunction = () => {
    const monthlyCalanderDividendData:
      | ResponseSuccess<DividendCalanderModel[]>
      | undefined = queryClient.getQueryData(
      queryKeys.monthlyCalanderDividend(),
    );

    const calanderDividendDatas = monthlyCalanderDividendData?.data;

    if (calanderDividendDatas?.length) {
      return {
        ...monthlyCalanderDividendData,
        data: calanderDividendDatas?.map((data) => ({
          ...data,
          expectedDividends: getPriceByTaxWithSimple(data.expectedDividends),
        })),
      };
    }

    return monthlyCalanderDividendData;
  };

  return useQuery(
    queryKeys.monthlyCalanderDividendKR(modeData.isSimple, taxData.isTax),
    getQueryFunction,
  );
};
