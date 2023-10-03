import { ResponseLayout } from '@/@types/models/response';
import { SERVICE_ERROR_CODE } from '@/core/api/errorCode';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ERROR_CODE = 'E01106';
  const responsedata: ResponseLayout = {
    success: false,
    errorCode: ERROR_CODE,
    message: SERVICE_ERROR_CODE[ERROR_CODE],
  };

  setTimeout(() => res.status(200).send(responsedata), 5000);
}
