import axios from 'axios';
import type { KakaoDefaultUserDataModel } from '@/@types/models/kakao';

type KakaoGetAccessTokenReponse = {
  access_token: string;
  token_type: 'bearer';
  refresh_token: string;
  expires_in: number;
  refresh_token_expires_in: number;
};

const kakaoOauthInstance = axios.create();
const KAKAO_API_URLS = {
  KAUTH: 'https://kauth.kakao.com/oauth',
  KAPI_V2: 'https://kapi.kakao.com/v2',
};
const POST_CONTENT_TYPE = 'application/x-www-form-urlencoded;charset=utf-8';

export const kakaoAPI = {
  getAccessToken: (code: string) => {
    return kakaoOauthInstance.post<KakaoGetAccessTokenReponse>(
      `${KAKAO_API_URLS.KAUTH}/token`,
      {},
      {
        headers: {
          'Content-type': POST_CONTENT_TYPE,
        },
        params: {
          grant_type: 'authorization_code',
          client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
          redirect_uri:
            process.env.NEXT_PUBLIC_KAKAO_REDIRECT_FRONT_SERVER_URI_TEST,
          code: code,
        },
      },
    );
  },
  getUserData: (accessToken: string) => {
    return kakaoOauthInstance.post<KakaoDefaultUserDataModel>(
      `${KAKAO_API_URLS.KAPI_V2}/user/me`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': POST_CONTENT_TYPE,
        },
      },
    );
  },
};
