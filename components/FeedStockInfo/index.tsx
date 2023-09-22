import { FeedStockInfoUI } from './style';
import AlertModal from '../common/Modal/AlertModal';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';
import testCircleSvg from '@/public/icon/testCircle.svg';
import trashSvg from '@/public/icon/trash.svg';
import { basic } from '@/styles/palette';
import { useGetPresentPrice } from '@/hook/useGetPresentPrice';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface FeedStockInfoProps {
  /** 선택한 배열의 객체값 */
  stock: SelectedStocksAtomProps;
  /** 선택한 값을 배열 삭제 */
  removeSelected: (stock: SelectedStocksAtomProps) => void;
}

function FeedStockInfo({
  stock,
  removeSelected, // onClickPresentPriceButton,
}: FeedStockInfoProps) {
  console.log('stock: ', stock);
  console.log('stock.assetId: ', stock.assetId);
  // 이 시점에서 한번 불러온다.
  const { getPresentPriceData } = useGetPresentPrice(stock.assetId);
  const presentPrice =
    getPresentPriceData !== undefined && getPresentPriceData[0].currentPrice;
  console.log('presentPrice: ', presentPrice);

  const [inputCountValue, setInputCountValue] = useState('');
  const [inputPriceValue, setInputPriceValue] = useState('');
  const [error, setError] = useState('');

  const onClickPresentPrice = () => {
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
    setError('');
  };
  const handleInputPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPriceValue(value);

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
              value={inputPriceValue}
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
