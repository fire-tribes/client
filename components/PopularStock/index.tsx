import { PopularStockUI } from './style';
import increaseSvg from '@/public/icon/increase.svg';
import decreaseSvg from '@/public/icon/decrease.svg';
import { useGetPopularStocks } from '@/hook/useGetPopularStocks';
import Image from 'next/image';

function PopularStock({ increase = true }) {
  const { getPopularStocksData } = useGetPopularStocks();
  const value = {
    tickerCode: getPopularStocksData?.tickerCode,
    stockCode: getPopularStocksData?.stockCode,
    name: getPopularStocksData?.name,
  };

  return (
    <PopularStockUI.Container>
      <PopularStockUI.Item>
        {increase ? (
          <Image src={increaseSvg} alt="Increase Svg" />
        ) : (
          <Image src={decreaseSvg} alt="Decrease Svg" />
        )}
        <span>{value.name}</span>
      </PopularStockUI.Item>
    </PopularStockUI.Container>
  );
}

export default PopularStock;
