// 수정 하는데 들어가는 로직들 다 넣기

import { editedAssetDetailsAtom } from './useEditedAssetDetails/state';
import {
  AssetDetailsAtomProps,
  assetDetailsAtom,
} from './useGetAssetDetails/state';
import { useMyPortFolioQuery } from './useQueryHook/useMyPortFolioQuery';
import { useUpdatePortfolio } from './useUpdatePortfolio';
import { useAtom } from 'jotai';

export const useEditPortfolio = () => {
  // 수정용 아톰
  const [assetDetails] = useAtom(assetDetailsAtom);
  const { data } = useMyPortFolioQuery();
  const myPortFolioData = data?.data.data;

  // 폼으로 쓸 아톰
  const [editedAssetDetails] = useAtom(editedAssetDetailsAtom);
  // 이함수 호출하면 수정 요청 보냄 (버튼에서 쓸예정)
  const { updatePortfolioData, isLoadingUpdatePortfolioData } =
    useUpdatePortfolio();

  // makeAssets
  const makeAssets = (array: AssetDetailsAtomProps[]) => {
    return array.map((stock) => {
      if (stock.assetId === editedAssetDetails.assetId) {
        return {
          portfolioAssetId: stock.portfolioAssetId,
          price: editedAssetDetails.price,
          count: editedAssetDetails.count,
          currencyType: editedAssetDetails.currencyType,
        };
      } else {
        return {
          portfolioAssetId: stock.portfolioAssetId,
          price: stock.averagePrice,
          count: stock.count,
          currencyType: stock.currencyType,
        };
      }
    });
  };

  // madePortfolio
  /** 1-2. 포트폴리오가 있을 경우, 기존의 portfolioId 사용 */

  const updatePort = async () => {
    if (!myPortFolioData?.portfolioId) {
      return;
    }

    const formData = {
      portfolioId: myPortFolioData?.portfolioId,
      assets: makeAssets(assetDetails),
    };
    return await updatePortfolioData(formData);
  };

  return {
    isLoadingUpdatePortfolioData,
    updatePort,
  };
};
