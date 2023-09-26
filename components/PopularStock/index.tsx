import { PopularStockUI } from './style';
import increaseSvg from '@/public/icon/increase.svg';
import decreaseSvg from '@/public/icon/decrease.svg';
import { useGetPopularStocks } from '@/hook/useGetPopularStocks';
import Image from 'next/image';

interface PopularStockProps {
  increase: boolean;
  stock: {
    tickerCode: string;
    stockCode: string;
    name: string;
  };
}

function PopularStock({ increase = true, stock }: PopularStockProps) {
  const { getPopularStocksData } = useGetPopularStocks();
  console.log('getPopularStocksData', getPopularStocksData);

  return (
    <PopularStockUI.Container>
      <PopularStockUI.Item>
        {increase ? (
          <Image src={increaseSvg} alt="Increase Svg" />
        ) : (
          <Image src={decreaseSvg} alt="Decrease Svg" />
        )}
        <span>{stock.name}</span>
      </PopularStockUI.Item>
    </PopularStockUI.Container>
  );
}

export default PopularStock;
