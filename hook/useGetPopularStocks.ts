import { useGetPopularStocksQuery } from '@/hook/useQueryHook/useGetPopularStocksQuery';

export const useGetPopularStocks = () => {
  const { data, isLoading } = useGetPopularStocksQuery();

  const getPopularStocksData = data?.data;

  return {
    getPopularStocksData,
    isLoading,
  };
};
