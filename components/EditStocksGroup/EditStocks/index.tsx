import { EditStocksUI } from './style';
import NothingStocks from '@/components/common/NothingStocks';
import EditStock from '@/components/EditStocksGroup/EditStock';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { assetDetailsAtom } from '@/hook/useGetAssetDetails/state';
import { useAtom } from 'jotai';
import { CircularProgress } from '@mui/material';

function EditStocks() {
  /** Portfolio Get 요청 useFeatureHook (useMyPortfolio) */
  const { myPortFolioData, isLoading, isFetching } = useMyPortFolio();
  const assetDetailsArray = myPortFolioData?.assetDetails;
  // console.log('assetDetailsArray: ', assetDetailsArray);

  /** 수정하기 버튼 클릭 시, Jotai에 assetDetails 배열 데이터 담기 */
  const [, setAssetDetails] = useAtom(assetDetailsAtom);
  const createAssetDetailsJotai = () => {
    if (assetDetailsArray !== undefined) {
      setAssetDetails(assetDetailsArray);
    }
  };

  return (
    <>
      <EditStocksUI.TopContainer>
        종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다.
        <tr /> 종목을 탭하면 보유 수량, 평단가를 수정할 수 있습니다.
      </EditStocksUI.TopContainer>
      <div>
        {isLoading || isFetching ? (
          <EditStocksUI.LoadingContainer>
            <CircularProgress />
          </EditStocksUI.LoadingContainer>
        ) : assetDetailsArray !== undefined ? (
          assetDetailsArray.map((stock) => {
            return (
              <EditStock
                key={stock.assetId}
                stock={stock}
                handleEditButton={createAssetDetailsJotai}
              />
            );
          })
        ) : (
          <NothingStocks />
        )}
      </div>
    </>
  );
}

export default EditStocks;
