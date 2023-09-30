import { queryKeys } from './queryKeys';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { userAPI } from '@/core/api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface DeletePortfolioAssetDetail {
  portfolioId: number;
  portfolioAssetId: number;
}

export const useDeleteAssetDetailsQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(
    mutationKeys.deleteAssetDetails(),
    (deletePortfolioAssetDetail: DeletePortfolioAssetDetail) =>
      userAPI.deleteAssetDetails(deletePortfolioAssetDetail),
    {
      onSuccess: (response) => {
        if (response.data.success) {
          queryClient.invalidateQueries(
            //무효화 하고싶은 Query key
            queryKeys.recentSearchWords(),
          );
        }
      },
    },
  );
};
