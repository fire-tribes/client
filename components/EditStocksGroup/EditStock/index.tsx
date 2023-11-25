import { EditStockUI } from './style';
import StockAvatar from '@/components/common/StockAvatar';
// import testCircleSvg from '@/public/icon/testCircle.svg';
// TODO: import downVectorSvg from '@/public/icon/downVector.svg';
// TODO: import upVectorSvg from '@/public/icon/upVector.svg';
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface EditStockProps {
  /** 포트폴리오 내 종목 객체 */
  stock: {
    portfolioAssetId: number;
    // TODO: 타입 리팩토링 제안
    name: string;
    tickerCode?: string;
    stockCode?: string;

    assetId: number;
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
}

function EditStock({ stock }: EditStockProps) {
  /** 2-1. Cache로 받아온 데이터 화면에 렌더링하기 */
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: number };

  return (
    <EditStockUI.Container>
      <EditStockUI.Item>
        <EditStockUI.StockContainer>
          <div>
            <StockAvatar
              primary={stock.tickerCode}
              secondary={stock.stockCode}
            />
          </div>
          <div>
            <div>{stock.name}</div>
            <Link
              href={`stock/${portfolioId}/${stock.assetId}/${stock.portfolioAssetId}/${stock.currencyType}`}
            >
              수정하기
            </Link>
          </div>
        </EditStockUI.StockContainer>
        <EditStockUI.ButtonContainer>
          {/* TODO: <button>
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
