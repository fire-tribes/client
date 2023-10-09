import { AnnualDividendModel } from '@/@types/models/dividend';
import { ResponseSuccess } from '@/@types/models/response';
import { dividendAPI } from '@/core/api/dividend';

import { useControlMode } from '@/hook/useControlMode';
import { useControlTax } from '@/hook/useControlTax';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { useFormatPrice } from '@/hook/useFormatPrice';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useAnnualDividendQuery = () => {
  const queryClient = useQueryClient();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();

  return useQuery({
    queryKey: queryKeys.annualDividend(),
    queryFn: dividendAPI.getAnnualDividend,
    staleTime: 1000 * 5,
    onSuccess: () => {
      queryClient.invalidateQueries(
        queryKeys.annualDividend(
          modeData.isSimple,
          exchangeRate,
          taxData.isTax,
        ),
      );

      queryClient.invalidateQueries(
        queryKeys.annualDividend(null, exchangeRate, taxData.isTax),
      );
    },
  });
};

export const useAnnualDividendExchangeQuery = () => {
  const queryClient = useQueryClient();
  const { exchangeRate } = useExchangeRate();
  const { taxData } = useControlTax();

  const { divideByTax, getPrice, getPriceByTax } = useFormatPrice();

  const getQueryFunction = () => {
    const annualDividendFullData:
      | ResponseSuccess<AnnualDividendModel>
      | undefined = queryClient.getQueryData(queryKeys.annualDividend());

    const annualDividendData = annualDividendFullData?.data;

    if (annualDividendData && exchangeRate) {
      const newMonthlyDividends = Object.entries(
        annualDividendData.monthlyDividends,
      ).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: taxData.isTax
            ? divideByTax(value * exchangeRate)
            : value * exchangeRate,
        }),
        {},
      );

      return {
        ...annualDividendData,
        dividendChange: annualDividendData.dividendChange,
        monthlyDividends: newMonthlyDividends,
        annualDividend: getPriceByTax(
          annualDividendData.annualDividend * exchangeRate,
        ),
        paidTax: getPrice(annualDividendData.paidTax * exchangeRate),
        unPaidTax: getPrice(annualDividendData.unPaidTax * exchangeRate),
        thisMonthDividend: getPriceByTax(
          annualDividendData.thisMonthDividend * exchangeRate,
        ),
      };
    }
  };

  return useQuery(
    queryKeys.annualDividend(null, exchangeRate, taxData.isTax),
    getQueryFunction,
  );
};

export const useAnnualDividendExchangeWithSimpleQuery = () => {
  const queryClient = useQueryClient();
  const { exchangeRate } = useExchangeRate();
  const { modeData } = useControlMode();
  const { taxData } = useControlTax();
  const { divideByTax, getPriceBySimple, getPriceByTaxWithSimple } =
    useFormatPrice();

  const getQueryFunction = () => {
    const annualDividendFullData:
      | ResponseSuccess<AnnualDividendModel>
      | undefined = queryClient.getQueryData(queryKeys.annualDividend());

    const annualDividendData = annualDividendFullData?.data;

    if (annualDividendData && exchangeRate) {
      const newMonthlyDividends = Object.entries(
        annualDividendData.monthlyDividends,
      ).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: taxData.isTax
            ? divideByTax(value * exchangeRate)
            : value * exchangeRate,
        }),
        {},
      );

      return {
        ...annualDividendData,
        dividendChange: annualDividendData.dividendChange,
        monthlyDividends: newMonthlyDividends,
        annualDividend: getPriceByTaxWithSimple(
          annualDividendData.annualDividend * exchangeRate,
        ),
        paidTax: getPriceBySimple(annualDividendData.paidTax * exchangeRate),
        unPaidTax: getPriceBySimple(
          annualDividendData.unPaidTax * exchangeRate,
        ),
        thisMonthDividend: getPriceByTaxWithSimple(
          annualDividendData.thisMonthDividend * exchangeRate,
        ),
      };
    }
  };

  return useQuery(
    queryKeys.annualDividend(modeData.isSimple, exchangeRate, taxData.isTax),
    getQueryFunction,
  );
};
