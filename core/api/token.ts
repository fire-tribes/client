import { Cookie } from '@/core/api/cookie';
import type { HeadersDefaults } from 'axios';

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
