import { useAnnualDividendQuery } from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  const { data, isLoading } = useAnnualDividendQuery();

  const annualDividendData = data?.data.data;

  return {
    annualDividendData,
    isLoading,
  };
};
