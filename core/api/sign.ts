import APIInstance, { AuthAPIInstance } from '@/core/api/instance';

import { ResponseSuccess } from '@/@types/models/response';
import axios from 'axios';
import type {
  CheckSignUpRequestBody,
  SignInRequestBody,
  SignResponseModel,
  SignUpRequestBody,
} from '@/@types/models/signUp';

export const SignApi = {
  start: (code: string) => {
    return axios.get<ResponseSuccess<SignResponseModel>>('api/login', {
      params: {
        code,
      },
    });
  },
  checkSignUp: (params: CheckSignUpRequestBody) => {
    return AuthAPIInstance.get(`email`, {
      params,
    });
  },
  signUp: (body: SignUpRequestBody) => {
    return AuthAPIInstance.post('signup', body, {});
  },
  signIn: (body: SignInRequestBody) => {
    return AuthAPIInstance.post('login', body, {});
  },
  signOut: async (): Promise<ResponseSuccess<Date>> => {
    const { data } = await APIInstance.post('user/logout');

    return data;
  },
};
