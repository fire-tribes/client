import { getPortfolioAPI } from '@/core/api/getPortfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetPortfolioQuery = () => {
  return useQuery({
    queryKey: queryKeys.portfolio(),
    queryFn: () => getPortfolioAPI.getPortfolio(),
  });
};
