import { serialize } from 'cookie';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader(
    'X-AUTH-TOKEN',
    serialize('myCookie', '', {
      path: '/',
      expires: new Date(0),
    }),
  );
  res.status(200).json({ name: 'Cookie remove successfully.' });
}
