import { useDeleteAssetDetailsQuery } from '@/hook/useQueryHook/useDeleteAssetDetailsQuery';

interface DeletePortfolioAssetDetail {
  portfolioId: number;
  portfolioAssetId: number;
}

function useDeleteAssetDetails() {
  const { mutateAsync, isLoading } = useDeleteAssetDetailsQuery();

  const deleteAssetDetailsData = async (
    deletePortfolioAssetDetail: DeletePortfolioAssetDetail,
  ) => {
    await mutateAsync(deletePortfolioAssetDetail);
  };
  return {
    deleteAssetDetailsData,
    isLoading,
  };
}

export default useDeleteAssetDetails;
