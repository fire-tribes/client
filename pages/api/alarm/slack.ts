import { SlackAPIInstance, isProductionServer } from '@/core/api/instance';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.headers.referer);

  const requestHostname = req.headers.host?.split(':')[0] || '';

  if (req.method === 'POST') {
    if (isProductionServer(requestHostname)) {
      if (req.body) {
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
                  req.body.message,
              },
            },
          ],
        });

        return res.send(postResult.data);
      }
    }
  }

  return res.status(400).send('fail: send slack alarm');
}
