import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { userAPI } from '@/core/api/user';
import { useMutation } from '@tanstack/react-query';

export const useDeleteRecentSearchWordQuery = () => {
  return useMutation(
    mutationKeys.deleteRecentSearchWord(),
    (searchWord: string) => userAPI.deleteRecentSearchWord(searchWord),
  );
};
