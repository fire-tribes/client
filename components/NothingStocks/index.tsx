import { NothingStocksUI } from './style';
import CloudImage from '@/public/Cloud.png';
import Image from 'next/image';

function NothingStocks() {
  return (
    <NothingStocksUI.Container>
      <NothingStocksUI.Item>
        <div>
          <Image src={CloudImage} alt="Cloud Image" />
        </div>
        <div>
          <p>추가하거나 보유한 종목이 없습니다.</p>
        </div>
      </NothingStocksUI.Item>
    </NothingStocksUI.Container>
  );
}

export default NothingStocks;
