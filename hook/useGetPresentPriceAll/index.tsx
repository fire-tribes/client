import { selectedStocksAtom } from '../useAtom/state';
import { PresentPrice } from '@/components/FeedStockInfos';
import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useState } from 'react';

function useGetPresentPriceAll() {
  const [selectedStocks] = useAtom(selectedStocksAtom);
  const [start, setStart] = useState(false);
  // 1. 현재가격을 얻어오기 위해 필요한 assetId만 배열에 담기
  const selectedStocksAssetIds = selectedStocks.map((stock) => {
    return stock.assetId;
  }); // [ 12345, 12346, 12347... ]
  // 2. assetId만 선별된 배열을 서버로 요청

  // queryKey가 동일하면 어디서든 똑같은 걸 참조하고있는 상태

  // 2. 함수를 호출하기만 하면, 모든 주식의 현재가격을 받아오는 함수일 것

  const queries = selectedStocksAssetIds.map((assetIds) => ({
    queryKey: ['presentPrice', assetIds], // 현재가가 캐싱될 queryKey
    queryFn: () =>
      axios.get<PresentPrice>('http://project-snow.kro.kr/api/v1/asset/price', {
        params: {
          assetIds,
        },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJna3N3bjQ1QG5hdmVyLmNvbSIsInVzZXJJZCI6MiwiZW1haWwiOiJna3N3bjQ1QG5hdmVyLmNvbSIsImV4cCI6MTY5NTEzMTIwOH0._acTIC5hMaZXs1oYiWOYAJBxhllXMndkrE_0lgNVHPaCKoaxIXQ-TB1kpGu3vE9B_EK085bfANhZ69YiLFELqA',
        },
      }),
    enabled: !!start,
    // 현재가 받아오는 함수
  }));

  const result = useQueries({
    queries,
  });

  const callStart = () => setStart(true);

  // 갱신신경안쓰고
  return {
    result,
    callStart,
  };
}

export default useGetPresentPriceAll;
