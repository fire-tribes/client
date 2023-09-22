import { useGetSearchedResultsQuery } from '@/hook/useQueryHook/useGetSearchedResultsQuery';

export const useGetSearchedResults = (word: string, pageIndex: number = 1) => {
  const { data, isLoading } = useGetSearchedResultsQuery(word, pageIndex);

  const getSearchedResultsData = data?.data.data.data;

  return {
    getSearchedResultsData,
    isLoading,
  };
};
