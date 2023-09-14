import axios, { AxiosRequestConfig } from 'axios';

const createAPIInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({ withCredentials: true, ...config });

  return instance;
};

const APIInstance = createAPIInstance({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/v1/',
  withCredentials: true,
});

export default APIInstance;
