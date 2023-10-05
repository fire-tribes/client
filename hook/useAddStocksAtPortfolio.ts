import { useAddStocksAtPortfolioQuery } from '@/hook/useQueryHook/useAddStocksAtPortfolioQuery';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { mutateAsync, isLoading } = useAddStocksAtPortfolioQuery();

  // const formData: feededStockInfos;
  // const addStocksAtPortfolioData = mutate(formData);

  const addStocksAtPortfolioData = async (formData: feededStockInfos) => {
    await mutateAsync(formData);
    console.log('mutate phase');
    router.push('/');
  };

  return {
    addStocksAtPortfolioData,
    isLoading,
  };
};
