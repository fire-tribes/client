import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { deleteRecentSearchWordAPI } from '@/core/api/deleteRecentSearchWord';
import { useMutation } from '@tanstack/react-query';

export const useDeleteRecentSearchWordQuery = (searchWord: string) => {
  return useMutation({
    mutationKey: mutationKeys.deleteRecentSearchWord(searchWord),
    mutationFn: () =>
      deleteRecentSearchWordAPI.deleteRecentSearchWord(searchWord),
  });
};
