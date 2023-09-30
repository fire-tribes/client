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
        annualDividend: annualDividendData.annualDividend,
        dividendChange: annualDividendData.dividendChange,
        paidTax: annualDividendData.paidTax,
        unPaidTax: annualDividendData.unPaidTax,
        thisMonthDividend: annualDividendData.thisMonthDividend,
        monthlyDividends: newMonthlyDividends,
      };
    }
  };

  return useQuery(
    queryKeys.annualDividend(modeData.isSimple, exchangeRate),
    getQueryFunction,
  );
};
