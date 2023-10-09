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
    const isError = status === 'error' || !data?.data.success;

    if (isError) {
      router.push('500');
      return;
    }

    if (hasNotPortFolio || hasNotAssets) {
      redirectEmpty();
      return;
    }
  }, [status, redirectEmpty, myPortFolioData, router, data?.data.success]);

  return {
    myPortFolioData,
    status,
    isLoading,
    isFetching,
  };
};
