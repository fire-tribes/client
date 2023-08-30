import axios from 'axios';

const kakaoOauthInstance = axios.create({
  baseURL: 'https://kauth.kakao.com/oauth/',
});

export const kakaoAPI = {
  getAccessToken: (code: string) => {
    return kakaoOauthInstance.post<KakaoGetAccessTokenReponse>(
      'token',
      {},
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        params: {
          grant_type: 'authorization_code',
          client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
          redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
          code: code,
        },
      },
    );
  },
};

type KakaoGetAccessTokenReponse = {
  access_token: string;
  token_type: 'bearer';
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
};
