import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const EMPTY_REDIRECT_EXCEPTION_URLS = ['/search'];

export const useMyPortFolio = () => {
  const router = useRouter();
  const { pathname } = router;
  const { data, status, isLoading, isFetching } = useMyPortFolioQuery();
  const redirectEmpty = () => router.push('/empty');
  const myPortFolioData = data?.data.data;

  useEffect(() => {
    const hasNotPortFolio =
      !isLoading && !isFetching && status === 'success' && !myPortFolioData;
    const isError = status === 'error';
    const isExceptionURL = EMPTY_REDIRECT_EXCEPTION_URLS.includes(pathname);

    if (isError) {
      router.push('500');
      return;
    }

    if (hasNotPortFolio && !isExceptionURL) {
      redirectEmpty();
      return;
    }
  }, [status, myPortFolioData, isLoading, isFetching, pathname]);

  return {
    myPortFolioData,
    status,
    isLoading,
    isFetching,
  };
};
