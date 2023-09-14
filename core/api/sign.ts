import APIInstance from '@/core/api/instance';

import type {
  CheckSignUpRequestBody,
  SignInRequestBody,
  SignUpRequestBody,
} from '@/@types/models/signUp';

export const SignApi = {
  signUp: ({ oAuthChannelType = 'KAKAO', ...rest }: SignUpRequestBody) => {
    const body: SignUpRequestBody = {
      oAuthChannelType,
      ...rest,
    };

    return APIInstance.post('user/signup', body);
  },
  signIn: (params: SignInRequestBody) => {
    const formData = new FormData();
    const paramsArray = Object.entries(params);

    paramsArray.forEach(([key, [value]]) => formData.append(key, value));

    return APIInstance.post('user/login', formData, {
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
