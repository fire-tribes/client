import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useMyPortFolio = (portFolioId?: number) => {
  const router = useRouter();
  const { data, status } = useMyPortFolioQuery(portFolioId);
  const redirectEmpty = useCallback(() => router.push('/empty'), [router]);

  const myPortFolioData = data?.data.data;

  console.log(status);
  // myPortFolioData?.assetDetails;
  console.log('시작');
  useEffect(() => {
    console.log('useEffect start');
    if (status === 'error') {
      // 이건 예측하지못한에러야 그렇기에 분석이 필요해
      // 400번대이면 404로 보여주고
      // 500번대이면 500번 에러를 보여줘야해
    }

    const hasNotMyAssets = myPortFolioData?.assetDetails?.length === 0;

    if (status === 'success' && hasNotMyAssets) {
      redirectEmpty();
      return;
    }
  }, [data, status, redirectEmpty]);

  // TODO: 심플모드에 따라서 다르게 데이터를 내려주도록

  return {
    myPortFolioData,
    status,
  };
};
