import { StyledLoginButton } from '@/components/Oauth/style';
import CommonFont from '@/components/common/Font';
import CommonIcon from '@/components/common/Icon';
import { signIn } from 'next-auth/react';

export default function KakaoLoginButtonV2() {
  return (
    <StyledLoginButton
      onClick={() =>
        signIn('kakao', {
          callbackUrl: '/login?start=true',
        })
      }
    >
      <CommonIcon iconName="kakao_icon" width={30} height={30} />
      <CommonFont fontSize="body2" fontWeight="bold">
        카카오톡 로그인
      </CommonFont>
    </StyledLoginButton>
  );
}
