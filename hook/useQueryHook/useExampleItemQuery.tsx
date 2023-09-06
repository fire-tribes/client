import { exampleItemAPI } from '@/core/api/example';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useExampleItemQuery = () => {
  const useGetExampleItem = (title: string) => {
    return useQuery({
      queryKey: queryKeys.exampleItemGet(title),
      queryFn: () => exampleItemAPI.getItem({ title }),
    });
  };
  const useDeleteExampleItem = (title: string) => {
    return useMutation(() => exampleItemAPI.deleteItem({ title }));
  };

  return {
    useGetExampleItem,
    useDeleteExampleItem,
  };
};
