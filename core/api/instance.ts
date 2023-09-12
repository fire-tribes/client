import axios, { AxiosRequestConfig } from 'axios';

const createAPIInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create({ withCredentials: true, ...config });

  return instance;
};

const APIInstance = createAPIInstance({
  baseURL: 'server_url',
});

export default APIInstance;
