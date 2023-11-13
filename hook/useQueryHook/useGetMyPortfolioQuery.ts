import { queryKeys } from './queryKeys';
import { MyPortfolioModel } from '@/@types/models/portfolio';
import { ResponseLayout, ResponseSuccess } from '@/@types/models/response';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

function useGetMyPortfolioQuery() {
  const queryClient = useQueryClient();

  // FIXME: Portfolio가 없을 경우, 타입 지정
  const myPortfolioDataForEdit:
    | AxiosResponse<ResponseSuccess<MyPortfolioModel> | ResponseLayout>
    | undefined = queryClient.getQueryData(queryKeys.myPortFolio());

  return { myPortfolioDataForEdit };
}

export default useGetMyPortfolioQuery;
