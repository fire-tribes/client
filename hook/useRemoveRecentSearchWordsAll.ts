import { useRemoveRecentSearchWordsAllQuery } from '@/hook/useQueryHook/useRemoveRecentSearchWordsAllQuery';

export const useRemoveRecentSearchWordsAll = () => {
  const { mutate, isLoading } = useRemoveRecentSearchWordsAllQuery();

  // const removeRecentSearchWordsAllData = mutate();
  // 호출될 때마다 mutate될 것이다.
  // mutate를 바로 리턴하는 방식으로 변경

  return {
    mutate,
    isLoading,
  };
};
