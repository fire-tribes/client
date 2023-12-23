import { Cookie } from '@/core/api/cookie';

export function decodingJWT<T>(JWTName: string): T | undefined {
  const cookie = new Cookie();
  const JWT = cookie.get(JWTName);

  if (JWT) {
    return parsingJWT(JWT);
  }

  return undefined;
}

export function parsingJWT<T>(JWT: string) {
  /**
   * [0] : header
   * [1] : payload
   * [2] : VERIFY
   */

  const base64Payload = JWT.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');

  /** 문자열 변환 후 JS Object로 변환 */
  const result: T = JSON.parse(payload.toString());
  return result;
}
