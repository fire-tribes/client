import { PopupUI } from './style';
import { CSSProperties, createContext } from 'react';

type TPopupProps = {
  children: React.ReactNode;
  show: boolean;
  onClose?: () => void;
  disableBackgroundClick?: boolean;
  minWidth?: CSSProperties['minWidth'];
};

const ClosePopupContext = createContext(() => {});

const Popup = ({
  children,
  show,
  onClose,
  disableBackgroundClick,
  minWidth = 400,
}: TPopupProps) => {
  if (!show) return null;

  return (
    <PopupUI.Dimmed
      onClick={() => {
        if (disableBackgroundClick) return;

        if (onClose) onClose();
      }}
    >
      <ClosePopupContext.Provider
        value={() => {
          if (onClose) onClose();
        }}
      >
        <PopupUI.Container minWidth={minWidth}>{children}</PopupUI.Container>
      </ClosePopupContext.Provider>
    </PopupUI.Dimmed>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <PopupUI.TitleWrapper>
      <PopupUI.Title>{children}</PopupUI.Title>
    </PopupUI.TitleWrapper>
  );
};

Popup.Title = Title;
Popup.ContentLabel = PopupUI.ContentLabel;
Popup.Content = PopupUI.Content;

Popup.Actions = PopupUI.Actions;
Popup.Button = PopupUI.Button;

export default Popup;
