import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { portfolioAPI } from '@/core/api/portfolio';
import { useMutation } from '@tanstack/react-query';

export const useDeletePortfolioQuery = () => {
  return useMutation(mutationKeys.deletePortfolio(), (portfolioId: number) =>
    portfolioAPI.deletePortfolio(portfolioId),
  );
};
