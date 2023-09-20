import { dividendAPI } from '@/core/api/dividend';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useAnnualDividendQuery = () => {
  return useQuery(queryKeys.annualDividend(), dividendAPI.getAnnualDividend);
};
