import { useAddStocksAtPortfolioQuery } from '@/hook/useQueryHook/useAddStocksAtPortfolioQuery';

interface feededStockInfos {
  portfolioId: number;
  assets: assets[];
}
interface assets {
  assetId: number;
  price: number;
  count: number;
  currencyType: string;
}

export const useAddStocksAtPortfolio = () => {
  const { mutateAsync, isLoading } = useAddStocksAtPortfolioQuery();

  // const formData: feededStockInfos;
  // const addStocksAtPortfolioData = mutate(formData);

  const addStocksAtPortfolioData = async (formData: feededStockInfos) => {
    const response = await mutateAsync(formData);
    return response;
  };

  return {
    addStocksAtPortfolioData,
    isLoading,
  };
};
