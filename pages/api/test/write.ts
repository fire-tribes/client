// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const myCookie = req.cookies?.myCookie;

  if (myCookie) {
    return res.status(200).json({ name: 'John Doe' });
  }

  return res.status(403).json({ name: 'not cookie' });
}
