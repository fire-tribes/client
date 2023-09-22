import { useGetPortfolioQuery } from '@/hook/useQueryHook/useGetPortfolioQuery';

export const useGetPortfolio = () => {
  const { data, isLoading } = useGetPortfolioQuery();

  const getPortfolioData = data?.data.data.data;

  return {
    getPortfolioData,
    isLoading,
  };
};
