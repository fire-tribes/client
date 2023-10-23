import { useDeleteAssetDetailsQuery } from '@/hook/useQueryHook/useDeleteAssetDetailsQuery';

interface DeletePortfolioAssetDetail {
  portfolioId: number;
  portfolioAssetId: number;
}

function useDeleteAssetDetails() {
  const { mutate } = useDeleteAssetDetailsQuery();

  const deleteAssetDetailsData = (
    deletePortfolioAssetDetail: DeletePortfolioAssetDetail,
  ) => {
    mutate(deletePortfolioAssetDetail);
  };

  return {
    deleteAssetDetailsData,
  };
}

export default useDeleteAssetDetails;
