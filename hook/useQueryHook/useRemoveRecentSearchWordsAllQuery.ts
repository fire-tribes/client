import { queryKeys } from './queryKeys';
import { userAPI } from '@/core/api/user';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useRemoveRecentSearchWordsAllQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: mutationKeys.removeRecentSearchWordsAll(),
    mutationFn: () => userAPI.removeRecentSearchWordsAll(),
    onSuccess: (response) => {
      if (response.data.success) {
        queryClient.invalidateQueries(
          //무효화 하고싶은 Query key
          queryKeys.recentSearchWords(),
        );
      }
    },
  });
};
