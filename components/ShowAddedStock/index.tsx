import { ShowAddedStocksUI } from './style';

interface ShowAddedStocksProps {
  stockName: string;
  children: React.ReactNode;
}

function ShowAddedStock({ stockName, children }: ShowAddedStocksProps) {
  return (
    <ShowAddedStocksUI.Container>
      <ShowAddedStocksUI.ItemContainer>
        <div>{stockName}</div>
        <div>{children}</div>
      </ShowAddedStocksUI.ItemContainer>
    </ShowAddedStocksUI.Container>
  );
}

export default ShowAddedStock;
