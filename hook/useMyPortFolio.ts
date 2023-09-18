// import { useControlMode } from '@/hook/useControlMode';
import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

export const useMyPortFolio = (portFolioId?: number) => {
  const router = useRouter();
  const { data, isLoading } = useMyPortFolioQuery(portFolioId);

  const redirect = useCallback(() => router.push('/empty'), [router]);

  useEffect(() => {
    if (!data && isLoading) {
      redirect();
      return;
    }
  }, [data, isLoading, redirect]);

  // TODO: 심플모드에 따라서 다르게 데이터를 내려주도록

  return { data, isLoading };
};
