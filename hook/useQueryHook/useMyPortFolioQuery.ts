import { ResponseLayout } from '@/@types/models/response';
import { portFolioAPI } from '@/core/api/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, isAxiosError } from 'axios';
import { useRouter } from 'next/router';

export const useMyPortFolioQuery = (portfolioId: number) => {
  const router = useRouter();

  return useQuery(
    queryKeys.myPortFolio(portfolioId),
    portFolioAPI.getMyPortFolio,
    {
      onSuccess: (response) => {
        return response;
      },
      onError: (error: AxiosError<ResponseLayout>) => {
        if (isAxiosError(error) && error?.response?.data) {
          const { response } = error;
          const { errorCode } = response.data;

          if (errorCode === 'E01502') {
            router.push('/empty');
          }
        }
      },
    },
  );
};
