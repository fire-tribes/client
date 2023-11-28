import { StyledLoginButton } from '@/components/Oauth/style';
import CommonFont from '@/components/common/Font';
import CommonIcon from '@/components/common/Icon';
import { useEmotionPalette } from '@/hook/useThemeHooks';
import { signIn } from 'next-auth/react';

export default function KakaoLoginButton() {
  const palette = useEmotionPalette();
  return (
    <StyledLoginButton
      onClick={() =>
        signIn('kakao', {
          callbackUrl: '/login?start=true',
        })
      }
      backgroundColor={palette.sementic.kakao_login_button_background}
    >
      <CommonIcon iconName="kakao_icon" width={30} height={30} />
      <CommonFont fontSize="body2" fontWeight="bold">
        카카오톡으로 시작하기
      </CommonFont>
    </StyledLoginButton>
  );
}
