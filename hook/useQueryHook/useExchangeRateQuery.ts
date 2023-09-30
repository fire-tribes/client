import { portfolioAPI } from '@/core/api/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useExchangeRateQuery = () => {
  return useQuery(queryKeys.exchangeRate, () => portfolioAPI.getExchangeRate());
};
