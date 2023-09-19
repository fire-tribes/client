import Backward from '@/components/Backward';
import FeedStockInfos from '@/components/FeedStockInfos';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import { selectedStocksAtom } from '@/hook/useAtom/state';
import APIInstance from '@/core/api/instance';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';

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
    mutationFn: () =>
      APIInstance.post<MakePortfolio>(
        'http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/portfolio',
      ),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};

const usePostStocksAtPortfolio = (PORTFOLIO_ID: number | undefined) => {
  return useMutation({
    mutationKey: ['postedStocksAtPortfolio'],
    mutationFn: () =>
      APIInstance.post<PostStocksAtPortfolio>(
        `http://project-snow.kro.kr/api/v1/portfolio/${PORTFOLIO_ID}/asset`,
      ),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};

function Add() {
  const router = useRouter();
  const { query } = router;
  const PORTFOLIO_ID = query.portfolioId;
  console.log('PORTFOLIO_ID: ', PORTFOLIO_ID);

  // portfolioId 유무 확인(없으면 신규, 있으면 기존 포트폴리오)하고 신규일 경우, 포트폴리오 생성
  const makePortfolio = useMakePortfolio();
  makePortfolio.data?.data.data.portfolioId;
  usePostStocksAtPortfolio(123123);
  // portfolioId 기준으로 선택한 Stocks 추가
  // const portfolioId =
  //   typeof PORTFOLIO_ID === 'number'
  //     ? PORTFOLIO_ID
  //     : makePortfolio.data?.data.data.portfolioId;
  // const { mutate } = usePostStocksAtPortfolio(portfolioId);

  // 결과값
  const [selectedStocks] = useAtom(selectedStocksAtom);

  return (
    <SearchLayout
      isDisabled={selectedStocks.length !== 0 ? false : true}
      buttonName={'추가 완료'}
      isSearchActive={true}
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
