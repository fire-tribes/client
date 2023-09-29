import { queryKeys } from './queryKeys';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { userAPI } from '@/core/api/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteRecentSearchWordQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(
    mutationKeys.deleteRecentSearchWord(),
    (searchWord: string) => userAPI.deleteRecentSearchWord(searchWord),
    {
      onSuccess: (response) => {
        if (response.data.success) {
          queryClient.invalidateQueries(
            //무효화 하고싶은 Query key
            queryKeys.recentSearchWords(),
          );
        }
      },
    },
  );
};
