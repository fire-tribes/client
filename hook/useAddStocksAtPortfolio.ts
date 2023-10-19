import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useAddStocksAtPortfolioQuery } from '@/hook/useQueryHook/useAddStocksAtPortfolioQuery';
import { useAtom } from 'jotai';
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
  /** 선택한 주식 종목 배열 */
  const [, setSelectedStocks] = useAtom(selectedStocksAtom);

  const addStocksAtPortfolioData = async (formData: feededStockInfos) => {
    await mutateAsync(formData);
    /** jotai 초기화 */
    setSelectedStocks([]);
    router.push('/');
  };

  const isLoadingAddStocksAtPortfolioData = isLoading;

  return {
    addStocksAtPortfolioData,
    isLoadingAddStocksAtPortfolioData,
  };
};
