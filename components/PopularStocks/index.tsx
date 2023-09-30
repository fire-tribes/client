import { PopularStocksUI } from './style';
import PopularStock from '../PopularStock';
import { useGetPopularStocks } from '@/hook/useGetPopularStocks';
// import PopularStock from '@/components/PopularStock';

function PopularStocks() {
  /** exampleDatas */
  // const exampleDatas = [
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  //   {
  //     tickerCode: 'tickerCode',
  //     stockCode: 'stockCode',
  //     name: 'name',
  //   },
  // ];

  /** 인기주식 호출 */
  const { getPopularStocksData } = useGetPopularStocks();
  const popularStocksArray = getPopularStocksData?.data;
  console.log('getPopularStocksData?: ', getPopularStocksData);

  return (
    <>
      <PopularStocksUI.Header>인기 주식</PopularStocksUI.Header>
      <PopularStocksUI.BottomContainer>
        {popularStocksArray !== undefined ? (
          popularStocksArray.map((stock, id) => {
            return <PopularStock key={id} increase={true} stock={stock} />;
          })
        ) : (
          <div style={{ width: '100%', height: '41px' }}></div>
        )}
      </PopularStocksUI.BottomContainer>
    </>
  );
}

export default PopularStocks;
