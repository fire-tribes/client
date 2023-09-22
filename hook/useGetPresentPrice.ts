import { useGetPresentPriceQuery } from '@/hook/useQueryHook/useGetPresentPriceQuery';

export const useGetPresentPrice = (assetIds: number) => {
  const { data, isLoading } = useGetPresentPriceQuery(assetIds);

  const getPresentPriceData = data?.data.data.data;

  return {
    getPresentPriceData,
    isLoading,
  };
};
