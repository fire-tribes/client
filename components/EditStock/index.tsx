import { EditStockUI } from './style';
import testCircleSvg from '@/public/icon/testCircle.svg';
import downVectorSvg from '@/public/icon/downVector.svg';
import upVectorSvg from '@/public/icon/upVector.svg';
import Image from 'next/image';

interface EditStockProps {
  stockName: string;
}

function EditStock({ stockName }: EditStockProps) {
  return (
    <EditStockUI.Container>
      <EditStockUI.Item>
        <EditStockUI.StockContainer>
          <div>
            <Image src={testCircleSvg} alt="testCircle Svg" />
          </div>
          <div>
            <div>{stockName}</div>
            <button>수정하기</button>
          </div>
        </EditStockUI.StockContainer>
        <EditStockUI.ButtonContainer>
          <button>
            <Image src={downVectorSvg} alt="downVector Svg" />
          </button>
          <button>
            <Image src={upVectorSvg} alt="upVector Svg" />
          </button>
        </EditStockUI.ButtonContainer>
      </EditStockUI.Item>
    </EditStockUI.Container>
  );
}

export default EditStock;
