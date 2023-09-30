import { portfolioAPI } from '@/core/api/portfolio';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation } from '@tanstack/react-query';

export const useMakePortfolioQuery = () => {
  return useMutation({
    mutationKey: mutationKeys.makePortfolio(),
    mutationFn: () => portfolioAPI.makePortfolio(),
  });
};
