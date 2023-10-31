import { StyledLoginButton } from '@/components/Oauth/style';
import CommonFont from '@/components/common/Font';
import CommonIcon from '@/components/common/Icon';
import { signIn } from 'next-auth/react';

export function GoogleLoginButton() {
  return (
    <StyledLoginButton
      onClick={() =>
        signIn('google', {
          callbackUrl: '/login?start=true',
        })
      }
    >
      <CommonIcon iconName="kakao_icon" width={30} height={30} />
      <CommonFont fontSize="body2" fontWeight="bold">
        구글 로그인
      </CommonFont>
    </StyledLoginButton>
  );
}
