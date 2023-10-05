import { queryKeys } from './useQueryHook/queryKeys';
import { useGetSearchedResultsQuery } from '@/hook/useQueryHook/useGetSearchedResultsQuery';
import { useQueryClient } from '@tanstack/react-query';

export const useGetSearchedResults = (word: string, pageIndex: number = 1) => {
  const { data, isLoading, refetch } = useGetSearchedResultsQuery(
    word,
    pageIndex,
  );

  const getSearchedResultsData = data?.data.data;
  const refetchSearchedResultsData = async () => {
    await refetch();
  };

  const hasNextPage = getSearchedResultsData?.next;

  const queryClient = useQueryClient();
  const invalidateSearchedResultsData = (word: string, pageIndex: number) => {
    queryClient.invalidateQueries(queryKeys.searchedResults(word, pageIndex));
  };
  return {
    getSearchedResultsData,
    isLoading,
    hasNextPage,
    refetchSearchedResultsData,
    invalidateSearchedResultsData,
  };
};
