/* eslint-disable react-hooks/exhaustive-deps */
import { Cookie } from '@/core/api/cookie';
import { SignApi } from '@/core/api/sign';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useKakaoLogin = () => {
  const router = useRouter();
  const { code } = router.query as { code?: string };
  const [isError, setIsError] = useState(false);

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
            router.push('/');
          }
        })
        .catch((err) => console.error(err));
    }
  }, [code]);

  const init = () => {
    if (window.Kakao?.isInitialized()) return;
    window.Kakao?.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  };

  const open = () => {
    const origin = window.location.origin;
    console.log(origin);

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
      const resposne = await SignApi.start(code);
      return resposne;
    } catch (err) {
      setIsError(true);
    }
  };

  return {
    init,
    open,
    start,
    isError,
    setIsError,
  };
};
