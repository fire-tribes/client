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
      APIInstance.get<PopularStocks[]>(
        'http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/popular-stock/list',
        {
          params: {
            size: 10,
          },
        },
      ),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};

function PopularStocks() {
  const getPopularStocks = useGetPopularStocks();
  // data
  // 인기 주식 데이터
  // const popularStocks = [
  //   { name: 'JEPI', fluctuation: true },
  //   { name: 'SCHD', fluctuation: false },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  //   { name: 'AAPL', fluctuation: true },
  // ];

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
