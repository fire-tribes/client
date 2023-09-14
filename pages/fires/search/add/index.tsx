import Backward from '@/components/Backward';
import FeedStockInfos from '@/components/FeedStockInfos';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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
      axios.post<MakePortfolio>(
        'http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/portfolio',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoyLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2OTQ3NDM0NTB9.FZxDu0a7T0XDZLISeXq0GXQvzvfzerZNd6HUjayf7oUagz1XbtKl7FkxhMGNIKY3PIoY4cmBpq03oKUunHjvNA',
          },
        },
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
      axios.post<PostStocksAtPortfolio>(
        `http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/portfolio/${PORTFOLIO_ID}/asset`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoyLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2OTQ3NDM0NTB9.FZxDu0a7T0XDZLISeXq0GXQvzvfzerZNd6HUjayf7oUagz1XbtKl7FkxhMGNIKY3PIoY4cmBpq03oKUunHjvNA',
          },
        },
      ),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};

function Add() {
  const LOCATION = useLocation();
  const QUERYPARAMS = new URLSearchParams(LOCATION.search);
  const PORTFOLIO_ID = QUERYPARAMS.get('portfolioId');
  console.log('PORTFOLIO_ID: ', PORTFOLIO_ID);

  // portfolioId 유무 확인(없으면 신규, 있으면 기존 포트폴리오)하고 신규일 경우, 포트폴리오 생성
  const makePortfolio = useMakePortfolio();
  makePortfolio.data?.data.data.portfolioId;

  // portfolioId 기준으로 선택한 Stocks 추가
  const portfolioId =
    typeof PORTFOLIO_ID === 'number'
      ? PORTFOLIO_ID
      : makePortfolio.data?.data.data.portfolioId;
  const { mutate } = usePostStocksAtPortfolio(portfolioId);

  return (
    <div>
      <section>
        <Backward title={'보유 주식 정보 입력'} />
      </section>
      <section>
        <FeedStockInfos />
      </section>
      <section>
        <BottomFixedButton isDisabled={false} onClick={() => mutate()}>
          추가 완료
        </BottomFixedButton>
      </section>
    </div>
  );
}

export default Add;
