import { selectedStocksAtom } from '../useGetSelectedStocks/state';
import { changeIsPressButtonAtom } from '../useChangeIsPressButton/state';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { assetAPI } from '@/core/api/asset';
import { handleDecimalPoint } from '@/core/utils/handleNumber';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

interface Response {
  data: {
    data: {
      assetId: number;
      currentPrice: number;
    }[];
  };
}

export const useGetCurrentPriceInSelectedStocksQuery = (
  assetId: number,
  currencyType: ExchangeRateSymbol,
  isPressButton?: boolean,
) => {
  const [, setSelectedStocks] = useAtom(selectedStocksAtom);
  const [, setIsPressButton] = useAtom(changeIsPressButtonAtom);
  /** 개별 현재가 가져오기 */
  const oldQuery = useQuery({
    // queries: selectedStocks.map((stock, id) => ({
    queryKey: queryKeys.currentPrice(assetId, currencyType),
    queryFn: () => assetAPI.getCurrentPrice(assetId, currencyType),
    enabled: !!isPressButton,
    onSuccess: (response: Response) => {
      /** 성공했을 경우, isPressButton boolean값을 원상복귀 */
      setIsPressButton(false);

      /** responseAssetId 진행 */
      const responseAssetId = response.data.data[0]?.assetId;
      let responseCurrentPrice = handleDecimalPoint(
        Math.floor,
        response.data.data[0]?.currentPrice,
        2,
      );
      console.log('responseCurrentPrice: ', responseCurrentPrice);

      setSelectedStocks((prev) => {
        return prev.map((selectedStock) => {
          if (
            selectedStock.assetId === responseAssetId &&
            selectedStock.currencyType === 'USD'
          ) {
            return {
              ...selectedStock,
              price: responseCurrentPrice,
            };
          } else if (
            selectedStock.assetId === responseAssetId &&
            selectedStock.currencyType === 'KRW'
          ) {
            responseCurrentPrice = handleDecimalPoint(
              Math.floor,
              response.data.data[0].currentPrice,
              0,
            );
            return {
              ...selectedStock,
              price: responseCurrentPrice,
            };
          } else {
            return { ...selectedStock };
          }
        });
      });
    },
    // })),
  });

  return { oldQuery };
};
