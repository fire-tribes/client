import { useGetSearchedResultsQuery } from '@/hook/useQueryHook/useGetSearchedResultsQuery';

export const useGetSearchedResults = (word: string, pageIndex: number = 1) => {
  const { data, isLoading, refetch } = useGetSearchedResultsQuery(
    word,
    pageIndex,
  );

  const getSearchedResultsData = data?.data.data;
  const refetchSearchedResultsData = refetch;

  return {
    getSearchedResultsData,
    isLoading,
    refetchSearchedResultsData,
  };
};
