import { useKakaoLogin } from '@/hook/useKakaoLogin';
import { useEffect } from 'react';

export const KakaoLoginButton = () => {
  const { init, open } = useKakaoLogin();

  useEffect(() => {
    init();
  }, [init]);

  return (
    <a id="kakao_login_button" onClick={open}>
      <img
        src="images/kakao_login/ko/kakao_login_medium_narrow.png"
        alt="카카오 로그인 버튼"
      />
    </a>
  );
};
