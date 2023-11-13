import { queryKeys } from './queryKeys';
import { MyPortfolioModel } from '@/@types/models/portfolio';
import { ResponseSuccess } from '@/@types/models/response';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

function useGetMyPortfolioQuery() {
  const queryClient = useQueryClient();

  // FIXME: Portfolio가 없을 경우, 타입 지정
  // | AxiosResponse<ResponseSuccess<MyPortfolioModel> | ResponseLayout>
  const myPortfolioDataForEdit:
    | AxiosResponse<ResponseSuccess<MyPortfolioModel>>
    | undefined = queryClient.getQueryData(queryKeys.myPortFolio());

  return { myPortfolioDataForEdit };
}

export default useGetMyPortfolioQuery;
