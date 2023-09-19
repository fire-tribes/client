// import AlertModal from './style';
import Toast from '../../Toast';
import Modal, { TModalProps } from '@/components/common/Modal';
import useControlModal from '@/hook/useControlModal';
import { basic } from '@/styles/palette';
import { useState, type PropsWithChildren, useEffect } from 'react';

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
  const [isShowToast, setIsShowToast] = useState(false);

  const handleConfirmButton = () => {
    if (onClickEvent !== undefined) onClickEvent();
    setIsShowToast(true);
    closeModal();
  };

  useEffect(() => {
    if (isShowToast) {
      setTimeout(() => setIsShowToast(false), 3000);
    }
  }, [isShowToast]);

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
                onClick={() => handleConfirmButton()}
                style={{
                  backgroundColor: `${basic.gray_blue}`,
                  color: `${basic.white}`,
                  padding: 0,
                }}
              >
                확인
              </Modal.Button>
            </>
          )}
          {type === 'confirm' && (
            <Modal.Button onClick={closeModal}>확인</Modal.Button>
          )}
        </Modal.Actions>
      </Modal>
      <span onClick={openModal}>{children}</span>
      {isShowToast && <Toast toastMessage={toastMessage} />}
    </>
  );
}

export default AlertModal;
