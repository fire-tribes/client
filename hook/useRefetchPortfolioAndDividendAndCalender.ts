import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

export const useRefetchPortfolioAndDividendAndCalender = () => {
  const queryClient = useQueryClient();

  const refetch = () => {
    queryClient.invalidateQueries({
      queryKey: queryKeys.annualDividendKR(),
      refetchType: 'all',
    });

    queryClient.invalidateQueries({
      queryKey: queryKeys.monthlyCalanderDividendKR(),
      refetchType: 'all',
    });

    /** active 상태가 아닌 쿼리키를 포함하는 쿼리를 리패치한다?? */
    queryClient.invalidateQueries({
      queryKey: queryKeys.myPortFolio(),
      refetchType: 'all',
    });
  };

  return {
    refetch,
  };
};
