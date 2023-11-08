import { SignApi } from '@/core/api/sign';
import { SignAPIParams } from '@/hook/useCallServiceLoginWithSession';
import { AxiosError } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const APPROVAL_PROVIDERS = ['KAKAO', 'GOOGLE'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const responseSuccess = (data: unknown) => res.status(200).send(data);
  const responseServerError = (err: AxiosError) =>
    res.status(500).send({ data: '백엔드 서버 측 에러입니다.', err });

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

  try {
    const defaultForm = {
      password: '',
      email,
    };

    const defaultSignUpForm = {
      userName: '',
      oAuthChannelType: provider.toUpperCase() as Uppercase<typeof provider>,
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

  return res
    .status(500)
    .send({ data: '정상적으로 로그인이 이루어지지 않았습니다.' });
}
