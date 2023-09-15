type ResponseSuccess<T> = ResponseError & {
  data: T;
};
type ResponseError = {
  success: boolean;
  errorCode: string;
  message: string;
};

export type { ResponseSuccess, ResponseError };
