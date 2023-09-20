import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useMyPortFolio = (portFolioId?: number) => {
  const router = useRouter();
  const { data, status } = useMyPortFolioQuery(portFolioId);
  const redirectEmpty = useCallback(() => router.push('/empty'), [router]);
  const myPortFolioData = data?.data.data;

  useEffect(() => {
    const hasNotPortFolio = status === 'success' && !myPortFolioData;
    const hasNotAssets =
      status === 'success' && !myPortFolioData?.assetDetails?.length;

    if ((hasNotPortFolio && hasNotAssets) || status === 'error') {
      redirectEmpty();
      return;
    }
  }, [status, redirectEmpty, myPortFolioData]);

  // TODO: 심플모드에 따라서 다르게 데이터를 내려주도록

  return {
    myPortFolioData,
    status,
  };
};
