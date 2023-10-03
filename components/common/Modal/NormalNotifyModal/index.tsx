import Modal from '@/components/common/Modal';
import useControlModal from '@/hook/useControlModal';
import { PropsWithChildren, ReactNode } from 'react';

interface NormalNotifyModalProps extends PropsWithChildren {
  title: ReactNode;
  content: ReactNode;
  button: ReactNode;
}

export default function NormalNotifyModal({
  title,
  content,
  button,
  children,
}: NormalNotifyModalProps) {
  const { isShow, closeModal, openModal } = useControlModal();

  return (
    <>
      <Modal show={isShow} onClose={closeModal} maxWidth={328}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Actions>{button}</Modal.Actions>
      </Modal>
      <span onClick={openModal}>{children}</span>
    </>
  );
}
