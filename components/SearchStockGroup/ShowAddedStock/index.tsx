import { ShowAddedStockUI } from './style';
import { SelectedStocksAtomProps } from '@/hook/useGetSelectedStocks/state';
import removeStockSvg from '@/public/icon/remove_stock.svg';
import Image from 'next/image';

interface ShowAddedStockProps {
  /** 선택한 주식 종목 배열 내 주식 종목 객체 */
  stock: SelectedStocksAtomProps;
  /** 선택 취소 함수 */
  removeSelected: (stock: SelectedStocksAtomProps) => void;
}

function ShowAddedStock({ stock, removeSelected }: ShowAddedStockProps) {
  return (
    <ShowAddedStockUI.Container>
      <ShowAddedStockUI.ItemContainer>
        <div>{stock.name}</div>
        <button
          style={{ height: '19px' }}
          onClick={() => removeSelected(stock)}
        >
          <Image src={removeStockSvg} alt="removeStock Svg" />
        </button>
      </ShowAddedStockUI.ItemContainer>
    </ShowAddedStockUI.Container>
  );
}

export default ShowAddedStock;
