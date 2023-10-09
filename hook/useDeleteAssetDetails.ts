import { useDeleteAssetDetailsQuery } from '@/hook/useQueryHook/useDeleteAssetDetailsQuery';
import { useRouter } from 'next/router';

interface DeletePortfolioAssetDetail {
  portfolioId: number;
  portfolioAssetId: number;
}

function useDeleteAssetDetails() {
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };

  const portfolioId = Number(slug?.[0]);
  const { mutateAsync, isLoading } = useDeleteAssetDetailsQuery();

  const deleteAssetDetailsData = async (
    deletePortfolioAssetDetail: DeletePortfolioAssetDetail,
  ) => {
    await mutateAsync(deletePortfolioAssetDetail);
    router.push(`/edit?portfolioId=${portfolioId}`);
  };
  return {
    deleteAssetDetailsData,
    isLoading,
  };
}

export default useDeleteAssetDetails;
