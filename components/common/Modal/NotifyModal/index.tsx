import CommonFont from '@/components/Font';
import Modal, { TModalProps } from '@/components/common/Modal';
import { StyledTitleAlign } from '@/components/common/Modal/NotifyModal/styles';
import useControlModal from '@/hook/useControlModal';
import type { PropsWithChildren, ReactNode } from 'react';

type PickTModalPropsType = Pick<TModalProps, 'layout' | 'position'>;

interface NotifyModalProps extends PropsWithChildren, PickTModalPropsType {
  title: ReactNode;
  content: ReactNode;
  buttonText?: string;
}

export default function NotifyModal({
  children,
  title,
  content,
  buttonText = '확인',
  layout = 'fill',
  position = 'bottom',
}: NotifyModalProps) {
  const { isShow, openModal, closeModal } = useControlModal();

  return (
    <>
      <Modal show={isShow} layout={layout} position={position}>
        <Modal.Title>
          <StyledTitleAlign>
            <CommonFont fontSize="h4" fontWeight="bold">
              {title}
            </CommonFont>
          </StyledTitleAlign>
        </Modal.Title>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>
          <Modal.Button height={'54px'} onClick={closeModal}>
            {buttonText}
          </Modal.Button>
        </Modal.Actions>
      </Modal>
      <span onClick={openModal}>{children}</span>
    </>
  );
}
