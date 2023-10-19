import { queryKeys } from './useQueryHook/queryKeys';
import { assetAPI } from '@/core/api/asset';
// import { useGetSearchedResultsQuery } from '@/hook/useQueryHook/useGetSearchedResultsQuery';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

export const useGetSearchedResults = (word: string) => {
  // const { data, isLoading, refetch } = useGetSearchedResultsQuery(
  //   word,
  //   pageIndex,
  // );
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    queryKeys.searchedResults(word),
    ({ pageParam = 1 }) => {
      const infinite = async () => {
        const response = await assetAPI.getSearchedResults(word, pageParam);
        return response.data;
      };
      return infinite();
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next ? lastPage.currentPage + 2 : undefined;
      },
    },
  );

  const array = data?.pages.flatMap((object) => {
    return object.data;
  });
  const getSearchedResultsData = array;

  const queryClient = useQueryClient();
  const invalidateSearchedResultsData = async () => {
    await queryClient.invalidateQueries(queryKeys.searchedResults(word));
  };
  return {
    getSearchedResultsData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    invalidateSearchedResultsData,
  };
};
