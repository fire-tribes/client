import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useMyPortFolio = () => {
  const router = useRouter();
  const { data, status, isLoading, isFetching } = useMyPortFolioQuery();
  const redirectEmpty = useCallback(() => router.push('/empty'), [router]);
  const myPortFolioData = data?.data.data;

  useEffect(() => {
    const hasNotPortFolio = status === 'success' && !myPortFolioData;
    const hasNotAssets =
      status === 'success' && !myPortFolioData?.assetDetails?.length;
    const error = status === 'error';

    if (hasNotPortFolio || hasNotAssets || error) {
      redirectEmpty();
      return;
    }
  }, [status, redirectEmpty, myPortFolioData]);

  return {
    myPortFolioData,
    status,
    isLoading,
    isFetching,
  };
};
