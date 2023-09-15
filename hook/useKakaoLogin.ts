import { SignApi } from '@/core/api/sign';
import { useEffect, useState } from 'react';

export const useKakaoLogin = () => {
  const [kakao, setKakao] = useState<typeof window.Kakao>(null);

  useEffect(() => {
    if (window?.Kakao) setKakao(window?.Kakao);
  }, []);

  const init = () => {
    if (kakao?.isInitialized()) return;
    kakao?.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  };

  const open = () => {
    kakao?.Auth.authorize({
      redirectUri:
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_DEV
          : process.env.NODE_ENV === 'production' &&
            process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_PRODUCTION,
    });
  };

  const start = async (code: string) => {
    if (!code) return;

    const resposne = await SignApi.start(code);
    return resposne;
  };

  return {
    init,
    open,
    start,
  };
};
