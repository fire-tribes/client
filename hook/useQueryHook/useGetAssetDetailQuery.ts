import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { portfolioAPI } from '@/core/api/portfolio';
import { useQuery } from '@tanstack/react-query';

export const useGetAssetDetailQuery = (
  portfolioId: number,
  portfolioAssetId: number,
) => {
  return useQuery({
    queryKey: queryKeys.assetDetail(),
    queryFn: () => portfolioAPI.getAssetDetail(portfolioId, portfolioAssetId),
  });
};
