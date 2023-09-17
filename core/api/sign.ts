import { AuthAPIInstance } from '@/core/api/instance';

import axios from 'axios';
import type {
  CheckSignUpRequestBody,
  SignInRequestBody,
  SignResponseModel,
  SignUpRequestBody,
} from '@/@types/models/signUp';

export const SignApi = {
  start: (code: string) => {
    return axios.get<SignResponseModel>('api/login', {
      params: {
        code,
      },
    });
  },
  signUp: ({ oAuthChannelType = 'KAKAO', ...rest }: SignUpRequestBody) => {
    const body: SignUpRequestBody = {
      oAuthChannelType,
      ...rest,
    };

    return AuthAPIInstance.post('signup', body, {});
  },
  signIn: (body: SignInRequestBody) => {
    return AuthAPIInstance.post('login', body, {});
  },
  checkSignUp: ({ email }: CheckSignUpRequestBody) => {
    return AuthAPIInstance.get(`email`, {
      params: {
        email,
      },
    });
  },
};
