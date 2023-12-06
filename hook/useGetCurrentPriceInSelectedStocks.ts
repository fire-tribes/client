// import { selectedStocksAtom } from '../useGetSelectedStocks/state';
// import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useGetCurrentPriceInSelectedStocksQuery } from '@/hook/useQueryHook/useGetCurrentPriceInSelectedStocksQuery';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { useQueryClient } from '@tanstack/react-query';
// import { useAtom } from 'jotai';

export const useGetCurrentPriceInSelectedStocks = (
  assetId: number,
  currencyType: ExchangeRateSymbol,
  isPressButton?: boolean,
) => {
  // const [selectedStocks] = useAtom(selectedStocksAtom);

  // initial Atom
  const { currentPriceQuery: getCurrentPriceData } =
    useGetCurrentPriceInSelectedStocksQuery(
      assetId,
      currencyType,
      isPressButton,
    );

  /** invalidation(무효화) */
  /** 개별 무효화하고 개별 현재가 가져오기 */
  const queryClient = useQueryClient();
  const invalidateCurrentPrice = (
    assetId: number,
    currencyType: ExchangeRateSymbol,
  ) => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.currentPrice(assetId, currencyType),
      refetchType: 'all',
    });
  };

  return {
    getCurrentPriceData,
    invalidateCurrentPrice,
  };
};
