import { useMakePortfolioQuery } from '@/hook/useQueryHook/useMakePortfolioQuery';

export const useMakePortfolio = () => {
  const { data, isLoading } = useMakePortfolioQuery();

  const makePortfolioData = data?.data.data.data;

  return {
    makePortfolioData,
    isLoading,
  };
};
