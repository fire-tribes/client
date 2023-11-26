// 수정 하는데 들어가는 로직들 다 넣기

import { editAssetDetailAtom } from './useEditAssetDetail/state';
import useGetMyPortfolio from './useGetMyPortfolio';
import { useUpdatePortfolio } from './useUpdatePortfolio';
import { MyportfoliAssetDetailModel } from '@/@types/models/portfolio';
import { useAtom } from 'jotai';

export const useEditPortfolio = () => {
  // 수정용 아톰
  // const [assetDetails] = useAtom(assetDetailsAtom);
  // const { data } = useMyPortFolioQuery();
  const { myPortfolioCacheData } = useGetMyPortfolio();
  const myPortFolioData = myPortfolioCacheData?.data;

  // 폼으로 쓸 아톰
  const [editAssetDetail] = useAtom(editAssetDetailAtom);
  // 이함수 호출하면 수정 요청 보냄 (버튼에서 쓸예정)
  const { updatePortfolioData, isLoadingUpdatePortfolioData } =
    useUpdatePortfolio();

  // makeAssets
  const makeAssets = (array: MyportfoliAssetDetailModel[]) => {
    return array.map((stock) => {
      if (stock.assetId === editAssetDetail.assetId) {
        return {
          portfolioAssetId: stock.portfolioAssetId,
          price: Number(editAssetDetail.purchasePrice),
          count: Number(editAssetDetail.count),
          currencyType: editAssetDetail.currencyType,
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
      assets: makeAssets(myPortFolioData?.assetDetails),
    };
    console.log('formData.assets: ', formData.assets);
    return await updatePortfolioData(formData);
  };

  return {
    isLoadingUpdatePortfolioData,
    updatePort,
  };
};
