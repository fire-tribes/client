import { useGetRecentSearchWordsQuery } from '@/hook/useQueryHook/useGetRecentSearchWordsQuery';

export const useGetRecentSearchWords = () => {
  const { data, isLoading } = useGetRecentSearchWordsQuery();

  const getRecentSearchWordsData = data?.data.data;

  return {
    getRecentSearchWordsData,
    isLoading,
  };
};
