import { ShowAddedStocksUI } from './style';
import ShowAddedStock from '../ShowAddedStock';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';

interface ShowAddedStocksProps {
  selectedStocks: SelectedStocksAtomProps[];
  removeSelected: (stock: SelectedStocksAtomProps) => void;
}

function ShowAddedStocks({
  selectedStocks,
  removeSelected,
}: ShowAddedStocksProps) {
  return (
    <ShowAddedStocksUI.Container>
      {selectedStocks.map((stock) => {
        return (
          <ShowAddedStock
            key={stock.tickerCode}
            stock={stock}
            removeSelected={removeSelected}
          />
        );
      })}
    </ShowAddedStocksUI.Container>
  );
}

export default ShowAddedStocks;
