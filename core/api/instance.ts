// import { tokenVerifyErrorHandler, tokenVerifyHandler } from '@/core/api/token';
import axios, { AxiosRequestConfig } from 'axios';

const createAPIInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({ withCredentials: true, ...config });

  return instance;
};

const APIInstance = createAPIInstance({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/v1/',
  withCredentials: true,
});

// APIInstance.interceptors.request.use(
//   tokenVerifyHandler,
//   tokenVerifyErrorHandler,
// );

// AuthAPIInstance.interceptors.response.use(() => {
//   conf;
// });

const AuthAPIInstance = createAPIInstance({
  baseURL: '/api/login',
  withCredentials: true,
});

export { APIInstance, AuthAPIInstance };

export default APIInstance;
