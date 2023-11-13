import { CurrencyTypeChoiceBottomSheetModalUI } from './style';
import { BottomSheetModalV2 } from '../BottomSheetModal';
import CommonFont from '@/components/common/Font';
import Modal from '@/components/common/Modal';
// import { useControlModalV2 } from '@/hook/useControlModalV2';
import { ReactNode } from 'react';

interface CurrencyTypeChoiceBottomSheetModalProps {
  children: ReactNode;
  changeCurrencyType: string;
  handleCurrencyType: (newCurrencyType: 'KRW' | 'USD') => void;
}

function CurrencyTypeChoiceBottomSheetModal({
  children,
  changeCurrencyType,
  handleCurrencyType,
}: CurrencyTypeChoiceBottomSheetModalProps) {
  // const { open, close } = useControlModalV2();
  const isCheckedUSD = changeCurrencyType === 'USD';
  const isCheckedKRW = changeCurrencyType === 'KRW';

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
              onChange={() => handleCurrencyType('USD')}
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
              onChange={() => handleCurrencyType('KRW')}
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
