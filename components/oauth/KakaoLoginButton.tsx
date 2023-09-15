import { useKakaoLogin } from '@/hook/useKakaoLogin';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const KakaoLoginButton = () => {
  const router = useRouter();
  const { code } = router.query as { code?: string };
  const { init, open, start } = useKakaoLogin();

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (code && code.length > 0) {
      start(code)
        .then((response) => console.log(response, 'success login'))
        .catch((err) => console.error(err));
    }
  }, [code, start]);

  return (
    <a id="kakao_login_button" onClick={open}>
      <img
        src="images/kakao_login/ko/kakao_login_medium_narrow.png"
        alt="카카오 로그인 버튼"
      />
    </a>
  );
};
