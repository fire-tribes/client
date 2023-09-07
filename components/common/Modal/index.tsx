// <<<<<<< HEAD
import { ModalUI } from './style';
import { CSSProperties, createContext } from 'react';

// export type TPopupProps = {
//   children: React.ReactNode;
//   onClose?: () => void;
//   show: boolean;
//   disableBackgroundClick?: boolean;
//   minWidth?: CSSProperties['minWidth'];
//   position?: 'center' | 'bottom';
//   layout?: 'fill' | 'initial';
// };

interface TModalCSSProps {
  type?: 'alert' | 'confirm'; // 버튼 타입, default: alert
  show: boolean;
  disableBackgroundClick?: boolean;
  minWidth?: CSSProperties['minWidth'];
  position?: 'center' | 'bottom';
  layout?: 'fill' | 'initial';
}

export interface TModalProps extends TModalCSSProps {
  children: React.ReactNode;
  onClose?: () => void;
}

// const Popup = ({
//   children,
//   show,
//   onClose,
//   disableBackgroundClick,
//   minWidth = 400,
//   position = 'center',
//   layout = 'initial',
// }: TModalProps) => {
//   if (!show) return null;

//   return (
//     <ModalUI.Dimmed
//       position={position}

const CloseModalContext = createContext(() => {});

const Modal = ({
  show,
  disableBackgroundClick = false,
  minWidth = 400,
  position = 'center',
  layout = 'initial',
  children,
  onClose,
}: TModalProps) => {
  if (!show) return null;

  return (
    <ModalUI.Dimmed
      position={position}
      onClick={() => {
        if (disableBackgroundClick) return;

        if (onClose) onClose();
      }}
    >
      <CloseModalContext.Provider
        value={() => {
          if (onClose) onClose();
        }}
      >
        <ModalUI.Container
          minWidth={minWidth}
          layout={layout}
          position={position}
        >
          {children}
        </ModalUI.Container>
      </CloseModalContext.Provider>
    </ModalUI.Dimmed>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalUI.TitleWrapper>
      <ModalUI.Title>{children}</ModalUI.Title>
    </ModalUI.TitleWrapper>
  );
};

Modal.Title = Title;
Modal.ContentLabel = ModalUI.ContentLabel;
Modal.Content = ModalUI.Content;

Modal.Actions = ModalUI.Actions;
Modal.Button = ModalUI.Button;

export default Modal;
