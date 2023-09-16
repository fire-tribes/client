// import { useControlMode } from '@/hook/useControlMode';
import { useMyPortFolioQuery } from '@/hook/useQueryHook/useMyPortFolioQuery';

export const useMyPortFolio = (portFolioId: number) => {
  const { data } = useMyPortFolioQuery(portFolioId);
  const responseData = data?.data.data;

  // TODO: 심플모드에 따라서 다르게 데이터를 내려주도록
  return { responseData };
};
