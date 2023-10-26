/* eslint-disable react-hooks/exhaustive-deps */
import { Cookie } from '@/core/api/cookie';
import { SignApi } from '@/core/api/sign';
import { ACCESS_TOKEN } from '@/core/api/token';
import { decodingJWT } from '@/core/utils/decodingJWT';
import { useAmplitudeLogger } from '@/hook/useAmplitudes/useAmplitudeLogger';
import { AccessTokenDecodingResult } from '@/hook/useDecodingAccessToken';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useKakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query as { code?: string };
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { eventLogger } = useAmplitudeLogger();

  useEffect(() => {
    if (code) return;
    init();
  }, []);

  useEffect(() => {
    if (isError) {
      router.push('/login');
    }
  }, [isError]);

  useEffect(() => {
    if (code && code.length > 0) {
      setIsLoading(true);

      start(code)
        .then((response) => {
          const accessToken = response?.data.data.login.token.accessToken;
          const accessTokenExpiresIn =
            response?.data.data.login.token.accessTokenExpiresIn;

          if (accessToken && accessTokenExpiresIn) {
            const cookie = new Cookie();
            cookie.set('accessToken', accessToken, {
              expires: new Date(accessTokenExpiresIn),
            });

            const decodedJWT =
              decodingJWT<AccessTokenDecodingResult>(ACCESS_TOKEN);

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
            return;
          }

          setIsLoading(false);
          setIsError(true);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [code]);

  const init = () => {
    if (window.Kakao?.isInitialized()) return;
    window.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  };

  const open = () => {
    const origin = window.location.origin;

    if (process.env.NEXT_PUBLIC_LOCAL_SERVER_ORIGIN === origin) {
      window.Kakao?.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_LOCAL_SERVER_KAKAO_REDIRECT_URL,
      });

      return;
    }

    if (process.env.NEXT_PUBLIC_DEV_SERVER_ORIGIN === origin) {
      window.Kakao?.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_DEV_SERVER_KAKAO_REDIRECT_URL,
      });

      return;
    }

    if (process.env.NEXT_PUBLIC_PRODUCT_SERVER_ORIGIN === origin) {
      window.Kakao?.Auth.authorize({
        redirectUri: process.env.NEXT_PUBLIC_PRODUCT_SERVER_KAKAO_REDIRECT_URL,
      });

      return;
    }
  };

  const start = async (code: string) => {
    if (!code || (code && isError)) return;

    try {
      const response = await SignApi.start(code);

      if (!response.data.success) {
        throw new Error();
      }

      return response;
    } catch (err) {
      throw Error(JSON.stringify(err));
    }
  };

  return {
    init,
    open,
    start,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  };
};
