import { useRemoveRecentSearchWordsAllQuery } from '@/hook/useQueryHook/useRemoveRecentSearchWordsAllQuery';

export const useRemoveRecentSearchWordsAll = () => {
  const { mutate, isLoading } = useRemoveRecentSearchWordsAllQuery();

  const removeRecentSearchWordsAllData = mutate();

  return {
    removeRecentSearchWordsAllData,
    isLoading,
  };
};
