import { useAddStocksAtPortfolioQuery } from '@/hook/useQueryHook/useAddStocksAtPortfolioQuery';

export const useAddStocksAtPortfolio = () => {
  const { mutate, isLoading } = useAddStocksAtPortfolioQuery();

  const exampleAssets = [
    {
      assetId: 0,
      price: 0,
      count: 0,
      currencyType: 'USD',
    },
    {
      assetId: 1,
      price: 1,
      count: 1,
      currencyType: 'USD',
    },
    {
      assetId: 2,
      price: 2,
      count: 2,
      currencyType: 'USD',
    },
  ];
  const formData = {
    portfolioId: 1,
    assets: exampleAssets,
  };
  const addStocksAtPortfolioData = mutate(formData);

  return {
    addStocksAtPortfolioData,
    isLoading,
  };
};
