import { SignApi } from '@/core/api/sign';
import { SignAPIParams } from '@/hook/useCallServiceLoginWithSession';
import { changeAuthAPIInstanceBaseUrlIntoProductServerUrl } from '@/core/api/instance';
import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import type {
  OauthChannelType,
  SignInRequestBody,
  SignUpRequestBody,
} from '@/@types/models/signUp';

const APPROVAL_PROVIDERS = ['KAKAO', 'GOOGLE'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const responseSuccess = (data: unknown) => res.status(200).send(data);
  const responseServerError = (err: AxiosError) => {
    return res.status(500).send({ data: '백엔드 서버 측 에러입니다.', err });
  };

  const { email, provider } = req.query as Partial<SignAPIParams>;

  if (!email) {
    return res
      .status(400)
      .send({ data: '로그인할 이메일이 존재하지 않습니다.' });
  }

  if (!provider) {
    return res
      .status(400)
      .send({ data: '로그인할 플랫폼이 존재하지 않습니다.' });
  }

  if (!APPROVAL_PROVIDERS.includes(provider.toUpperCase())) {
    return res
      .status(400)
      .send({ data: '제공하지 않는 플랫폼으로 로그인을 시도하였습니다.' });
  }

  /** change AuthAPIInstace baseURL By request host name */
  const requestHostname = req.headers.host?.split(':')[0] || '';
  changeAuthAPIInstanceBaseUrlIntoProductServerUrl(requestHostname);

  /** try signAPI call */
  try {
    const signInForm: SignInRequestBody = {
      email,
      password: '',
      oAuthChannelType: provider.toUpperCase() as OauthChannelType,
    };

    const signUpForm: SignUpRequestBody = {
      userName: '',
      ...signInForm,
    };

    const checkSignUpForm = {
      email,
      oAuthChannelType: provider.toUpperCase() as OauthChannelType,
    };

    const { data: isValid } = await SignApi.checkSignUp(checkSignUpForm);
    const shouldSignUp = !isValid;

    if (shouldSignUp) {
      const signUpResponse = await SignApi.signUp(signUpForm);

      return responseSuccess(signUpResponse.data);
    }

    const canSignIn = !shouldSignUp;

    if (canSignIn) {
      const signInResponse = await SignApi.signIn(signInForm);
      console.log('i"m, api routes baseURL', signInResponse.config.baseURL);

      const { data } = signInResponse;

      return responseSuccess(data);
    }
  } catch (err) {
    console.log(err);
    responseServerError(err as AxiosError);
    return;
  }

  return res
    .status(500)
    .send({ data: '정상적으로 로그인이 이루어지지 않았습니다.' });
}
