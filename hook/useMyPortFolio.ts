import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useMyPortFolio = () => {
  const router = useRouter();
  const { data, status, isLoading, isFetching } = useMyPortFolioQuery();
  const redirectEmpty = () => router.push('/empty');
  const myPortFolioData = data?.data.data;

  useEffect(() => {
    const hasNotPortFolio =
      !isLoading && !isFetching && status === 'success' && !myPortFolioData;
    const isError = status === 'error';

    if (isError) {
      router.push('500');
      return;
    }

    if (hasNotPortFolio) {
      redirectEmpty();
      return;
    }
  }, [status, myPortFolioData, isLoading, isFetching]);

  return {
    myPortFolioData,
    status,
    isLoading,
    isFetching,
  };
};
