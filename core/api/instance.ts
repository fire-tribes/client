import { Cookie } from '@/core/api/cookie';
import { Token } from '@/core/api/token';
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
});

const token = new Token({
  cookie: new Cookie(),
  apiHeaders: api.defaults.headers,
});

const tokenVerifyHandler = (config: AxiosRequestConfig) => {
  // token을 체크해서 그에따른 행동

  const hasToken = token.has();
  const validToken = token.expired();

  if (hasToken && validToken) {
    return config;
  }

  return config;

  // TODO: refresh token api call
};

const tokenVerifyErrorHandler = (config: AxiosRequestConfig) => {
  return config;
};

api.interceptors.request.use(tokenVerifyHandler, tokenVerifyErrorHandler);

export const testAPI = {
  login: async () => {
    // login 진행 후 setCookie 해주는 부분
    const response = await api.get('api/test/login');
    return response;
  },
  logout: async () => {
    // login 진행 후 setCookie 해주는 부분
    const response = await api.get('api/test/logout');
    return response;
  },
  write: async () => {
    const response = await api.post('api/test/write');
    return response;
  },
};
