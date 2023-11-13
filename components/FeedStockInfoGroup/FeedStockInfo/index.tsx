import { FeedStockInfoUI } from './style';
import AlertModal from '@/components/common/Modal/AlertModal';
import CurrencyTypeChoiceBottomSheetModal from '@/components/commonV2/ModalV2/CurrencyTypeChoiceBottomSheetModal';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';
import trashSvg from '@/public/icon/trash.svg';
import belowArrowSvg from '@/public/icon/below_arrow.svg';
import { basic } from '@/styles/palette';
import StockAvatar from '@/components/common/StockAvatar';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
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
  /** CurrencyType 변화 함수 */
  handleCurrencyType: (newCurrencyType: ExchangeRateSymbol) => void;
}

function FeedStockInfo({
  stock,
  removeSelected,
  currentPriceButton,
  inputCountValue,
  inputPriceValue,
  changeCountEventHandle,
  changePriceEventHandle,
  handleCurrencyType,
}: FeedStockInfoProps) {
  /** COMPLETED: 값을 입력하지 않았을 때, Error 발생시키기 */
  const [errorText, setErrorText] = useState('');
  const handleInputBlur = () => {
    if (inputCountValue.trim() === '' || inputPriceValue.trim() === '') {
      setErrorText('* 보유 수량 및 가격을 정확히 입력해주세요.');
    } else if (
      parseInt(inputCountValue, 10) <= 0 ||
      parseFloat(inputPriceValue) <= 0
    ) {
      setErrorText('* 보유 수량 및 가격은 0보다 값이 커야 합니다.');
    } else {
      setErrorText('');
    }
  };

  return (
    <FeedStockInfoUI.Container>
      <FeedStockInfoUI.Item>
        <FeedStockInfoUI.TopContainer>
          <FeedStockInfoUI.NativeStockInfoContainer>
            <StockAvatar
              tickerCode={stock.tickerCode}
              stockCode={stock.stockCode}
            />
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
              value={String(inputCountValue)}
              placeholder="보유 수량"
              onChange={changeCountEventHandle}
              onBlur={handleInputBlur}
            />
          </div>
          <div>
            <CurrencyTypeChoiceBottomSheetModal
              changeCurrencyType={stock.currencyType}
              handleCurrencyType={handleCurrencyType}
            >
              <FeedStockInfoUI.CurrencyChangeButton>
                <span>{stock.currencyType === 'KRW' ? '원화' : '달러'}</span>
                <Image src={belowArrowSvg} alt="belowArrow Svg" />
              </FeedStockInfoUI.CurrencyChangeButton>
            </CurrencyTypeChoiceBottomSheetModal>
            <div>{stock.currencyType === 'KRW' ? '₩' : '$'}</div>
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
