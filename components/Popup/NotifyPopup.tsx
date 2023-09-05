import Modal from '@/components/common/Modal';
import useControlPopup from '@/hook/useControlPopup';
import type { PropsWithChildren } from 'react';

export default function NotifyPopup({ children }: PropsWithChildren) {
  const { closePopup, isShow, openPopup } = useControlPopup();

  return (
    <>
      <Modal show={isShow} onClose={closePopup} disableBackgroundClick>
        <Modal.Title>알림</Modal.Title>
        <Modal.Content>준비중입니다.</Modal.Content>
        <Modal.Actions>
          <Modal.Button onClick={closePopup}>확인</Modal.Button>
        </Modal.Actions>
      </Modal>
      <span onClick={openPopup}>{children}</span>
    </>
  );
}
