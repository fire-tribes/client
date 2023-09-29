import { portfolioAPI } from '@/core/api/portfolio';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation } from '@tanstack/react-query';

export const useUpdatePortfolioQuery = () => {
  return useMutation(
    mutationKeys.updatePortfolio(),
    (formData: {
      portfolioId: number;
      assets: Array<{
        portfolioAssetId: number;
        price: number;
        count: number;
        currencyType: string;
      }>;
    }) => portfolioAPI.updatePortfolio(formData.portfolioId, formData.assets),
  );
};
