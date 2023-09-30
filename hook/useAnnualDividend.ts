import { useAnnualDividendExchangeQuery } from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  const { data, isLoading } = useAnnualDividendExchangeQuery();
  const annualDividendData = data;

  return {
    annualDividendData,
    isLoading,
  };
};
