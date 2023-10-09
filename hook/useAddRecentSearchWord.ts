import { useAddRecentSearchWordQuery } from '@/hook/useQueryHook/useAddRecentSearchWordQuery';

export const useAddRecentSearchWord = () => {
  const { mutateAsync, isLoading } = useAddRecentSearchWordQuery();

  const addRecentSearchWordData = async (searchWord: string) => {
    const response = await mutateAsync(searchWord);
    return response;
  };

  const isLoadingAddRecentSearchWordData = isLoading;

  return {
    addRecentSearchWordData,
    isLoadingAddRecentSearchWordData,
  };
};
