// import { selectedStocksAtom } from '../useGetSelectedStocks/state';
import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useGetCurrentPriceAllInSelectedStocksQuery } from './useQueryHook/useGetCurrentPriceAllInSelectedStocksQuery';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';

export const useGetCurrentPriceAllInSelectedStocks = (
  newIsPressAllButton?: boolean,
) => {
  const [selectedStocks] = useAtom(selectedStocksAtom);

  // initial Atom
  const { newQueries: getCurrentPriceAllData } =
    useGetCurrentPriceAllInSelectedStocksQuery(newIsPressAllButton);

  /** invalidation(무효화) */
  /** 전체 무효화하고 전체 현재가 가져오기 */
  const queryClient = useQueryClient();
  const invalidateCurrentPrices = () => {
    queryClient.invalidateQueries(
      queryKeys.currentPrices(
        selectedStocks.map((selectedStock) => selectedStock.assetId),
      ),
    );
  };

  return {
    getCurrentPriceAllData,
    invalidateCurrentPrices,
  };
};
