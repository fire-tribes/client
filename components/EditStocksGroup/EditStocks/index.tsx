import { EditStocksUI } from './style';
import NothingStocks from '@/components/common/NothingStocks';
import EditStock from '@/components/EditStocksGroup/EditStock';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { assetDetailsAtom } from '@/hook/useGetAssetDetails/state';
import { useAtom } from 'jotai';
import {
  CircularProgress,
  Slide,
  SlideProps,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import { useEffect, useState } from 'react';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function EditStocks() {
  console.log('editStocks');
  /** Portfolio Get 요청 useFeatureHook (useMyPortfolio) */
  const { myPortFolioData, isLoading, isFetching } = useMyPortFolio();
  const assetDetailsArray = myPortFolioData?.assetDetails;
  // console.log('assetDetailsArray: ', assetDetailsArray);

  /** 수정하기 버튼 클릭 시, Jotai에 assetDetails 배열 데이터 담기 */
  const [assetDetails, setAssetDetails] = useAtom(assetDetailsAtom);
  const createAssetDetailsJotai = () => {
    if (assetDetailsArray !== undefined) {
      setAssetDetails(assetDetailsArray);
    }
  };

  /** 주식을 삭제했을 때, Toast 창 띄우기 */
  const [isShowToast, setIsShowToast] = useState(false);
  useEffect(() => {
    if (
      assetDetailsArray !== undefined &&
      assetDetailsArray.length !== assetDetails.length
    ) {
      setIsShowToast(true);
    }
  }, [assetDetailsArray]);

  const handleClose = () => {
    setIsShowToast(false);
  };

  return (
    <>
      <EditStocksUI.TopContainer>
        종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다.
        <tr /> 종목을 탭하면 보유 수량, 평단가를 수정할 수 있습니다.
      </EditStocksUI.TopContainer>
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
      <Snackbar
        open={isShowToast}
        onClose={handleClose}
        autoHideDuration={3 * 1000}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        TransitionComponent={SlideTransition}
        style={{
          position: 'absolute',
          left: '50%',
          right: 'auto',
          bottom: '12%',
          transform: 'translateX(-50%)',
          width: '398px',
          zIndex: '2',
        }}
      >
        <SnackbarContent
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
          message={<span id="client-snackbar">종목을 삭제하였습니다.</span>}
        />
      </Snackbar>
    </>
  );
}

export default EditStocks;
