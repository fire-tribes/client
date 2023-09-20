import FeedStockInfos from '@/components/FeedStockInfos';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import APIInstance from '@/core/api/instance';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import Backward from '@/components/Backward';

interface MakePortfolio {
  success: true;
  data: {
    portfolioId: number;
    userId: number;
  };
  errorCode: string;
  message: string;
}

interface PostStocksAtPortfolio {
  portfolioId: number;
  assets: [
    {
      assetId: number;
      price: string;
      count: number;
    },
  ];
}

const useMakePortfolio = () => {
  return useMutation({
    mutationKey: ['madePortfolio'],
    mutationFn: () => APIInstance.post<MakePortfolio>('portfolio'),
    onError: (error) => console.log(error), // TODO: Toast로 확장 사용
    onSuccess: (response) => console.log(response), // TODO: Toast로 확장 사용
  });
};

const usePostStocksAtPortfolio = (PORTFOLIO_ID: number | undefined) => {
  return useMutation({
    mutationKey: ['postedStocksAtPortfolio'],
    mutationFn: () =>
      APIInstance.post<PostStocksAtPortfolio>(
        `portfolio/${PORTFOLIO_ID}/asset`,
      ),
    onError: (error) => console.log(error), // TODO: Toast로 확장 사용
    onSuccess: (response) => console.log(response), // TODO: Toast로 확장 사용
  });
};

function Add() {
  /** URL 주소에서 query parameter로 portfolioId를 확인하여 신규 포트폴리오 생성인지, 기존 포트폴리오 추가인지 구분 */
  const router = useRouter();
  const { query } = router;
  const PORTFOLIO_ID = query.portfolioId;
  console.log('PORTFOLIO_ID: ', PORTFOLIO_ID);

  /** 신규일 경우, 포트폴리오 생성 */
  const makePortfolio = useMakePortfolio();
  makePortfolio.data?.data.data.portfolioId;
  usePostStocksAtPortfolio(123123);
  // portfolioId 기준으로 선택한 Stocks 추가
  // const portfolioId =
  //   typeof PORTFOLIO_ID === 'number'
  //     ? PORTFOLIO_ID
  //     : makePortfolio.data?.data.data.portfolioId;
  // const { mutate } = usePostStocksAtPortfolio(portfolioId);

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
