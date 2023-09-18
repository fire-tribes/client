import { ShowAddedStockUI } from './style';
import removeStockSvg from '@/public/icon/remove_stock.svg';
import Image from 'next/image';

interface ShowAddedStockProps {
  stock: {
    name: string;
    tickerCode: string;
  };
  removeSelected: (stock: { name: string; tickerCode: string }) => void;
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
