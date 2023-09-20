import { ShowAddedStocksUI } from './style';
import ShowAddedStock from '../ShowAddedStock';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';

interface ShowAddedStocksProps {
  /** 선택한 주식 종목 배열 */
  selectedStocks: SelectedStocksAtomProps[];
  /** 선택 취소 함수 */
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
