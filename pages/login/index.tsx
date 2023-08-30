import { KakaoLoginButton } from '@/components/oauth/KakaoLoginButton';
import { useKakaoLogin } from '@/hook/useKakaoLogin';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LoginPage = () => {
  const { query } = useRouter();
  const { code } = query as { code: string };
  const { kakaoLogin } = useKakaoLogin();

  useEffect(() => {
    if (!code) return;

    kakaoLogin(code);
  }, [code, kakaoLogin]);

  // TODO: 카카오 로그인이 되어있는 경우 해당 버튼을 렌더링해서는 안된다.
  return <KakaoLoginButton />;
};

export default LoginPage;
