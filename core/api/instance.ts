import { Cookie } from '@/core/api/cookie';
import { Token } from '@/core/api/token';
import axios, { type AxiosError } from 'axios';
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

export const changeAuthAPIInstanceBaseUrlIntoProductServerUrl = (
  hostname: string,
) => {
  if (hostname === productServerHostname) {
    const newBaseURL = productServerURL + '/api/v1/user/';
    AuthAPIInstance.defaults.baseURL = newBaseURL;
  }
};

export const isProductionServer = (hostname: string) => {
  if (hostname === productServerHostname) {
    return true;
  }

  return false;
};

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

export const SlackAPIInstance = createAPIInstance({
  baseURL: process.env.NEXT_PUBLIC_SLACK_ERROR_ALARM_URL,
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

const createSlackAlarmMessage = (err: AxiosError) => {
  return {
    message: `
*Method* : [${err.config.method?.toUpperCase()}]
*End Point* : ${err.config.baseURL}${err.config.url}
*Description* : *name*: ${err.name}, *message*: ${err.message}
`,
  };
};

const sendSlackAlarmToNextApiRoutes = (err: AxiosError) => {
  return axios.post('api/alarm/slack', createSlackAlarmMessage(err));
};

APIInstance.interceptors.request.use(tokenVerifyHandler);
APIInstance.interceptors.response.use((response) => {
  return response;
}, sendSlackAlarmToNextApiRoutes);

AuthAPIInstance.interceptors.request.use((config) => {
  return config;
});

AuthAPIInstance.interceptors.response.use((response) => {
  return response;
}, sendSlackAlarmToNextApiRoutes);

export { APIInstance, AuthAPIInstance };
export default APIInstance;
