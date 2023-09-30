// 수정 하는데 들어가는 로직들 다 넣기

import { editedAssetDetailsAtom } from './useEditedAssetDetails/state';
import {
  AssetDetailsAtomProps,
  assetDetailsAtom,
} from './useGetAssetDetails/state';
import { useMyPortFolio } from './useMyPortFolio';
import { useUpdatePortfolio } from './useUpdatePortfolio';
import { useAtom } from 'jotai';

export const useEditPortfolio = () => {
  // 수정용 아톰
  const [assetDetails] = useAtom(assetDetailsAtom);
  const { myPortFolioData } = useMyPortFolio();

  // 폼으로 쓸 아톰
  const [editedAssetDetails] = useAtom(editedAssetDetailsAtom);
  // 이함수 호출하면 수정 요청 보냄 (버튼에서 쓸예정)
  const { updatePortfolioData, isLoading } = useUpdatePortfolio();

  // makeAssets
  const makeAssets = (array: AssetDetailsAtomProps[]) => {
    return array.map((stock) => {
      // console.log('stock.portfolioAssetId: ', stock.portfolioAssetId);
      // console.log(
      //   'editedAssetDetails.portfolioAssetId: ',
      //   editedAssetDetails.portfolioAssetId,
      // );
      console.log('stock.assetId: ', stock.assetId);
      console.log('editedAssetDetails.assetId: ', editedAssetDetails.assetId);
      if (stock.assetId === editedAssetDetails.assetId) {
        console.log('같을 때, price: ', editedAssetDetails.price);
        return {
          portfolioAssetId: stock.portfolioAssetId,
          price: editedAssetDetails.price,
          count: editedAssetDetails.count,
          currencyType: editedAssetDetails.currencyType,
        };
      } else {
        console.log('다를 때, price: ', stock.averagePrice);
        return {
          portfolioAssetId: stock.portfolioAssetId,
          // assetId: stock.assetId,
          count: stock.count,
          price: stock.averagePrice,
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
    console.log('madePortfolio formData: ', formData);
    return await updatePortfolioData(formData);
  };

  return {
    isLoading,
    updatePort,
  };
  // const formData = {
  //   portfolioId: Number(portfolioId),
  //   assets: makeAssets(assetDetails),
  // };
  // console.log('madePortfolio formData: ', formData);
  // updatePortfolioData(formData);
};
