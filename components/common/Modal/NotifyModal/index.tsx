import Popup, { TPopupProps } from '@/components/common/Modal';
import useControlPopup from '@/hook/useControlPopup';
import { PropsWithChildren, ReactNode } from 'react';

type PickTPopupPropsType = Pick<TPopupProps, 'layout' | 'position'>;

interface NotifyModalProps extends PropsWithChildren, PickTPopupPropsType {
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
  const { isShow, openPopup, closePopup } = useControlPopup();

  return (
    <>
      <Popup show={isShow} layout={layout} position={position}>
        <Popup.Title>{title}</Popup.Title>
        <Popup.Content>{content}</Popup.Content>
        <Popup.Actions>
          <Popup.Button onClick={closePopup}>{buttonText}</Popup.Button>
        </Popup.Actions>
      </Popup>
      <span onClick={openPopup}>{children}</span>
    </>
  );
}
