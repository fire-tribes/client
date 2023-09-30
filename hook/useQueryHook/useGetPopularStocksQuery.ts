import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { popularStocksAPI } from '@/core/api/popularStocks';
import { useQuery } from '@tanstack/react-query';

export const useGetPopularStocksQuery = () => {
  return useQuery({
    queryKey: queryKeys.popularStocks(),
    queryFn: () => popularStocksAPI.getPopularStocks(),
  });
};
