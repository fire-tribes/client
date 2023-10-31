import { ResponseSuccess } from '@/@types/models/response';
import { SignResponseModel } from '@/@types/models/signUp';
import { Cookie } from '@/core/api/cookie';
import { ACCESS_TOKEN } from '@/core/api/token';
import { decodingJWT } from '@/core/utils/decodingJWT';
import { useAmplitudeLogger } from '@/hook/useAmplitudes/useAmplitudeLogger';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';
import { AccessTokenDecodingResult } from '@/hook/useDecodingAccessToken';
import { SignAPIParams } from '@/hook/useCallServiceLoginWithSession';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';

export const startSignAPI = async ({ email, provider }: SignAPIParams) => {
  const { data } = await axios.get<ResponseSuccess<SignResponseModel>>(
    '/api/oauth/login',
    {
      params: {
        email,
        provider,
      },
    },
  );

  return data;
};

function setAccessTokenInCookie(
  accessToken: string,
  accessTokenExpiresIn: Date,
) {
  const cookie = new Cookie();
  cookie.set(ACCESS_TOKEN, accessToken, {
    expires: new Date(accessTokenExpiresIn),
  });
}

export const useOauthLoginMutaion = () => {
  const router = useRouter();
  const { eventLogger } = useAmplitudeLogger();
  const { openSnackbar, closeSnackbar } = useControlSnackbarV2();

  const redirectMainAfterTrackEvent = () => {
    const decodedJWT = decodingJWT<AccessTokenDecodingResult>(ACCESS_TOKEN);
    router.push('/').then(
      (value) =>
        value &&
        eventLogger({
          event_type: 'INITIAL_MAIN_VIEW',
          event_properties: decodedJWT
            ? {
                email: decodedJWT.email,
                userId: decodedJWT.userId,
              }
            : undefined,
        }),
    );
  };

  return useMutation(startSignAPI, {
    onMutate: () => {
      openSnackbar({
        message: '로그인 중입니다.',
        autoHideDuration: 5 * 1000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => {
          closeSnackbar();
        },
      });
    },
    onSuccess: (response) => {
      const accessToken = response.data.login.token.accessToken;
      const accessTokenExpiresIn =
        response.data.login.token.accessTokenExpiresIn;

      if (accessToken && accessTokenExpiresIn) {
        setAccessTokenInCookie(accessToken, accessTokenExpiresIn);
        redirectMainAfterTrackEvent();
      }
    },
    onError: (err) => {
      console.error(err);
      openSnackbar({
        message: '로그인 오류가 발생했습니다. 다시 시도해 주세요.',
        autoHideDuration: 3 * 1000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => {
          closeSnackbar();
        },
      });
    },
  });
};
