import { PopularStockUI } from './style';
import increaseSvg from '@/public/icon/increase.svg';
import decreaseSvg from '@/public/icon/decrease.svg';
import Image from 'next/image';

interface PopularStockProps {
  /** 전일 대비 등락 유무 */
  increase?: boolean;
  /** 인기 주식 종목 */
  popularStock: string;
}

function PopularStock({ increase = true, popularStock }: PopularStockProps) {
  return (
    <PopularStockUI.Container>
      <PopularStockUI.Item>
        {increase ? (
          <Image src={increaseSvg} alt="Increase Svg" />
        ) : (
          <Image src={decreaseSvg} alt="Decrease Svg" />
        )}
        <span>{popularStock}</span>
      </PopularStockUI.Item>
    </PopularStockUI.Container>
  );
}

export default PopularStock;
