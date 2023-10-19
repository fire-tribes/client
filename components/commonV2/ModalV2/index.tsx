import ModalV2Styled from './style';
import { useControlModalV2 } from '@/hook/useControlModalV2';

export function ModalV2() {
  const { modalState } = useControlModalV2();

  return (
    <ModalV2Styled.ModalDimmed isBottomSheet={modalState.options.isBottomSheet}>
      {modalState.options.isBottomSheet ? (
        <ModalV2Styled.BottomSheetModalContainer>
          {modalState.content}
        </ModalV2Styled.BottomSheetModalContainer>
      ) : (
        <ModalV2Styled.ModalContainer>
          {modalState.content}
        </ModalV2Styled.ModalContainer>
      )}
    </ModalV2Styled.ModalDimmed>
  );
}
