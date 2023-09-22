import { useDeleteRecentSearchWordQuery } from '@/hook/useQueryHook/useDeleteRecentSearchWordQuery';

export const useDeleteRecentSearchWord = (searchWord: string) => {
  /** isLoading은 어떻게 분리하지? */
  const { data, isLoading } = useDeleteRecentSearchWordQuery(searchWord);

  const deleteRecentSearchWordData = data?.data.data;

  return {
    deleteRecentSearchWordData,
    isLoading,
  };
};
