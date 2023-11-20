import LayoutV2 from '@/components/commonV2/Layout';
import CenterContent from '@/components/commonV2/CenterContent';
import CommonFont from '@/components/common/Font';
import KakaoLoginButton from '@/components/Oauth/KakaoLoginButton';

import { GoogleLoginButton } from '@/components/Oauth/GoogleLoginButton';
import { useCallServiceLoginWithSession } from '@/hook/useCallServiceLoginWithSession';
import Image from 'next/image';
import styled from '@emotion/styled';

const GUIDE_TEXT = `배당주 계산과 관리를 `;
const GUIDE_TEXT_SECOND = '가장 쉽고 편하게 하는 방법';

const LoginPage = () => {
  useCallServiceLoginWithSession();

  return (
    <LayoutV2
      showBottomNavigator={false}
      headMetaProps={{
        title: '스노우볼 - 로그인',
      }}
    >
      <CenterContent>
        <LoginPageUI.Content>
          <Image
            src={'/images/LOGO.png'}
            width={237}
            height={55}
            alt="snowball_label"
          />

          <LoginPageUI.Title>
            <CommonFont component="h2" fontSize="h2" fontWeight="normal">
              {GUIDE_TEXT}
            </CommonFont>
            <CommonFont component="h2" fontSize="h2" fontWeight="normal">
              {GUIDE_TEXT_SECOND}
            </CommonFont>
          </LoginPageUI.Title>

          <LoginPageUI.Padding>
            <LoginPageUI.LoginButtons>
              <KakaoLoginButton />
              <GoogleLoginButton />
            </LoginPageUI.LoginButtons>
          </LoginPageUI.Padding>
        </LoginPageUI.Content>
      </CenterContent>
    </LayoutV2>
  );
};

export default LoginPage;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 54px;
  text-align: center;

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

const LoginButtons = styled.div`
  display: grid;
  row-gap: 10px;
`;

const LoginPageUI = {
  Content,
  Title,
  SubTitle,
  Padding,
  LoginButtons,
};
