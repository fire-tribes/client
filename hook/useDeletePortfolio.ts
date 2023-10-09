import { useDeletePortfolioQuery } from './useQueryHook/useDeletePortfolioQuery';

export const useDeletePortfolio = () => {
  const { mutateAsync, isLoading } = useDeletePortfolioQuery();

  const deletePortfolioData = async (portfolioId: number) => {
    const response = await mutateAsync(portfolioId);
    return response;
  };

  const isLoadingDeletePortfolioData: boolean = isLoading;

  return {
    deletePortfolioData,
    isLoadingDeletePortfolioData,
  };
};
