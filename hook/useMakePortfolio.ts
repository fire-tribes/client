import { useMakePortfolioQuery } from '@/hook/useQueryHook/useMakePortfolioQuery';

export const useMakePortfolio = () => {
  const { mutateAsync, isLoading } = useMakePortfolioQuery();

  const makePortfolioData = async () => {
    const response = await mutateAsync();
    // FIX:
    return response.data.data;
  };

  const isLoadingMakePortfolioData = isLoading;

  return {
    makePortfolioData,
    isLoadingMakePortfolioData,
  };
};
