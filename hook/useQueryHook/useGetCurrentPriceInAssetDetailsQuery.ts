import { editedAssetDetailsAtom } from '../useEditedAssetDetails/state';
import { assetAPI } from '../../core/api/asset';
import { queryKeys } from '../../hook/useQueryHook/queryKeys';
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
  isPressButton: boolean,
) => {
  const [, setEditedAssetDetails] = useAtom(editedAssetDetailsAtom);
  /** 개별 현재가 가져오기 */
  const oldQueries = useQuery({
    // queries: assetDetails.map((asset, id) => ({
    queryKey: queryKeys.currentPrice(assetId),
    queryFn: () => assetAPI.getCurrentPrice(assetId),
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

  // const oldQueries = useQueries({
  //   queries: assetDetails.map((asset, id) => ({
  //     queryKey: queryKeys.currentPrice(asset.assetId),
  //     queryFn: () => assetAPI.getCurrentPrice(asset.assetId),
  //     enabled: !!isPressAllButton[id],
  //     onSuccess: (response) => {
  //       const responseAssetId = response.data.data[0]?.assetId;
  //       const responseCurrentPrice = response.data.data[0]?.currentPrice;

  //       setAssetDetails((prev) => {
  //         return prev.map((assetDetail) => {
  //           if (assetDetail.assetId === responseAssetId) {
  //             return {
  //               ...assetDetail,
  //               price: responseCurrentPrice.toString(),
  //             };
  //           } else {
  //             return { ...assetDetail };
  //           }
  //         });
  //       });
  //     },
  //   })),
  // });

  /** 전체 현재가 가져오기 */
  // const newQueires = useQuery(
  //   queryKeys.currentPrices(
  //     assetDetails.map((assetDetail) => assetDetail.assetId),
  //   ),
  //   () => {
  //     const apis = assetDetails.map((assetDetail) =>
  //       assetAPI.getCurrentPrice(assetDetail.assetId),
  //     );

  //     return Promise.all([...apis]);
  //   },
  //   {
  //     enabled: !!newIsPressAllButton,
  //     onSuccess: (response) => {
  //       // const data = response[0].data.data[0]?.assetId;

  //       setAssetDetails((prev) => {
  //         return prev.map((assetDetail, id) => ({
  //           ...assetDetail,
  //           price: response[id].data.data[0]!.currentPrice.toString(),
  //         }));
  //       });
  //     },
  //   },
  // );

  return { oldQueries };
};
