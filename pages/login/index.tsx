import { KakaoLoginButton } from '@/components/oauth/KakaoLoginButton';

const LoginPage = () => {
  // TODO: 카카오 로그인이 되어있는 경우 해당 버튼을 렌더링해서는 안된다.
  return <KakaoLoginButton />;
};

export default LoginPage;
