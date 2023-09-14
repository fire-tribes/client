import { FeedStockInfoUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import trashSvg from '@/public/icon/trash.svg';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface FeedStockInfoProps {
  stockName: string;
  stockTickerCode: string;
}

interface PresentPrice {
  success: true;
  data: [
    {
      assetId: 0;
      currentPrice: string;
      currencyType: string;
      accessTime: '2023-09-14T06:03:13.450Z';
      sign: string;
      priceChange: string;
      priceChangeRate: string;
    },
  ];
  errorCode: string;
  message: string;
}

const useGetPresentPrice = () => {
  return useQuery({
    queryKey: ['presentPrice'],
    queryFn: () =>
      axios.get<PresentPrice>(
        'http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/asset/price',
        {
          params: {
            assetIds: 123,
          },
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

function FeedStockInfo({ stockName, stockTickerCode }: FeedStockInfoProps) {
  const getPresentPrice = useGetPresentPrice();

  const [inputCountValue, setInputCountValue] = useState('');
  const [inputPriceValue, setInputPriceValue] = useState('');
  const [error, setError] = useState('');

  const onClickPresentPrice = () => {
    const priceValue = getPresentPrice.data?.data.data[0].currentPrice;
    if (priceValue !== undefined) {
      setInputPriceValue(priceValue);
      // 오류 메시지 초기화
      setError('');
    }
  };

  const onDeleteStock = () => {
    // 삭제 내용 입력(Jotai)
  };

  const handleInputCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputCountValue(value);
    // 오류 메시지 초기화
    setError('');
  };
  const handleInputPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPriceValue(value);
    // 오류 메시지 초기화
    setError('');
  };
  const handleInputBlur = () => {
    if (inputCountValue.trim() === '' || inputPriceValue.trim() === '') {
      setError('* 보유 수량 및 가격을 정확히 입력해주세요.');
    }
  };

  return (
    <FeedStockInfoUI.Container>
      <FeedStockInfoUI.Item>
        <FeedStockInfoUI.TopContainer>
          <FeedStockInfoUI.NativeStockInfoContainer>
            <Image src={testCircleSvg} alt="testCircle Svg" />
            <div>
              <div>{stockName}</div>
              <div>{stockTickerCode}</div>
            </div>
          </FeedStockInfoUI.NativeStockInfoContainer>
          <FeedStockInfoUI.ButtonContainer onClick={onDeleteStock}>
            <Image src={trashSvg} alt="trash Svg" />
            <button>삭제</button>
          </FeedStockInfoUI.ButtonContainer>
        </FeedStockInfoUI.TopContainer>
        <FeedStockInfoUI.BottomContainer>
          <div>
            <input
              type="text"
              value={inputCountValue}
              placeholder="보유 수량"
              onChange={handleInputCountChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div>
            <input
              type="text"
              value={inputPriceValue}
              placeholder="구매 가격($)"
              onChange={handleInputPriceChange}
              onBlur={handleInputBlur}
            />
            <button onClick={onClickPresentPrice}>현재가 입력</button>
          </div>
        </FeedStockInfoUI.BottomContainer>
        {error && (
          <FeedStockInfoUI.ErrorContainer>
            {error}
          </FeedStockInfoUI.ErrorContainer>
        )}
      </FeedStockInfoUI.Item>
    </FeedStockInfoUI.Container>
  );
}

export default FeedStockInfo;
