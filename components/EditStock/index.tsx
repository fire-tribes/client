import { EditStockUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
// import downVectorSvg from '@/public/icon/downVector.svg';
// import upVectorSvg from '@/public/icon/upVector.svg';
import Image from 'next/image';
import Link from 'next/link';

interface EditStockProps {
  stock: {
    assetId: number;
    tickerCode: string;
    stockCode: string;
    count: number;
    averagePrice: string;
    currentPrice: string;
    assetPriceChangeRate: string;
    assetPriceChange: string;
    value: number;
    rateOfReturn: number;
    dividendPriceRatio: number;
    dividendMonth: number[];
    currencyType: 'KRW';
  };
}

function EditStock({ stock }: EditStockProps) {
  return (
    <EditStockUI.Container>
      <EditStockUI.Item>
        <EditStockUI.StockContainer>
          <div>
            <Image src={testCircleSvg} alt="testCircle Svg" />
          </div>
          <div>
            <p>{stock.stockCode}</p>
            <Link href={`edit/${stock.assetId}`}>수정하기</Link>
          </div>
        </EditStockUI.StockContainer>
        <EditStockUI.ButtonContainer>
          {/* <button>
            <Image src={downVectorSvg} alt="downVector Svg" />
          </button>
          <button>
            <Image src={upVectorSvg} alt="upVector Svg" />
          </button> */}
        </EditStockUI.ButtonContainer>
      </EditStockUI.Item>
    </EditStockUI.Container>
  );
}

export default EditStock;
