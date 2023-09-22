import { getSearchedResultsAPI } from '@/core/api/getSearchedResults';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetSearchedResultsQuery = (
  word: string,
  pageIndex: number = 1,
) => {
  return useQuery({
    queryKey: queryKeys.searchedResults(word),
    queryFn: () => getSearchedResultsAPI.getSearchedResults(word, pageIndex),
  });
};
