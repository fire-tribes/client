import { useAnnualDividendQuery } from '@/hook/useQueryHook/useAnnualDividendQuery';

export const useAnnualDividend = () => {
  const { data } = useAnnualDividendQuery();

  return {
    data,
  };
};
