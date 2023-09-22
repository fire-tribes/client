import { useRemoveRecentSearchWordsAllQuery } from '@/hook/useQueryHook/useRemoveRecentSearchWordsAllQuery';

export const useRemoveRecentSearchWordsAll = () => {
  const { data, isLoading } = useRemoveRecentSearchWordsAllQuery();

  const removeRecentSearchWordsAllData = data?.data.data;

  return {
    removeRecentSearchWordsAllData,
    isLoading,
  };
};
