import ModalV2Styled from './style';

import Modal from '@/components/common/Modal';
import { useControlModalV2 } from '@/hook/useControlModal';

import { PropsWithChildren, ReactNode } from 'react';

interface BottomSheetModalV2Props extends PropsWithChildren {
  title: ReactNode;
  content: ReactNode;
  button: ReactNode;
}

export function BottomSheetModalV2({
  title,
  content,
  button,
  children,
}: BottomSheetModalV2Props) {
  const { open, close } = useControlModalV2();

  const onClick = () =>
    open(
      <>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions onClick={close}>{button}</Modal.Actions>
      </>,
      {
        isBottomSheet: true,
      },
    );

  return <span onClick={onClick}>{children}</span>;
}

// 컨텐츠를 만들어야한다...
interface CenterModalV2Props extends PropsWithChildren {
  title: ReactNode;
  content: ReactNode;
  button: ReactNode;
}

export function CenterModalV2({
  title,
  content,
  button,
  children,
}: CenterModalV2Props) {
  const { open, close } = useControlModalV2();

  const onClick = () =>
    open(
      <>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions onClick={close}>{button}</Modal.Actions>
      </>,
    );

  return <span onClick={onClick}>{children}</span>;
}

export function ModalV2() {
  const { modalState } = useControlModalV2();

  return (
    <ModalV2Styled.ModalDimmed isBottomSheet={modalState.options.isBottomSheet}>
      {modalState.options.isBottomSheet ? (
        <ModalV2Styled.BotommSheetModalContainer>
          {modalState.content}
        </ModalV2Styled.BotommSheetModalContainer>
      ) : (
        <ModalV2Styled.ModalContainer>
          {modalState.content}
        </ModalV2Styled.ModalContainer>
      )}
    </ModalV2Styled.ModalDimmed>
  );
}
