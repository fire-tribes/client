import { useGetRecentSearchWordsQuery } from '@/hook/useQueryHook/useGetRecentSearchWordsQuery';

export const useGetRecentSearchWords = () => {
  const { data, isLoading } = useGetRecentSearchWordsQuery();

  const getRecentSearchWordsData = data?.data;
  const isLoadingGetRecentSearchWordsData = isLoading;

  return {
    getRecentSearchWordsData,
    isLoadingGetRecentSearchWordsData,
  };
};
