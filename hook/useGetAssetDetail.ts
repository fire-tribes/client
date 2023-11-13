import { useGetAssetDetailQuery } from './useQueryHook/useGetAssetDetailQuery';

export const useGetAssetDetail = (
  portfolioId: number,
  portfolioAssetId: number,
) => {
  const { data, isLoading, isFetching } = useGetAssetDetailQuery(
    portfolioId,
    portfolioAssetId,
  );

  const getAssetDetailData = !isFetching ? data?.data : undefined;

  return {
    getAssetDetailData,
    isLoading,
  };
};
