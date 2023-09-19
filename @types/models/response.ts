import { ServiceErrorCodeKey } from '@/@types/models/errorCode';

type ResponseSuccess<T> = ResponseLayout & {
  data: T;
};
type ResponseLayout = {
  success: boolean;
  errorCode: ServiceErrorCodeKey;
  message: string;
};

export type { ResponseSuccess, ResponseLayout };
