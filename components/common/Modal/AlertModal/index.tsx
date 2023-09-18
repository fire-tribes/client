// import AlertModal from './style';
import Toast from '../../Toast';
import Modal, { TModalProps } from '@/components/common/Modal';
import useControlModal from '@/hook/useControlModal';
import { basic } from '@/styles/palette';
import type { PropsWithChildren } from 'react';

type PickTModalPropsType = Pick<TModalProps, 'layout' | 'position'>;
interface AlertModalCSSProps {
  type?: 'alert' | 'confirm'; // default: alert
}

interface AlertModalProps
  extends AlertModalCSSProps,
    PropsWithChildren,
    PickTModalPropsType {
  title: string;
  message: string;
  onClickEvent?: () => void;
  toastMessage?: string;
}

function AlertModal({
  children,
  type = 'alert',
  title,
  message,
  layout = 'fill',
  position = 'center',
  onClickEvent,
  toastMessage,
}: AlertModalProps) {
  const { isShow, openModal, closeModal } = useControlModal();

  return (
    <>
      <Modal show={isShow} layout={layout} position={position}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Content>{message}</Modal.Content>
        <Modal.Actions>
          {type === 'alert' && (
            <>
              <Modal.Button
                onClick={closeModal}
                style={{
                  backgroundColor: `${basic.gray2}`,
                  color: `${basic.gray9}`,
                }}
              >
                취소
              </Modal.Button>
              <Modal.Button
                onClick={onClickEvent}
                style={{
                  backgroundColor: `${basic.gray_blue}`,
                  color: `${basic.white}`,
                }}
              >
                <Toast toastMessage={toastMessage}>확인</Toast>
              </Modal.Button>
            </>
          )}
          {type === 'confirm' && (
            <Modal.Button onClick={closeModal}>확인</Modal.Button>
          )}
        </Modal.Actions>
      </Modal>
      <span onClick={openModal}>{children}</span>
    </>
  );
}

export default AlertModal;
