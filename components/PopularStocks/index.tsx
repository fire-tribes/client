import { PopularStocksUI } from './style';
// import PopularStock from '@/components/PopularStock';

function PopularStocks() {
  /** 인기주식 호출하기 삭제(PopularStock 컴포넌트로 이동) */
  // const getPopularStocks = useGetPopularStocks();
  // console.log('getPopularStocks.data?: ', getPopularStocks.data);
  // console.log('getPopularStocks.data?.data: ', getPopularStocks.data?.data);

  return (
    <PopularStocksUI.Container>
      <PopularStocksUI.Header>인기 주식</PopularStocksUI.Header>
      <PopularStocksUI.BottomContainer>
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
