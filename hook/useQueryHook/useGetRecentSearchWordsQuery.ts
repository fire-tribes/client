import { userAPI } from '@/core/api/user';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetRecentSearchWordsQuery = () => {
  return useQuery({
    queryKey: queryKeys.recentSearchWords(),
    queryFn: () => userAPI.getRecentSearchWords(),
  });
};
