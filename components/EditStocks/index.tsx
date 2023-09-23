import { EditStocksUI } from './style';
import EditStock from '../EditStock';
import NothingStocks from '../NothingStocks';
import { portfolioList } from '@/pages/fires/edit';

interface EditStocksProps {
  /** 포트폴리오 객체 */
  portfolioList?: portfolioList;
}

function EditStocks({ portfolioList }: EditStocksProps) {
  return (
    <>
      <EditStocksUI.TopContainer>
        종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다.
        <tr /> 종목을 탭하면 보유 수량, 평단가를 수정할 수 있습니다.
      </EditStocksUI.TopContainer>
      <div>
        {portfolioList?.data.assetDetails.length !== 1 ? (
          portfolioList?.data.assetDetails.map((stock) => {
            return <EditStock key={stock.assetId} stock={stock} />;
          })
        ) : (
          <NothingStocks />
        )}
      </div>
    </>
  );
}

export default EditStocks;
