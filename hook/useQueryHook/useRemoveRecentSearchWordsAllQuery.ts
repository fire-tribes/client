import { removeRecentSearchWordsAllAPI } from '@/core/api/removeRecentSearchWordsAll';
import { mutationKeys } from '@/hook/useQueryHook/mutationKeys';
import { useMutation } from '@tanstack/react-query';

export const useRemoveRecentSearchWordsAllQuery = () => {
  return useMutation({
    mutationKey: mutationKeys.removeRecentSearchWordsAll(),
    mutationFn: () =>
      removeRecentSearchWordsAllAPI.removeRecentSearchWordsAll(),
  });
};
