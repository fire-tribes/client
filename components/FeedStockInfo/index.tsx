import { FeedStockInfoUI } from './style';
import AlertModal from '../common/Modal/AlertModal';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';
import testCircleSvg from '@/public/icon/testCircle.svg';
import trashSvg from '@/public/icon/trash.svg';
import { basic } from '@/styles/palette';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

interface FeedStockInfoProps {
  /** 선택한 배열의 객체값 */
  stock: SelectedStocksAtomProps;
  /** 선택한 값을 배열 삭제 */
  removeSelected: (stock: SelectedStocksAtomProps) => void;
  /** 현재가 입력 버튼 */
  currentPriceButton: () => void;
  /** 가격 input */
  inputCountValue: string;
  /** 가격 input */
  inputPriceValue: string;
  /** 수량이 변화했을 때, 발생하는 Event */
  changeCountEventHandle: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 가격이 변화했을 때, 발생하는 Event */
  changePriceEventHandle: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FeedStockInfo({
  stock,
  removeSelected,
  currentPriceButton,
  inputCountValue,
  inputPriceValue,
  changeCountEventHandle,
  changePriceEventHandle,
}: FeedStockInfoProps) {
  const [errorText, setErrorText] = useState('');

  /** 값을 입력하지 않았을 때, 발생시킬 Error 함수 */
  const handleInputBlur = () => {
    if (inputCountValue.trim() === '' || inputPriceValue.trim() === '') {
      setErrorText('* 보유 수량 및 가격을 정확히 입력해주세요.');
    }
  };
  return (
    <FeedStockInfoUI.Container>
      <FeedStockInfoUI.Item>
        <FeedStockInfoUI.TopContainer>
          <FeedStockInfoUI.NativeStockInfoContainer>
            <div>
              <div>{stock.name.split('')[0]}</div>
              <Image src={testCircleSvg} alt="testCircle Svg" />
            </div>
            <div>
              <div>{stock.name}</div>
              <div>{stock.tickerCode ? stock.tickerCode : stock.stockCode}</div>
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
              onChange={changeCountEventHandle}
              onBlur={handleInputBlur}
            />
          </div>
          <div>
            <input
              type="text"
              value={String(inputPriceValue)}
              placeholder="구매 가격($)"
              onChange={changePriceEventHandle}
              onBlur={handleInputBlur}
            />
            <button
              style={{ color: `${basic.point_blue02}`, fontWeight: 500 }}
              onClick={currentPriceButton}
            >
              현재가 입력
            </button>
          </div>
        </FeedStockInfoUI.BottomContainer>
        {errorText && (
          <FeedStockInfoUI.ErrorContainer>
            {errorText}
          </FeedStockInfoUI.ErrorContainer>
        )}
      </FeedStockInfoUI.Item>
    </FeedStockInfoUI.Container>
  );
}

export default FeedStockInfo;
