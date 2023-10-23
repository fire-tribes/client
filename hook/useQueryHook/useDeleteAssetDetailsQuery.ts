import { queryKeys } from './queryKeys';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { userAPI } from '@/core/api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

interface DeletePortfolioAssetDetail {
  portfolioId: number;
  portfolioAssetId: number;
}

export const useDeleteAssetDetailsQuery = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };

  const portfolioId = Number(slug?.[0]);

  return useMutation(
    mutationKeys.deleteAssetDetails(),
    (deletePortfolioAssetDetail: DeletePortfolioAssetDetail) =>
      userAPI.deleteAssetDetails(deletePortfolioAssetDetail),
    {
      onSuccess: (response) => {
        if (response.data.success) {
          router.push(
            `/edit?portfolioId=${portfolioId}&deleteAssetDetails=success`,
          );
          // console.log('헬로');
          queryClient.invalidateQueries(
            //무효화 하고싶은 Query key
            queryKeys.recentSearchWords(),
          );
        }
      },
    },
  );
};
