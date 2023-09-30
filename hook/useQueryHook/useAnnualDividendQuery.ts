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
  const { modeData } = useControlMode();

  const getQueryFunction = () => {
    const annualDividendData = data?.data.data;
    if (annualDividendData && exchangeRate) {
      annualDividendData.monthlyDividends;

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
        annualDividend: Math.floor(
          annualDividendData.annualDividend * exchangeRate,
        ).toLocaleString('ko-kr'),
        paidTax: Math.floor(
          annualDividendData.paidTax * exchangeRate,
        ).toLocaleString('ko-kr'),
        unPaidTax: Math.floor(
          annualDividendData.unPaidTax * exchangeRate,
        ).toLocaleString('ko-kr'),
        thisMonthDividend: Math.floor(
          annualDividendData.thisMonthDividend * exchangeRate,
        ).toLocaleString('ko-kr'),
      };
    }
  };

  return useQuery(
    queryKeys.annualDividend(modeData.isSimple, exchangeRate),
    getQueryFunction,
  );
};
