import { SlackAPIInstance, isProductionServer } from '@/core/api/instance';
import { parsingJWT } from '@/core/utils/decodingJWT';
import { AccessTokenDecodingResult } from '@/hook/useDecodingAccessToken';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const requestHostname = req.headers.host?.split(':')[0] || '';
    if (isProductionServer(requestHostname) && req.body) {
      const accessToken = req.cookies.accessToken || '';
      const parsedJWTPayload =
        parsingJWT<AccessTokenDecodingResult>(accessToken);
      const email = parsedJWTPayload?.email;

      const postResult = await SlackAPIInstance.post('', {
        text: 'snowball.watch API Error 발생',
        blocks: [
          {
            type: 'section',
            block_id: '2',
            text: {
              type: 'mrkdwn',
              text:
                '>❌ API 에러 발생\n' +
                `*발생지점* : ${req.headers.referer}` +
                req.body.message +
                `\n*유저 정보* : email: ${email}`,
            },
          },
        ],
      });

      return res.send(postResult.data);
    }
  }

  return res.status(400).send('fail: send slack alarm');
}
