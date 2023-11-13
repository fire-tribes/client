import { editedAssetDetailsAtom } from '../useEditedAssetDetails/state';
import { assetAPI } from '../../core/api/asset';
import { queryKeys } from '../../hook/useQueryHook/queryKeys';
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

export const useGetCurrentPriceInAssetDetailsQuery = (
  assetId: number,
  currencyType: ExchangeRateSymbol,
  isPressButton: boolean,
) => {
  const [, setEditedAssetDetails] = useAtom(editedAssetDetailsAtom);
  /** 개별 현재가 가져오기 */
  const oldQueries = useQuery({
    // queries: assetDetails.map((asset, id) => ({
    queryKey: queryKeys.currentPrice(assetId, currencyType),
    queryFn: () => assetAPI.getCurrentPrice(assetId, currencyType),
    enabled: !!isPressButton,
    onSuccess: (response: Response) => {
      const responseCurrentPrice = response.data.data[0]?.currentPrice;

      if (responseCurrentPrice !== undefined) {
        setEditedAssetDetails((prev) => ({
          ...prev,
          price: responseCurrentPrice,
        }));
      }
    },
    // })),
  });

  return { oldQueries };
};
