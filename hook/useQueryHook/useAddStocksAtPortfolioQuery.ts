import { addStocksAtPortfolioAPI } from '@/core/api/addStocksAtPortfolio';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation } from '@tanstack/react-query';

// export const useAddStocksAtPortfolioQuery = () => {
//   return useMutation({
//     mutationKey: mutationKeys.makePortfolio(),
//     mutationFn: (
//       portfolioId: number,
//       assets: Array<{
//         assetId: number;
//         price: number;
//         count: number;
//         currencyType: string;
//       }>,
//     ) => addStocksAtPortfolioAPI.addStocksAtPortfolio(portfolioId, assets),
//   });
// };

export const useAddStocksAtPortfolioQuery = () => {
  return useMutation(
    mutationKeys.makePortfolio(),
    (formData: {
      portfolioId: number;
      assets: Array<{
        assetId: number;
        price: number;
        count: number;
        currencyType: string;
      }>;
    }) =>
      addStocksAtPortfolioAPI.addStocksAtPortfolio(
        formData.portfolioId,
        formData.assets,
      ),
  );
};
