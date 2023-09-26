import Backward from '@/components/common/Backward';
// import EditStocks from '@/components/EditStocks';
import NothingStocks from '@/components/NothingStocks';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import { useGetPortfolio } from '@/hook/useGetPortfolio';
// import { portfolioListAtom } from '@/hook/useGetPortfolioList/state';
// import { useAtom } from 'jotai';

export interface portfolioList {
  success: boolean;
  data: {
    portfolioId: number;
    totalValue: number;
    totalValueChange: number;
    totalValueChangeRate: number;
    assetDetails: [
      {
        assetId: number;
        tickerCode: string;
        stockCode: string;
        count: number;
        averagePrice: string;
        currentPrice: string;
        assetPriceChangeRate: string;
        assetPriceChange: string;
        value: number;
        rateOfReturn: number;
        dividendPriceRatio: number;
        dividendMonth: number[];
        currencyType: 'KRW';
      },
    ];
  };
  errorCode: string;
  message: string;
}

// const useGetPortfolioList = () => {
//   return useQuery({
//     queryKey: ['portfolioList'],
//     queryFn: () => APIInstance.get<portfolioList>('portfolio'),
//     onError: (error) => console.log(error), // TODO: 404 에러 페이지로 이동
//     onSuccess: (response) => console.log(response), // TODO: Toast 컴포넌트로 확장
//   });
// };

function Edit() {
  /** 검색 결과 데이터 테스트 */

  /** 포트폴리오 Get 요청 함수 */
  const { getPortfolioData } = useGetPortfolio();
  const assetDetailsArray = getPortfolioData?.assetDetails;
  console.log('assetDetailsArray: ', assetDetailsArray);

  return (
    <SearchLayout
      isDisabled={false}
      buttonName={'완료'}
      hasButton={!assetDetailsArray ? true : false}
    >
      <section>
        <Backward title={'보유 주식 편집'} />
      </section>
      <section>
        {assetDetailsArray !== undefined ? (
          // <EditStocks portfolioList={getPortfolioList} />
          <div>hello World!</div>
        ) : (
          /** 포트폴리오에 데이터가 없을 때, 빈 페이지를 보여주기 */
          <NothingStocks />
        )}
      </section>
    </SearchLayout>
  );
}

export default Edit;
