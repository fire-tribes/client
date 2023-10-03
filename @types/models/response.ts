import type { ServiceErrorCodeKeyType } from '@/core/api/errorCode';

/** 백엔드 서버로부터 넘어오는 Response의 기본적인 필드 레이아웃 */
type ResponseLayout = {
  success: boolean;
  errorCode: ServiceErrorCodeKeyType;
  message: string;
};

/** 요청을 통해 얻고자 했던 data type */
type ResponseSuccess<T> = ResponseLayout & {
  data: T;
};

export type { ResponseLayout, ResponseSuccess };
