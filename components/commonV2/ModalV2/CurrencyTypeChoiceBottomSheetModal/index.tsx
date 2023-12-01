import { CurrencyTypeChoiceBottomSheetModalUI } from './style';
import { BottomSheetModalV2 } from '../BottomSheetModal';
import CommonFont from '@/components/common/Font';
import Modal from '@/components/common/Modal';
// import { useControlModalV2 } from '@/hook/useControlModalV2';
// import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import { HandleCurrencyTypeFunction } from '@/components/FeedStockInfoGroup/FeedStockInfos';
import { ReactNode } from 'react';
// import { useAtom } from 'jotai';
// import { HandleCurrencyTypeFunction } from '';

interface CurrencyTypeChoiceBottomSheetModalProps {
  children: ReactNode;
  index: number;
  changeCurrencyType: string;
  handleCurrencyType: HandleCurrencyTypeFunction;
}

function CurrencyTypeChoiceBottomSheetModal({
  children,
  index,
  changeCurrencyType,
  handleCurrencyType,
}: CurrencyTypeChoiceBottomSheetModalProps) {
  // const { open, close } = useControlModalV2();
  const isCheckedUSD = changeCurrencyType === 'USD';
  const isCheckedKRW = changeCurrencyType === 'KRW';
  // const [selectedStocks] = useAtom(selectedStocksAtom);

  return (
    <BottomSheetModalV2
      title={
        <CommonFont
          fontSize="h4"
          fontWeight="bold"
          textAlign="left"
          component="h4"
        >
          통화 변환
        </CommonFont>
      }
      content={
        <CurrencyTypeChoiceBottomSheetModalUI.RadioContainer>
          <CurrencyTypeChoiceBottomSheetModalUI.Label>
            <input
              type="radio"
              value="달러"
              name="CurrencyType"
              // checked={isCheckedUSD}
              defaultChecked={isCheckedUSD}
              onChange={() =>
                handleCurrencyType({ newCurrencyType: 'USD', index })
              }
            />
            <CommonFont fontSize="body1" fontWeight="normal">
              달러
            </CommonFont>
          </CurrencyTypeChoiceBottomSheetModalUI.Label>
          <CurrencyTypeChoiceBottomSheetModalUI.Label>
            <input
              type="radio"
              value="원화"
              name="CurrencyType"
              // checked={isCheckedKRW}
              defaultChecked={isCheckedKRW}
              onChange={() =>
                handleCurrencyType({ newCurrencyType: 'KRW', index })
              }
            />
            <CommonFont fontSize="body1" fontWeight="normal">
              원화
            </CommonFont>
          </CurrencyTypeChoiceBottomSheetModalUI.Label>
        </CurrencyTypeChoiceBottomSheetModalUI.RadioContainer>
      }
      button={<Modal.Button height={'54px'}>확인</Modal.Button>}
    >
      {children}
    </BottomSheetModalV2>
  );
}

export default CurrencyTypeChoiceBottomSheetModal;
