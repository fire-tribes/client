import { FeedStockInfoUI } from './style';
import AlertModal from '../common/Modal/AlertModal';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';
import testCircleSvg from '@/public/icon/testCircle.svg';
import trashSvg from '@/public/icon/trash.svg';
import { basic } from '@/styles/palette';
import APIInstance from '@/core/api/instance';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface FeedStockInfoProps {
  stock: SelectedStocksAtomProps;
  removeSelected: (stock: SelectedStocksAtomProps) => void;
  // onClickPresentPriceButton?: (tickerCode: string) => void;
}

interface PresentPrice {
  success: true;
  data: [
    {
      assetId: number;
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

const useGetPresentPrice = (assetIds: number) => {
  return useQuery({
    queryKey: ['presentPrice', assetIds],
    queryFn: () =>
      APIInstance.get<PresentPrice>('asset/price', {
        params: {
          assetIds: assetIds,
        },
      }),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};

function FeedStockInfo({
  stock,
  removeSelected, // onClickPresentPriceButton,
}: FeedStockInfoProps) {
  console.log('stock: ', stock);
  console.log('stock.assetId: ', stock.assetId);
  // 이 시점에서 한번 불러온다.
  const { data: getPresentPrice, refetch } = useGetPresentPrice(stock.assetId);
  console.log('getPresentPrice: ', getPresentPrice);
  console.log('getPresentPrice?.data: ', getPresentPrice?.data);
  console.log('getPresentPrice?.data.data[0]: ', getPresentPrice?.data.data[0]);
  console.log(
    'getPresentPrice?.data.data[0].assetId: ',
    getPresentPrice?.data.data[0].assetId,
  );

  const [inputCountValue, setInputCountValue] = useState('');
  const [inputPriceValue, setInputPriceValue] = useState('');
  const [error, setError] = useState('');

  const currentPrice = getPresentPrice?.data.data[0].currentPrice;

  const onClickPresentPrice = () => {
    refetch();
    // 이미 데이터는 버튼을 클릭하지 않아도 불러온 상태
    // const currentPrice = getPresentPrice?.data.data[0].currentPrice;
    // // 여기서는 refetch 해주면 된다.
    // if (currentPrice !== undefined) {
    //   setInputPriceValue(currentPrice);
    //   // 오류 메시지 초기화
    //   setError('');
    // }
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
              <div>{stock.stockCode}</div>
              <div>{stock.stockCode}</div>
            </div>
          </FeedStockInfoUI.NativeStockInfoContainer>
          <AlertModal
            title={'종목 삭제'}
            message={'이 종목을 정말 삭제하시겠어요?'}
            onClickEvent={() => removeSelected(stock)}
            toastMessage={'종목을 삭제하였습니다.'}
          >
            <FeedStockInfoUI.ButtonContainer>
              <Image src={trashSvg} alt="trash Svg" />
              <button style={{ color: `${basic.gray6}`, fontWeight: 500 }}>
                삭제
              </button>
            </FeedStockInfoUI.ButtonContainer>
          </AlertModal>
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
              // value={inputPriceValue} 경락님 원래 작업
              value={currentPrice}
              placeholder="구매 가격($)"
              onChange={handleInputPriceChange}
              onBlur={handleInputBlur}
            />
            <button
              style={{ color: `${basic.point_blue02}`, fontWeight: 500 }}
              onClick={() => onClickPresentPrice()}
            >
              현재가 입력
            </button>
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
