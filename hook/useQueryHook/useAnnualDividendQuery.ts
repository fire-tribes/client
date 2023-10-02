import { getShortCurrencyKR } from '@/components/Chart/utils';
import { dividendAPI } from '@/core/api/dividend';
import { useControlMode } from '@/hook/useControlMode';
import { useExchangeRate } from '@/hook/useExchangeRate';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useAnnualDividendQuery = () => {
  return useQuery({
    queryKey: queryKeys.annualDividend(),
    queryFn: dividendAPI.getAnnualDividend,
    staleTime: 1000 * 5,
  });
};

export const useAnnualDividendExchangeQuery = () => {
  const { exchangeRate } = useExchangeRate();
  const { data } = useAnnualDividendQuery();

  const getQueryFunction = () => {
    const annualDividendData = data?.data.data;
    if (annualDividendData && exchangeRate) {
      const newMonthlyDividends = Object.entries(
        annualDividendData.monthlyDividends,
      ).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value * exchangeRate,
        }),
        {},
      );

      return {
        ...annualDividendData,
        dividendChange: annualDividendData.dividendChange,
        monthlyDividends: newMonthlyDividends,
        annualDividend:
          Math.floor(
            annualDividendData.annualDividend * exchangeRate,
          ).toLocaleString('ko-kr') + '원',
        paidTax:
          Math.floor(annualDividendData.paidTax * exchangeRate).toLocaleString(
            'ko-kr',
          ) + '원',
        unPaidTax:
          Math.floor(
            annualDividendData.unPaidTax * exchangeRate,
          ).toLocaleString('ko-kr') + '원',
        thisMonthDividend:
          Math.floor(
            annualDividendData.thisMonthDividend * exchangeRate,
          ).toLocaleString('ko-kr') + '원',
      };
    }
  };

  return useQuery(
    queryKeys.annualDividend(null, exchangeRate),
    getQueryFunction,
  );
};

export const useAnnualDividendExchangeWithSimpleQuery = () => {
  const { exchangeRate } = useExchangeRate();
  const { data } = useAnnualDividendQuery();
  const { modeData } = useControlMode();

  const getQueryFunction = () => {
    const annualDividendData = data?.data.data;
    if (annualDividendData && exchangeRate) {
      const newMonthlyDividends = Object.entries(
        annualDividendData.monthlyDividends,
      ).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value * exchangeRate,
        }),
        {},
      );

      return {
        ...annualDividendData,
        dividendChange: annualDividendData.dividendChange,
        monthlyDividends: newMonthlyDividends,
        annualDividend: modeData.isSimple
          ? getShortCurrencyKR(
              Math.floor(annualDividendData.annualDividend * exchangeRate),
            ) + '원'
          : Math.floor(
              annualDividendData.annualDividend * exchangeRate,
            ).toLocaleString('ko-kr') + '원',
        paidTax: modeData.isSimple
          ? getShortCurrencyKR(
              Math.floor(annualDividendData.paidTax * exchangeRate),
            ) + '원'
          : Math.floor(
              annualDividendData.paidTax * exchangeRate,
            ).toLocaleString('ko-kr') + '원',
        unPaidTax: modeData.isSimple
          ? getShortCurrencyKR(
              Math.floor(annualDividendData.unPaidTax * exchangeRate),
            ) + '원'
          : Math.floor(
              annualDividendData.unPaidTax * exchangeRate,
            ).toLocaleString('ko-kr') + '원',
        thisMonthDividend: modeData.isSimple
          ? getShortCurrencyKR(
              Math.floor(annualDividendData.thisMonthDividend * exchangeRate),
            ) + '원'
          : Math.floor(
              annualDividendData.thisMonthDividend * exchangeRate,
            ).toLocaleString('ko-kr') + '원',
      };
    }
  };

  return useQuery(
    queryKeys.annualDividend(modeData.isSimple, exchangeRate),
    getQueryFunction,
  );
};
