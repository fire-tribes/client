import { SelectedStocksAtomProps } from './useGetSelectedStocks/state';

function useMakeAssets() {
  /** 추가 완료 버튼을 눌렀을 때, 실행할 내용
   * 1. 빈 값이 있는지 체크하기, 없을 경우 아래 로직 실행. 있으면 실행되면 안됨
   * 2. 포트폴리오 생성(신규 시)
   * 3. 포트폴리오에 들어갈 자산 배열 만들기
   * 4. 만들어진 배열을 POST의 params 값으로 넣어 '포트폴리오 자산 추가' POST 요청
   */
  /** 2. 포트폴리오에 추가할 자산 목록 */
  const makeAssets = (selectedStocks: SelectedStocksAtomProps[]) => {
    const newAssets = selectedStocks.map((stock) => {
      const newAsset = {
        assetId: stock.assetId,
        count: Number(stock.count),
        price: Number(stock.price),
        currencyType: stock.currencyType,
      };

      return newAsset;
    });
    return newAssets;
  };

  return {
    makeAssets,
  };
}

export default useMakeAssets;
