import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const EMPTY_REDIRECT_EXCEPTION_URLS = ['/search', '/edit'];

export const useMyPortFolio = () => {
  const router = useRouter();
  const { pathname } = router;
  const { data, status, isLoading, isFetching } = useMyPortFolioQuery();
  const redirectEmpty = () => router.push('/empty');
  const myPortFolioData = data?.data.data;

  useEffect(() => {
    const isError = status === 'error';
    if (isError) {
      router.push('500');
      return;
    }

    if (!isLoading && !isFetching && status === 'success') {
      const hasNotPortFolio = !myPortFolioData;
      const hasNotAssets =
        myPortFolioData?.assetDetails &&
        myPortFolioData?.assetDetails.length === 0;
      const isExceptionURL = EMPTY_REDIRECT_EXCEPTION_URLS.includes(pathname);

      if ((hasNotPortFolio || hasNotAssets) && !isExceptionURL) {
        redirectEmpty();
        return;
      }
    }
  }, [status, myPortFolioData, isLoading, isFetching, pathname]);

  return {
    myPortFolioData,
    status,
    isLoading,
    isFetching,
  };
};
