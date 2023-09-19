import { KakaoLoginButton } from '@/components/oauth/KakaoLoginButton';
import Layout from '@/components/common/Layout';
import CommonCenter from '@/components/common/Center';
import Image from 'next/image';

const GUIDE_TEXT = `배당주 계산과 관리를 가장 쉽고 편하게 하는 방법`;

const LoginPage = () => {
  return (
    <Layout showBottomNavigator={false}>
      <CommonCenter>
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
      </CommonCenter>
    </Layout>
  );
};

export default LoginPage;

import styled from '@emotion/styled';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  gap: 48 20;
`;

const Title = styled.h2`
  margin-top: 48px;
  margin-bottom: 32px;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.body3};
`;

const Padding = styled.div`
  padding-top: 15px;
`;

const LoginPageUI = {
  Content,
  Title,
  SubTitle,
  Padding,
};
