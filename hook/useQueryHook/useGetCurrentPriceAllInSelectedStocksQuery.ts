import { selectedStocksAtom } from '../useGetSelectedStocks/state';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { assetAPI } from '@/core/api/asset';
import { handleDecimalPoint } from '@/core/utils/handleNumber';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

export const useGetCurrentPriceAllInSelectedStocksQuery = (
  newIsPressAllButton?: boolean,
) => {
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);

  /** 전체 현재가 가져오기 */
  const currentPriceQueries = useQuery(
    queryKeys.currentPrices(
      selectedStocks.map((selectedStock) => selectedStock.assetId),
    ),
    () => {
      const apis = selectedStocks.map((stock) =>
        assetAPI.getCurrentPrice(stock.assetId, stock.currencyType),
      );

      return Promise.all([...apis]);
    },
    {
      enabled: !!newIsPressAllButton,
      onSuccess: (response) => {
        setSelectedStocks((prev) => {
          return prev.map((selectedStock, id) => {
            let responseCurrentPrice = handleDecimalPoint(
              Math.floor,
              response[id].data.data[0]!.currentPrice,
              2,
            );

            if (selectedStock.currencyType === 'USD') {
              return {
                ...selectedStock,
                price: responseCurrentPrice,
              };
            } else if (selectedStock.currencyType === 'KRW') {
              responseCurrentPrice = handleDecimalPoint(
                Math.floor,
                response[id].data.data[0]!.currentPrice,
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
    },
  );

  return { currentPriceQueries };
};
