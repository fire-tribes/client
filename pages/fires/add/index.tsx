import FeedStockInfos from '@/components/FeedStockInfos';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import Backward from '@/components/common/Backward';
import { useMakePortfolio } from '@/hook/useMakePortfolio';
// import { useAddStocksAtPortfolio } from '@/hook/useAddStocksAtPortfolio';
import { useAddStocksAtPortfolioQuery } from '@/hook/useQueryHook/useAddStocksAtPortfolioQuery';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

function Add() {
  /** URL 주소에서 query parameter로 portfolioId를 확인하여 신규 포트폴리오 생성인지, 기존 포트폴리오 추가인지 구분 */
  const router = useRouter();
  const { query } = router;
  const portfolioId = query.portfolioId;
  console.log('portfolioId: ', portfolioId);
  const PORTFOLIO_ID = Number(portfolioId);

  /** 신규일 경우, 포트폴리오 생성 */
  const { makePortfolioData } = useMakePortfolio();
  const value = {
    portfolioId: makePortfolioData?.portfolioId,
    userId: makePortfolioData?.userId,
  };
  console.log('value: ', value);

  /** 포트폴리오에 자산 추가 */
  const exampleAssets = [
    {
      assetId: 0,
      price: 0,
      count: 0,
      currencyType: 'USD',
    },
    {
      assetId: 1,
      price: 1,
      count: 1,
      currencyType: 'USD',
    },
    {
      assetId: 2,
      price: 2,
      count: 2,
      currencyType: 'USD',
    },
  ];
  const formData = {
    portfolioId: PORTFOLIO_ID,
    assets: exampleAssets,
  };
  const { mutate } = useAddStocksAtPortfolioQuery();
  console.log('() => mutate(formData): ', () => mutate(formData));

  /** 선택한 주식 종목 배열 */
  const [selectedStocks] = useAtom(selectedStocksAtom);

  return (
    <SearchLayout
      hasButton={true}
      isDisabled={selectedStocks.length !== 0 ? false : true}
      buttonName={'추가 완료'}
    >
      <section>
        <Backward title={'보유 주식 정보 입력'} />
      </section>
      <section>
        <FeedStockInfos />
      </section>
    </SearchLayout>
  );
}

export default Add;
