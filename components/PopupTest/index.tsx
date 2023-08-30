import useControlPopup from '@/hook/useControlPopup';
import Popup from '@/components/common/Popup';
import CommonTextField from '@/components/common/TextField';
import { ChangeEvent, useState } from 'react';
import { red } from '@mui/material/colors';

red;

const PopupTest = () => {
  const { closePopup, isShow, openPopup } = useControlPopup();

  const [popupForm, setPopupForm] = useState({
    name: '',
  });

  const validate = () => {
    return popupForm.name.length >= 10;
  };
  const popupFormError = validate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPopupForm((pre) => ({ ...pre, name: value }));
  };

  return (
    <>
      <Popup show={isShow} onClose={() => closePopup()} disableBackgroundClick>
        <Popup.Title>알림</Popup.Title>
        <Popup.Content>
          <CommonTextField
            label="닉네임 최대 10자"
            helperText={popupFormError && '닉네임은 최대 10자만 가능해요'}
            onChange={onChange}
            error={popupFormError}
          ></CommonTextField>
        </Popup.Content>

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
