import { makePortfolioAPI } from '@/core/api/makePortfolio';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation } from '@tanstack/react-query';

export const useMakePortfolioQuery = () => {
  return useMutation({
    mutationKey: mutationKeys.makePortfolio(),
    mutationFn: () => makePortfolioAPI.makePortfolio(),
  });
};
