import { queryKeys } from './queryKeys';
import { MyPortfolioModel } from '@/@types/models/portfolio';
import { ResponseSuccess } from '@/@types/models/response';
import { useQueryClient } from '@tanstack/react-query';

function useGetMyPortfolioQuery() {
  const queryClient = useQueryClient();

  const getMyPortfolioDataForEdit:
    | ResponseSuccess<MyPortfolioModel>
    | undefined = queryClient.getQueryData(queryKeys.myPortFolio());
  return { getMyPortfolioDataForEdit };
}

export default useGetMyPortfolioQuery;
