// import AlertModal from './style';
// import Toast from '../../Toast';
import Modal, { TModalProps } from '@/components/common/Modal';
import useControlModal from '@/hook/useControlModal';
// import useControlToast from '@/hook/useControlToast';
import { basic } from '@/styles/palette';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import SnackbarContent from '@mui/material/SnackbarContent';
// import Button from '@mui/material/Button';

type PickTModalPropsType = Pick<TModalProps, 'layout' | 'position'>;
interface AlertModalCSSProps {
  type?: 'alert' | 'confirm'; // default: alert
}

interface AlertModalProps
  extends AlertModalCSSProps,
    React.PropsWithChildren,
    PickTModalPropsType {
  title: string;
  message: string;
  onClickEvent?: () => void;
  toastMessage?: string;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
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
  // const { isShowToast, setIsShowToast } = useControlToast();

  const [showToast, setShowToast] = React.useState<{ open: boolean }>({
    open: false,
  });

  const handleConfirmButton = () => () => {
    setShowToast({
      open: true,
    });
    if (onClickEvent !== undefined) {
      onClickEvent();
    }
    // setIsShowToast(true);
    closeModal();
  };

  const handleClose = () => {
    setShowToast({
      ...showToast,
      open: false,
    });
  };

  // React.useEffect(() => {
  //   console.log('isShowToast: ', isShowToast);
  //   if (isShowToast) {
  //     setTimeout(() => {
  //       setIsShowToast(false);
  //     }, 3 * 1000);
  //   }
  // }, [isShowToast]);

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
                onClick={handleConfirmButton()}
                style={{
                  backgroundColor: `${basic.gray_blue}`,
                  color: `${basic.white}`,
                  padding: '12px 16px',
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
      {/* {isShowToast && <Toast toastMessage={toastMessage} />} */}
      <Snackbar
        open={showToast.open}
        onClose={handleClose}
        autoHideDuration={3 * 1000}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        TransitionComponent={SlideTransition}
        style={{ width: '398px', marginBottom: '100px', zIndex: '0' }}
      >
        <SnackbarContent
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
          message={<span id="client-snackbar">{toastMessage}</span>}
        />
      </Snackbar>
    </>
  );
}

export default AlertModal;
