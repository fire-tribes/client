import useControlPopup from '@/hook/useControlPopup';
import Popup from '@/components/common/Popup';

const PopupTest = () => {
  const { closePopup, isShow, openPopup } = useControlPopup();
  return (
    <>
      <Popup show={isShow} onClose={() => closePopup()} disableBackgroundClick>
        <Popup.Title>알림</Popup.Title>
        <Popup.Content>test</Popup.Content>

        <Popup.Actions>
          <Popup.Button onClick={() => closePopup()}>취소</Popup.Button>
          <Popup.Button onClick={() => closePopup()}>확인</Popup.Button>
        </Popup.Actions>
      </Popup>

      <button onClick={() => openPopup()}>팝업 테스트</button>
    </>
  );
};

export default PopupTest;
