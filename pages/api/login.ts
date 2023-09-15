import { kakaoAPI } from '@/core/api/kakao';
import { SignApi } from '@/core/api/sign';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code } = req.query as { code?: string };

  try {
    if (code) {
      const accessResponse = await kakaoAPI.getAccessToken(code);
      const { access_token } = accessResponse.data;

      if (access_token) {
        const userData = await kakaoAPI.getUserData(access_token);
        const { kakao_account } = userData.data;
        const {
          // nickName,
          email,
        } = kakao_account;

        /*
        TODO: 추후에 nickName을 받을 때 주석제거
        if (!nickName) {
          res.status(400).send({
            success: false,
            message: 'nickName undefined',
            errorCode: 'ES2015',
          } as CommonResponseError);
        }
        */

        // 여기서부터 서버와 통신 시
        if (email) {
          try {
            const { data: isValid } = await SignApi.checkSignUp({ email });
            const shouldSignUp = !isValid;

            const userName = 'nickName';
            const password = '';
            const accessToken = 'secretKey';
            console.log('checkSignup');

            if (shouldSignUp) {
              await SignApi.signUp({
                userName,
                password,
                email,
                accessToken,
              }).then(({ status, data }) => {
                res.redirect(307, '/login').end();
                res.status(status).send(data);
              });
            }

            await SignApi.signIn({
              email,
              password,
              accessToken,
            }).then(({ status, data }) => {
              console.log('signIn');
              res.redirect(307, '/login').end();
              res.status(status).send(data);
            });
            //
          } catch (err) {
            res.redirect(307, '/login').end();
          }
        }
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
}
