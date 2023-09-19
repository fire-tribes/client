import { Cookie } from '@/core/api/cookie';
import { Token } from '@/core/api/token';
import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

const AUTHORIZATION = 'Authorization';

const createAPIInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    ...config,
  });

  return instance;
};

const APIInstance = createAPIInstance({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/v1/',
});

const AuthAPIInstance = createAPIInstance({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/v1/user/',
  withCredentials: true,
  headers: {
    [AUTHORIZATION]: process.env.SECRET_KEY as string,
  },
});

const tokenVerifyHandler = (config: AxiosRequestConfig) => {
  if (config.headers) {
    const accessToken = token.get();
    config.headers[AUTHORIZATION] = `Bearer ${accessToken}`;
  }

  return config;
};

const token = new Token({
  cookie: new Cookie(),
  apiHeaders: APIInstance.defaults.headers,
});

APIInstance.interceptors.request.use(tokenVerifyHandler);
APIInstance.interceptors.response.use();

export { APIInstance, AuthAPIInstance };
export default APIInstance;
