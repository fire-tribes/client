import { ModalUI } from './style';
import { CSSProperties, createContext } from 'react';

interface TModalCSSProps {
  type?: 'alert' | 'confirm'; // 버튼 타입, default: alert
  show: boolean;
  disableBackgroundClick?: boolean;
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  position?: 'center' | 'bottom';
  layout?: 'fill' | 'initial';
}

export interface TModalProps extends TModalCSSProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const CloseModalContext = createContext(() => {});

const Modal = ({
  show,
  disableBackgroundClick = false,
  minWidth = 400,
  maxWidth,
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
          maxWidth={maxWidth}
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
