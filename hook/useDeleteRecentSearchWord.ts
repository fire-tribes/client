import { useDeleteRecentSearchWordQuery } from '@/hook/useQueryHook/useDeleteRecentSearchWordQuery';

export const useDeleteRecentSearchWord = () => {
  const { mutateAsync, isLoading } = useDeleteRecentSearchWordQuery();

  const deleteRecentSearchWordData = async (searchWord: string) => {
    const response = await mutateAsync(searchWord);
    return response;
  };
  console.log('useDeleteRecentSearchWord');

  return {
    deleteRecentSearchWordData,
    isLoading,
  };
};
