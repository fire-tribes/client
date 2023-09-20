import { PopularStocksUI } from './style';
// import PopularStock from '@/components/PopularStock';
import APIInstance from '@/core/api/instance';
import { useQuery } from '@tanstack/react-query';

interface PopularStocks {
  tickerCode: string;
  stockCode: string;
  name: string;
}

const useGetPopularStocks = () => {
  return useQuery({
    queryKey: ['popularStocks'],
    queryFn: () =>
      APIInstance.get<PopularStocks[]>('popular-stock/list', {
        params: {
          size: 10,
        },
      }),
    onError: (error) => console.log(error), // TODO: 404 에러 페이지로 이동
    onSuccess: (response) => console.log(response), // TODO: Toast로 확장 사용
  });
};

function PopularStocks() {
  const getPopularStocks = useGetPopularStocks();

  console.log('getPopularStocks.data?: ', getPopularStocks.data);
  console.log('getPopularStocks.data?.data: ', getPopularStocks.data?.data);
  return (
    <PopularStocksUI.Container>
      <PopularStocksUI.Header>인기 주식</PopularStocksUI.Header>
      <PopularStocksUI.BottomContainer>
        {/* <PopularStock increase={true} popularStock={'AAPL'} /> */}
        {/* {getPopularStocks.data !== undefined &&
          getPopularStocks.data.data.map((item, id) => {
            return (
              <PopularStock key={id} increase={true} popularStock={item.name} />
            );
          })} */}
      </PopularStocksUI.BottomContainer>
    </PopularStocksUI.Container>
  );
}

export default PopularStocks;
