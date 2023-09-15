import APIInstance, { AuthAPIInstance } from '@/core/api/instance';

import type {
  CheckSignUpRequestBody,
  SignInRequestBody,
  SignUpRequestBody,
} from '@/@types/models/signUp';

export const SignApi = {
  start: (code: string) => {
    return AuthAPIInstance.get('', {
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

    return APIInstance.post('user/signup', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  signIn: (body: SignInRequestBody) => {
    // TODO: 왜 formData를 안넣어주고 js object를 넣어주면 정상적으로 동작하는가?
    // headers: content-type에 따라 자동으로 변환해주는게 아닌가?
    return APIInstance.post('user/login', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  checkSignUp: ({ email }: CheckSignUpRequestBody) => {
    return APIInstance.get(`user/email`, {
      params: {
        email,
      },
    });
  },
};
