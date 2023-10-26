import { ACCESS_TOKEN } from '@/core/api/token';
import { decodingJWT } from '@/core/utils/decodingJWT';

export type AccessTokenDecodingResult = {
  email: string;
  exp: number;
  sub: string;
  userId: number;
};

export const useDecodingAccessToken = () => {
  return decodingJWT<AccessTokenDecodingResult>(ACCESS_TOKEN);
};
