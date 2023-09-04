import Popup from '@/components/common/Popup';
import useControlPopup from '@/hook/useControlPopup';
import type { PropsWithChildren } from 'react';

export default function NotifyPopup({ children }: PropsWithChildren) {
  const { closePopup, isShow, openPopup } = useControlPopup();

  return (
    <>
      <Popup show={isShow} onClose={closePopup} disableBackgroundClick>
        <Popup.Title>알림</Popup.Title>
        <Popup.Content>준비중입니다.</Popup.Content>
        <Popup.Actions>
          <Popup.Button onClick={closePopup}>확인</Popup.Button>
        </Popup.Actions>
      </Popup>
      <span onClick={openPopup}>{children}</span>
    </>
  );
}
