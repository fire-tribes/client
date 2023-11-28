import { assetAPI } from '../../core/api/asset';
import { queryKeys } from '../../hook/useQueryHook/queryKeys';
import { editAssetDetailAtom } from '../useEditAssetDetail/state';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { handleDecimalPoint } from '@/core/utils/handleNumber';
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
  const [, setEditAssetDetail] = useAtom(editAssetDetailAtom);
  /** 개별 현재가 가져오기 */
  const oldQueries = useQuery({
    queryKey: queryKeys.currentPrice(assetId, currencyType),
    queryFn: () => assetAPI.getCurrentPrice(assetId, currencyType),
    enabled: !!isPressButton,
    onSuccess: (response: Response) => {
      // if (responseCurrentPrice !== undefined) {
      if (currencyType === 'USD') {
        const responseCurrentPrice = handleDecimalPoint(
          Math.round,
          response.data.data[0]?.currentPrice,
          2,
        );
        setEditAssetDetail((prev) => ({
          ...prev,
          purchasePrice: responseCurrentPrice,
        }));
      } else if (currencyType === 'KRW') {
        const responseCurrentPrice = handleDecimalPoint(
          Math.round,
          response.data.data[0]?.currentPrice,
          0,
        );
        setEditAssetDetail((prev) => ({
          ...prev,
          purchasePrice: responseCurrentPrice,
        }));
      }
      // }
    },
  });

  return { oldQueries };
};
