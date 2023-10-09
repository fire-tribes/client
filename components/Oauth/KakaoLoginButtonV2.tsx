import { KakaoSDK } from '@/components/Oauth/KakaoSDK';
import CommonFont from '@/components/common/Font';
import { useKakaoLogin } from '@/hook/useKakaoLogin';
import styled from '@emotion/styled';
import { Snackbar } from '@mui/material';
import Image from 'next/image';

export default function KakaoLoginButtonV2() {
  const { open, isError, setIsError } = useKakaoLogin();

  return (
    <>
      <KakaoSDK />
      <S.KakaoLoginButtonContainer href="#" onClick={open}>
        <Image src="/icon/kako_icon.svg" alt="kakao" width={30} height={30} />
        <CommonFont fontSize="body2" fontWeight="bold">
          카카오톡 로그인
        </CommonFont>
      </S.KakaoLoginButtonContainer>
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
      )}
    </>
  );
}

const S = {
  KakaoLoginButtonContainer: styled('a')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    width: 168px;
    height: 58px;
    padding: 14px 18px;

    border-radius: 80px;
    background-color: #faea05;
  `,
};
