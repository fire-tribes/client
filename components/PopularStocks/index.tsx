import { PopularStocksUI } from './style';
// import PopularStock from '@/components/PopularStock';
import axios from 'axios';
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
      axios.get<PopularStocks[]>(
        'http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/popular-stock/list',
        {
          params: {
            size: 10,
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoyLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2OTQ3NDM0NTB9.FZxDu0a7T0XDZLISeXq0GXQvzvfzerZNd6HUjayf7oUagz1XbtKl7FkxhMGNIKY3PIoY4cmBpq03oKUunHjvNA',
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
    <>
      <h6 style={{ padding: '16px' }}>인기 주식</h6>
      <PopularStocksUI.BottomContainer style={{ padding: '16px' }}>
        {/* {getPopularStocks.data !== undefined &&
          getPopularStocks.data.data.map((item, id) => {
            return (
              <PopularStock key={id} increase={true} popularStock={item.name} />
            );
          })} */}
      </PopularStocksUI.BottomContainer>
    </>
  );
}

export default PopularStocks;
