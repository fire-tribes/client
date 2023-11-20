import { StyledLoginButton } from '@/components/Oauth/style';
import CommonFont from '@/components/common/Font';
import CommonIcon from '@/components/common/Icon';
import { useEmotionPalette } from '@/hook/useThemeHooks';
import { signIn } from 'next-auth/react';

export function GoogleLoginButton() {
  const palette = useEmotionPalette();
  return (
    <StyledLoginButton
      onClick={() =>
        signIn('google', {
          callbackUrl: '/login?start=true',
        })
      }
      backgroundColor={palette.sementic.google_login_button_background}
    >
      <CommonIcon iconName="google_icon" width={23} height={23} />
      <CommonFont fontSize="body2" fontWeight="bold">
        구글로 시작하기
      </CommonFont>
    </StyledLoginButton>
  );
}
