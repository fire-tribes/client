import { PopularStocksUI } from './style';
import PopularStock from '@/components/PopularStock';

function PopluarStocks() {
  // data
  // 인기 주식 데이터
  const popularStocks = [
    { name: 'JEPI', fluctuation: true },
    { name: 'SCHD', fluctuation: false },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
    { name: 'AAPL', fluctuation: true },
  ];

  return (
    <>
      <h6 style={{ padding: '16px' }}>인기 주식</h6>
      <PopularStocksUI.BottomContainer style={{ padding: '16px' }}>
        {popularStocks.map((item, id) => {
          return (
            <PopularStock
              key={id}
              increase={item.fluctuation}
              popularStock={item.name}
            />
          );
        })}
      </PopularStocksUI.BottomContainer>
    </>
  );
}

export default PopluarStocks;
