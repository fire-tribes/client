import { kakaoAPI } from '@/core/api/kakao';
import { SignApi } from '@/core/api/sign';
import { AxiosError } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const responseSuccess = (data: unknown) => res.status(200).send(data);
  const responseServerError = (err: AxiosError) =>
    res.status(500).send({ data: '백엔드 서버 측 에러입니다.', err });
  const responseKakaoError = (message?: string) =>
    res.status(500).send({ data: `카카오 서버측 에러: ${message}` });

  const throwUndefinedError = (params: string) => {
    throw new Error(`UndefinedError: ${params}`);
  };

  const { code } = req.query as { code?: string };
  let email = '';

  try {
    if (!code) {
      throwUndefinedError('code');
      return;
    }

    // get Access Token By KaKao
    const accessResponse = await kakaoAPI.getAccessToken(code);
    const { access_token } = accessResponse.data;
    if (!access_token) {
      throwUndefinedError('access_token');
    }

    // get User Data By KaKao
    const userData = await kakaoAPI.getUserData(access_token);
    const { kakao_account } = userData.data;
    if (!userData.data.kakao_account.email) {
      throwUndefinedError('user kakao email');
    }

    email = kakao_account.email;
  } catch (err) {
    // 2. await가 끝났으나 내가 원하는 로직을 실행하다가 문제가 생긴경우 (200 이나 내가 원하는 값이 없다.)
    if (err instanceof Error) {
      const { message } = err;
      const isUndefinedError = /UndefinedError/g.test(message);

      return isUndefinedError && responseKakaoError(message);
    }

    // 1. await에서 넘어가지않고 바로 catch로 온 경우
    return res.status(500).send(err);
  }

  // 여기까지 왔다는거는 이메일이 있다는 것
  try {
    const defaultForm = {
      email,
      password: '',
    };

    const defaultSignUpForm = {
      userName: '',
      ...defaultForm,
    };

    const { data: isValid } = await SignApi.checkSignUp({ email });
    const shouldSignUp = !isValid;

    if (shouldSignUp) {
      const signUpResponse = await SignApi.signUp(defaultSignUpForm);

      return responseSuccess(signUpResponse.data);
    }

    const canSignIn = !shouldSignUp;
    if (canSignIn) {
      const signInResponse = await SignApi.signIn(defaultForm);
      const { data } = signInResponse;

      return responseSuccess(data);
    }
  } catch (err) {
    console.log(err);
    responseServerError(err as AxiosError);
    return;
  }

  return res.status(400).send({ message: '여기까지 오면 안되는데 와버렸네요' });
}
