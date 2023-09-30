import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { assetAPI } from '@/core/api/asset';
import { useQuery } from '@tanstack/react-query';

export const useGetSearchedResultsQuery = (
  word: string,
  pageIndex: number = 1,
) => {
  return useQuery({
    queryKey: queryKeys.searchedResults(word),
    queryFn: () => assetAPI.getSearchedResults(word, pageIndex),
  });
};
