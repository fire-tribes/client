import { KakaoSDK } from '@/components/Oauth/KakaoSDK';
import CommonFont from '@/components/common/Font';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';
import { useKakaoLogin } from '@/hook/useKakaoLogin';

import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect } from 'react';

export default function KakaoLoginButtonV2() {
  const { open, isLoading, setIsLoading, isError, setIsError } =
    useKakaoLogin();
  const { openSnackbar, closeSnackbar } = useControlSnackbarV2();

  useEffect(() => {
    if (isLoading) {
      openSnackbar({
        message: '로그인 중입니다.',
        autoHideDuration: 3 * 1000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => {
          setIsLoading(false);
          closeSnackbar();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      openSnackbar({
        message: '로그인 오류가 발생했습니다. 다시 시도해 주세요.',
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => {
          setIsError(false);
          closeSnackbar();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <>
      <KakaoSDK />
      <S.KakaoLoginButtonContainer href="#" onClick={open}>
        <Image src="/icon/kako_icon.svg" alt="kakao" width={30} height={30} />
        <CommonFont fontSize="body2" fontWeight="bold">
          카카오톡 로그인
        </CommonFont>
      </S.KakaoLoginButtonContainer>
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
