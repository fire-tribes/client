import { getPresentPriceAPI } from '@/core/api/getPresentPrice';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetPresentPriceQuery = (assetIds: number) => {
  return useQuery({
    queryKey: queryKeys.presentPrice(assetIds),
    queryFn: () => getPresentPriceAPI.getPresentPrice(assetIds),
  });
};
