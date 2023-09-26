import { PopularStocksUI } from './style';
import PopularStock from '../PopularStock';
import { useGetPopularStocks } from '@/hook/useGetPopularStocks';
// import PopularStock from '@/components/PopularStock';

function PopularStocks() {
  /** exampleDatas */
  const exampleDatas = [
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
    {
      tickerCode: 'tickerCode',
      stockCode: 'stockCode',
      name: 'name',
    },
  ];

  /** 인기주식 호출하기 삭제(PopularStock 컴포넌트로 이동) */
  const getPopularStocks = useGetPopularStocks();
  console.log('getPopularStocks?: ', getPopularStocks);

  return (
    <>
      <PopularStocksUI.Header>인기 주식</PopularStocksUI.Header>
      <PopularStocksUI.BottomContainer>
        {exampleDatas !== undefined &&
          exampleDatas.map((stock, id) => {
            return <PopularStock key={id} increase={true} stock={stock} />;
          })}
      </PopularStocksUI.BottomContainer>
    </>
  );
}

export default PopularStocks;
