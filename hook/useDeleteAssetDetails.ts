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
    const response = await mutateAsync(deletePortfolioAssetDetail);
    return response;
  };
  return {
    deleteAssetDetailsData,
    isLoading,
  };
}

export default useDeleteAssetDetails;
