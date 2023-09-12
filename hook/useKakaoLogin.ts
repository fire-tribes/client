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
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_FRONT_SERVER_URI_TEST,
    });
  };

  return {
    init,
    open,
  };
};
