import { EditStockUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
// import downVectorSvg from '@/public/icon/downVector.svg';
// import upVectorSvg from '@/public/icon/upVector.svg';
import Image from 'next/image';
import Link from 'next/link';

interface EditStockProps {
  /** 포트폴리오 내 종목 객체 */
  stock: {
    portfolioAssetId: number;
    assetId: number;
    tickerCode: string;
    count: number;
    averagePrice: number;
    currentPrice: number;
    assetPriceChangeRate: number;
    assetPriceChange: number;
    value: number;
    rateOfReturn: number;
    dividendPriceRatio: number;
    dividendMonth: number[];
    currencyType: string;
  };
  /** 수정하기 버튼 클릭 시, Jotai에 useMyPortfolio의 배열 데이터 추가 */
  handleEditButton: () => void;
}

function EditStock({ stock, handleEditButton }: EditStockProps) {
  return (
    <EditStockUI.Container>
      <EditStockUI.Item>
        <EditStockUI.StockContainer>
          <div>
            <div>{stock.tickerCode.split('')[0]}</div>
            <Image src={testCircleSvg} alt="testCircle Svg" />
          </div>
          <div>
            <div>{stock.tickerCode}</div>
            <button onClick={handleEditButton}>
              <Link href={`${stock.assetId}/${stock.portfolioAssetId}`}>
                수정하기
              </Link>
            </button>
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
