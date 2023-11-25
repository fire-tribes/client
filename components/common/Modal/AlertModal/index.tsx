// import AlertModal from './style';
// import Toast from '../../Toast';
import Modal, { TModalProps } from '@/components/common/Modal';
// import useControlModal from '@/hook/useControlModal';
import { basic } from '@/styles/palette';
import { CenterModalV2 } from '@/components/commonV2/ModalV2/CenterModal';
import { useControlModalV2 } from '@/hook/useControlModalV2';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';
import * as React from 'react';
// import Snackbar from '@mui/material/Snackbar';
// import Slide, { SlideProps } from '@mui/material/Slide';
// import SnackbarContent from '@mui/material/SnackbarContent';
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
  // isShowToast: boolean;
  toastMessage?: string;
}

// function SlideTransition(props: SlideProps) {
//   return <Slide {...props} direction="up" />;
// }

// position = 'center',
// layout = 'fill',

// isShowToast,
// toastMessage,
function AlertModal({
  children,
  type = 'alert',
  title,
  message,
  onClickEvent,
  toastMessage,
}: AlertModalProps) {
  const { close } = useControlModalV2();
  const { openSnackbar, closeSnackbar } = useControlSnackbarV2();
  // const [showToast, setShowToast] = React.useState<{ open: boolean }>({
  //   open: false,
  // });

  const handleConfirmButton = () => () => {
    if (toastMessage !== undefined) {
      openSnackbar({
        message: toastMessage,
        autoHideDuration: 3 * 1000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => closeSnackbar(),
      });
    }

    if (onClickEvent !== undefined) {
      onClickEvent();
    }
    close();
  };

  return (
    <>
      <CenterModalV2
        title={title}
        content={message}
        button={
          <>
            {type === 'alert' && (
              <>
                <Modal.Button
                  onClick={close}
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
              <Modal.Button onClick={close}>확인</Modal.Button>
            )}
          </>
        }
      >
        {/* <Modal show={isShow} layout={layout} position={position}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Content>{message}</Modal.Content> */}

        {/* </Modal> */}
        {children}
      </CenterModalV2>
      {/* <Snackbar
        open={isShowToast ? showToast.open : false}
        onClose={handleClose}
        autoHideDuration={3 * 1000}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        TransitionComponent={SlideTransition}
        style={{
          position: 'absolute',
          left: '50%',
          right: 'auto',
          bottom: '12%',
          transform: 'translateX(-50%)',
          width: '398px',
          zIndex: '2',
        }}
      >
        <SnackbarContent
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
          message={<span id="client-snackbar">{toastMessage}</span>}
        />
      </Snackbar> */}
    </>
  );
}

export default AlertModal;
