import { useGetCurrentPriceInAssetDetailsQuery } from '@/hook/useQueryHook/useGetCurrentPriceInAssetDetailsQuery';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { useQueryClient } from '@tanstack/react-query';

export const useGetCurrentPriceInAssetDetails = (
  assetId: number,
  currencyType: ExchangeRateSymbol,
  isPressButton: boolean,
) => {
  // initial Atom
  const { currentPriceQuery } = useGetCurrentPriceInAssetDetailsQuery(
    assetId,
    currencyType,
    isPressButton,
  );

  const getCurrentPriceData = currentPriceQuery.data;

  const queryClient = useQueryClient();
  /** invalidation(무효화) */
  /** 개별 무효화하고 개별 현재가 가져오기 */
  const invalidateCurrentPrice = (
    assetId: number,
    currencyType: ExchangeRateSymbol,
  ) => {
    queryClient.invalidateQueries(
      queryKeys.currentPrice(assetId, currencyType),
    );
  };

  return {
    getCurrentPriceData,
    // shouldSetAtom,
    invalidateCurrentPrice,
  };
};
