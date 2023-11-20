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
  const { oldQueries } = useGetCurrentPriceInAssetDetailsQuery(
    assetId,
    currencyType,
    isPressButton,
  );

  const getCurrentPriceDatas = oldQueries.data;

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

  /** 전체 무효화하고 전체 현재가 가져오기 */
  // const invalidateCurrentPrices = () => {
  //   queryClient.invalidateQueries(
  //     queryKeys.currentPrices(
  //       selectedStocks.map((selectedStock) => selectedStock.assetId),
  //     ),
  //   );
  // };

  return {
    getCurrentPriceDatas,
    // shouldSetAtom,
    invalidateCurrentPrice,
  };
};

// 1. newQurey 전체 데이터 갱신 쿼리 (useQuery를 씀)
// onSuccess =>  selectedStocks.price // 성공

// 전체 현재가 버튼 클릭 시 newQurey를 무효화(invalidation) => 다시 받아옴 => 갱신과정이루어짐

// 2. oldQueries 개별 데이터 쿼리s (useQueires)
// onSuccess =>  selectedStocks.price // 성공
// selectedStocks.price // queryId를 외부로부터 주입

// 개별 현재가 버튼 클릭 시 olQueries의 [0] or [1] 쿼리를 무효화(invalidation) => 다시 받아오고 => 갱싱과정 이루어짐

// 3. 보여주는건 selectedStocks.price
