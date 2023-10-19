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

    /** get Access Token By KaKao
     * KOE320' 동일한 인가코드로 로그인 요청 시 발생 (https://devtalk.kakao.com/t/koe320-an-authorization-code-must-be-supplied-authorization-code-not-found/126910)
     */

    const accessResponse = await kakaoAPI.getAccessToken(code);

    const { access_token } = accessResponse.data;
    if (!access_token) {
      throwUndefinedError('access_token');
      return;
    }

    /** get User Data By KaKao */
    const userData = await kakaoAPI.getUserData(access_token);
    const { kakao_account } = userData.data;
    if (!userData.data.kakao_account.email) {
      throwUndefinedError('user kakao email');
      return;
    }

    email = kakao_account.email;
  } catch (err) {
    /** await가 끝났으나 내가 원하는 로직을 실행하다가 문제가 생긴경우 (200 이나 내가 원하는 값이 없다.) */
    if (err instanceof Error) {
      const { message } = err;

      return responseKakaoError(message);
    }

    /** await에서 넘어가지않고 바로 catch로 온 경우  */
    return res.status(500).send(err);
  }

  /** 여기까지 왔다는거는 이메일이 있다는 것 */
  try {
    const defaultForm = {
      password: '',
      email,
    };

    const defaultSignUpForm = {
      userName: '',
      oAuthChannelType: 'KAKAO' as const,
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
    responseServerError(err as AxiosError);
    return;
  }

  /** 예상대로라면 여기에 도달하기전에 res 가 반환이 되어야 한다. */
  return res.status(400).send({ message: '잘못된 요청입니다.' });
}
