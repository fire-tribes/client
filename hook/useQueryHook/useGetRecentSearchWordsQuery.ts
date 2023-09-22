import { getRecentSearchWordsAPI } from '@/core/api/getRecentSearchWords';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetRecentSearchWordsQuery = () => {
  return useQuery({
    queryKey: queryKeys.recentSearchWords(),
    queryFn: () => getRecentSearchWordsAPI.getRecentSearchWords(),
  });
};
