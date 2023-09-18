import Cookies, { CookieSetOptions } from 'universal-cookie';

export class Cookie {
  #cookie = new Cookies();

  get(name: string) {
    console.log(this.#cookie.getAll());
    return this.#cookie.get(name);
  }

  set(name: string, value: string, options?: CookieSetOptions) {
    this.#cookie.set(name, value, { path: '/', ...options });
  }

  remove(name: string) {
    this.#cookie.remove(name);
  }
}
