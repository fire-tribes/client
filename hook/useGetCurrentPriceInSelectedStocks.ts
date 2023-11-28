// import { selectedStocksAtom } from '../useGetSelectedStocks/state';
import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useGetCurrentPriceInSelectedStocksQuery } from '@/hook/useQueryHook/useGetCurrentPriceInSelectedStocksQuery';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';

export const useGetCurrentPriceInSelectedStocks = (
  isPressAllButton: boolean[],
  newIsPressAllButton: boolean,
) => {
  const [selectedStocks] = useAtom(selectedStocksAtom);

  // initial Atom
  const { oldQueries: getCurrentPriceDatas, newQueires } =
    useGetCurrentPriceInSelectedStocksQuery(
      isPressAllButton,
      newIsPressAllButton,
    );

  const shouldSetAtom = getCurrentPriceDatas.every(
    (query) => query.fetchStatus !== 'fetching',
  );

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
    getCurrentPriceDatas,
    shouldSetAtom,
    newQueires,
    invalidateCurrentPrices,
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
