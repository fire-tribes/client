import { userAPI } from '@/core/api/user';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation } from '@tanstack/react-query';

export const useAddRecentSearchWordQuery = () => {
  return useMutation(mutationKeys.addRecentSearchWord(), (searchWord: string) =>
    userAPI.addRecentSearchWord(searchWord),
  );
};
