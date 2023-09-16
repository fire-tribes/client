import axios, { AxiosRequestConfig } from 'axios';

const createAPIInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({
    ...config,
  });

  return instance;
};

const APIInstance = createAPIInstance({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/v1/',
});

export default APIInstance;
