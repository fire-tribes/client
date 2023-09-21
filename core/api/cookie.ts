import Cookies, { CookieSetOptions } from 'universal-cookie';

/**
 * universal-cookie를 내부적으로 사용하는 쿠키 커스텀 클래스
 * TODO: 이게 core/api에 있는게 맞나요?? core/class 이런식으로 다른 파일에 가야할 것 같습니다. Token도 마찬가지
 */
export class Cookie {
  #cookie = new Cookies();

  get(name: string) {
    return this.#cookie.get(name);
  }

  set(name: string, value: string, options?: CookieSetOptions) {
    this.#cookie.set(name, value, { path: '/', ...options });
  }

  remove(name: string) {
    this.#cookie.remove(name);
  }
}
