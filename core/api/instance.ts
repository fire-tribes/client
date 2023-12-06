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

const currentUrlHostname = global.location?.hostname;

export const productServerHostname =
  process.env.NEXT_PUBLIC_PRODUCT_SERVER_HOSTNAME;
export const productServerURL = process.env.NEXT_PUBLIC_SERVER_URL;
const devServerURL = process.env.NEXT_PUBLIC_DEV_SERVER_URL;

const baseURL =
  currentUrlHostname === productServerHostname
    ? productServerURL
    : devServerURL;

console.log('instance.ts baseURL', baseURL);

export const changeAuthAPIInstanceBaseUrlIntoProductServerUrl = (
  hostname: string,
) => {
  if (hostname === productServerHostname) {
    AuthAPIInstance.defaults.baseURL = productServerURL;
  }
};

console.log('instance.ts baseURL', baseURL);

const APIInstance = createAPIInstance({
  baseURL: baseURL + '/api/v1/',
});

const AuthAPIInstance = createAPIInstance({
  baseURL: baseURL + '/api/v1/user/',
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

AuthAPIInstance.interceptors.request.use((config) => {
  console.log('intercepter', config.baseURL);
  return config;
});

export { APIInstance, AuthAPIInstance };
export default APIInstance;
