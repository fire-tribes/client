// import { selectedStocksAtom } from '../useGetSelectedStocks/state';
import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useGetCurrentPriceQuery } from '@/hook/useQueryHook/useGetCurrentPriceQuery';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';

export const useGetCurrentPrice = (
  isPressAllButton: boolean[],
  newIsPressAllButton: boolean,
) => {
  const [selectedStocks] = useAtom(selectedStocksAtom);

  // initial Atom
  const { oldQueries: getCurrentPriceDatas, newQueires } =
    useGetCurrentPriceQuery(isPressAllButton, newIsPressAllButton);

  const shouldSetAtom = getCurrentPriceDatas.every(
    (query) => query.fetchStatus !== 'fetching',
  );
  /**
   * 하나라도 fetching이라면, false를 반환하고, 모두 idle이어야 한다.
   */
  // get currentPrice hook

  // return 최종 atom

  const queryClient = useQueryClient();
  const invalidateCurrentPrices = () => {
    // [1, 2, 3] 부분을 여기서 받아올수있는가?
    queryClient.invalidateQueries(
      queryKeys.currentPrices(
        selectedStocks.map((selectedStock) => selectedStock.assetId),
      ),
    );
  };

  const invalidateCurrentPrice = (assetId: number) => {
    queryClient.invalidateQueries(queryKeys.currentPrice(assetId));
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
