import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { getPopularStocksAPI } from '@/core/api/getPopularStocks';
import { useQuery } from '@tanstack/react-query';

export const useGetPopularStocksQuery = () => {
  return useQuery({
    queryKey: queryKeys.popularStocks(),
    queryFn: getPopularStocksAPI.getPopularStocks,
  });
};
