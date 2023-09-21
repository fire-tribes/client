import { KakaoSDK } from '@/components/Oauth/KakaoSDK';
import { Cookie } from '@/core/api/cookie';
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
        .then((response) => {
          const accessToken = response?.data.data.login.token.accessToken;
          if (accessToken) {
            const cookie = new Cookie();
            cookie.set('accessToken', accessToken);
            router.push('/');
          }
        })
        .catch((err) => console.error(err));
    }
  }, [code, router, start]);

  return (
    <>
      <KakaoSDK />
      <a id="kakao_login_button" onClick={open}>
        <img
          src="images/kakao_login/ko/kakao_login_medium_narrow.png"
          alt="카카오 로그인 버튼"
        />
      </a>
    </>
  );
};
