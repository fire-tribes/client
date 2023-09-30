import { portfolioAPI } from '@/core/api/portfolio';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useMyPortFolioQuery = (portfolioId?: number) => {
  return useQuery(
    queryKeys.myPortFolio(portfolioId),
    portfolioAPI.getMyPortFolio,
  );
};
