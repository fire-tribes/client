import { Cookie } from '@/core/api/cookie';
import { HeadersDefaults } from 'axios';

const ACCESS_TOKEN = 'accessToken';
const AUTHORIZATION = 'Authorization';

/** 
쿠키에 저장된 accessToken을 좀 더 간편하게 다루기 위한 class
*/
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

  get() {
    const accessToken = this.#cookie.get(ACCESS_TOKEN);
    return accessToken;
  }

  reset() {
    this.#cookie.remove(ACCESS_TOKEN);
  }

  /** axios instance의 header에 authorization이 있는지 확인 */
  settingedHeaders() {
    const isSettinged = this.#apiHeaders.common[AUTHORIZATION];
    const isValid = this.valid();
    return isSettinged && isValid ? true : false;
  }

  /** 유호한 토큰인지 검증 */
  valid() {
    const nowTime = new Date().getTime() / 1000;
    const accessToken = this.#cookie.get(ACCESS_TOKEN);
    // TODO: util function 으로 분리할 수 있지 않을까?
    const expireAt = JSON.parse(atob(accessToken.split('.')[1]))?.exp as number;

    const isValid = expireAt && nowTime > expireAt;
    return isValid;
  }
}
