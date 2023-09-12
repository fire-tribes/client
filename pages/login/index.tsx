import { KakaoLoginButton } from '@/components/oauth/KakaoLoginButton';
import { LoginPageUI } from '@/pages/login/styles';
import Image from 'next/image';

const GUIDE_TEXT = `배당주 계산과 관리를 가장 쉽고 편하게 하는 방법`;

const LoginPage = () => {
  // TODO: Layout Component 적용할예정
  return (
    <LoginPageUI.Layout>
      <LoginPageUI.Content>
        <Image
          src={'/images/snowball_label.png'}
          width={214}
          height={40}
          alt="snowball_label"
        />
        <LoginPageUI.Title>{GUIDE_TEXT}</LoginPageUI.Title>
        <LoginPageUI.SubTitle>
          카카오 톡으로 3초만에 시작하기
        </LoginPageUI.SubTitle>
        <LoginPageUI.Padding>
          <KakaoLoginButton />
        </LoginPageUI.Padding>
      </LoginPageUI.Content>
    </LoginPageUI.Layout>
  );
};

export default LoginPage;
