import { useDeleteAssetDetailsQuery } from '@/hook/useQueryHook/useDeleteAssetDetailsQuery';
import { useRouter } from 'next/router';

interface DeletePortfolioAssetDetail {
  portfolioId: number;
  portfolioAssetId: number;
}

function useDeleteAssetDetails() {
  const router = useRouter();
  const { mutateAsync, isLoading } = useDeleteAssetDetailsQuery();

  const deleteAssetDetailsData = async (
    deletePortfolioAssetDetail: DeletePortfolioAssetDetail,
  ) => {
    await mutateAsync(deletePortfolioAssetDetail);
    router.push('/edit');
  };
  return {
    deleteAssetDetailsData,
    isLoading,
  };
}

export default useDeleteAssetDetails;
