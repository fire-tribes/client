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
