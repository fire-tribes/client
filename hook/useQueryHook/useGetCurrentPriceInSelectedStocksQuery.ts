import { selectedStocksAtom } from '../useGetSelectedStocks/state';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { assetAPI } from '@/core/api/asset';
import { useQueries, useQuery } from '@tanstack/react-query';
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
  isPressAllButton: boolean[],
  newIsPressAllButton: boolean,
) => {
  const [selectedStocks, setSelectedAtoms] = useAtom(selectedStocksAtom);
  /** 개별 현재가 가져오기 */
  const oldQueries = useQueries({
    queries: selectedStocks.map((stock, id) => ({
      queryKey: queryKeys.currentPrice(stock.assetId),
      queryFn: () => assetAPI.getCurrentPrice(stock.assetId),
      enabled: !!isPressAllButton[id],
      onSuccess: (response: Response) => {
        const responseAssetId = response.data.data[0]?.assetId;
        const responseCurrentPrice = response.data.data[0]?.currentPrice;

        setSelectedAtoms((prev) => {
          return prev.map((selectedStock) => {
            if (selectedStock.assetId === responseAssetId) {
              return {
                ...selectedStock,
                price: responseCurrentPrice.toString(),
              };
            } else {
              return { ...selectedStock };
            }
          });
        });
      },
    })),
  });

  /** 전체 현재가 가져오기 */
  const newQueires = useQuery(
    queryKeys.currentPrices(
      selectedStocks.map((selectedStock) => selectedStock.assetId),
    ),
    () => {
      const apis = selectedStocks.map((stock) =>
        assetAPI.getCurrentPrice(stock.assetId),
      );

      return Promise.all([...apis]);
    },
    {
      enabled: !!newIsPressAllButton,
      onSuccess: (response) => {
        // const data = response[0].data.data[0]?.assetId;

        setSelectedAtoms((prev) => {
          return prev.map((selectedStock, id) => ({
            ...selectedStock,
            price: response[id].data.data[0]!.currentPrice.toString(),
          }));
        });
      },
    },
  );

  return { oldQueries, newQueires };
};
