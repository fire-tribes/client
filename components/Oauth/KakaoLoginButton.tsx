import { KakaoSDK } from '@/components/Oauth/KakaoSDK';
import { useKakaoLogin } from '@/hook/useKakaoLogin';
import { Snackbar } from '@mui/material';
import Image from 'next/image';

export const KakaoLoginButton = () => {
  const { open, isError, setIsError } = useKakaoLogin();

  return (
    <>
      <KakaoSDK />
      <a id="kakao_login_button" onClick={open}>
        <Image
          src="/images/kakao_login/ko/kakao_login_medium_narrow.png"
          alt="카카오 로그인 버튼"
          width={183}
          height={45}
          quality={100}
        />
      </a>
      {isError && (
        <Snackbar
          open={isError}
          message={'로그인 오류가 발생했습니다. 다시 시도해 주세요.'}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          ContentProps={{
            sx: {
              justifyContent: 'center',
            },
          }}
          onClose={() => setIsError(false)}
          sx={{
            bottom: '72px',
          }}
        ></Snackbar>
        // <Toast toastMessage="로그인 오류가 발생했습니다. 다시 시도해 주세요." />
      )}
    </>
  );
};
