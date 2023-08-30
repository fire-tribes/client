import { kakaoAPI } from '@/core/api/kakao';
import { SignApi } from '@/core/api/oauth';
import { useEffect, useState } from 'react';

type kakaoUserData = {
  id: string;
};

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
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };

  const getUserData = async (): Promise<kakaoUserData> => {
    const useData = await kakao?.API.request({
      url: '/v2/user/me',
    });

    return useData;
  };

  const getAccessToken = async (code: string) => {
    const { data } = await kakaoAPI.getAccessToken(code);

    return data;
  };

  const setAccessToken = (accessToken: string) => {
    kakao?.Auth.setAccessToken(accessToken);
  };

  const myServiceLogin = (userData: kakaoUserData) => {
    SignApi.login(userData.id);
  };

  const kakaoLogin = async (code: string) => {
    if (!code) return;

    const { access_token } = await getAccessToken(code);
    setAccessToken(access_token);

    const userData = await getUserData();
    myServiceLogin(userData);
  };

  return { init, open, kakaoLogin };
};
