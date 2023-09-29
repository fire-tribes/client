import { useUpdatePortfolioQuery } from './useQueryHook/useUpdatePortfolioQuery';

interface feededStockInfos {
  portfolioId: number;
  assets: assets[];
}
interface assets {
  portfolioAssetId: number;
  price: number;
  count: number;
  currencyType: string;
}

export const useUpdatePortfolio = () => {
  const { mutateAsync, isLoading } = useUpdatePortfolioQuery();

  // const formData: feededStockInfos;
  // const addStocksAtPortfolioData = mutate(formData);

  const updatePortfolioData = async (formData: feededStockInfos) => {
    const response = await mutateAsync(formData);
    return response;
  };

  return {
    updatePortfolioData,
    isLoading,
  };
};
