import { Cookie } from '@/core/api/cookie';
import APIInstance from '@/core/api/instance';

import type { AxiosRequestConfig, HeadersDefaults } from 'axios';

export class Token {
  #cookie;
  #apiHeaders;

  constructor({
    cookie,
    apiHeaders,
  }: {
    cookie: Cookie;
    apiHeaders: HeadersDefaults;
  }) {
    this.#cookie = cookie;
    this.#apiHeaders = apiHeaders;
  }

  // 쿠키에 토큰이 존재하는지
  has() {
    const authToken = this.#apiHeaders.common['x-auth-token'];
    const isValid = this.expired(); // 토큰 유효한지

    return authToken && isValid ? true : false;
  }

  // 유효한 토큰인지
  expired() {
    const now = new Date();
    const expiredAt = this.#cookie.get('myCookie');
    const expireAtDate = new Date(expiredAt);

    return expiredAt && now < expireAtDate;
  }
}

//

const token = new Token({
  cookie: new Cookie(),
  apiHeaders: APIInstance.defaults.headers,
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

export { tokenVerifyHandler, tokenVerifyErrorHandler };
