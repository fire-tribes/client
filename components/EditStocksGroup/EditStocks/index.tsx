import { EditStocksUI } from './style';
import NothingStocks from '@/components/common/NothingStocks';
import EditStock from '@/components/EditStocksGroup/EditStock';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';
// import useDeleteAssetDetails from '@/hook/useDeleteAssetDetails';
import { assetDetailsAtom } from '@/hook/useGetAssetDetails/state';
import useGetMyPortfolio from '@/hook/useGetMyPortfolio';
// import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function EditStocks() {
  /** Portfolio Get 요청 useFeatureHook (useMyPortfolio) */
  // const { myPortFolioData, status, isLoading, isFetching } = useMyPortFolio();
  // const assetDetailsArray = myPortFolioData?.assetDetails;
  const { getMyPortfolioData } = useGetMyPortfolio();

  const assetDetailsArray = getMyPortfolioData?.data?.assetDetails;

  /** 수정하기 버튼 클릭 시, Jotai에 assetDetails 배열 데이터 담기 */
  const [, setAssetDetails] = useAtom(assetDetailsAtom);
  const createAssetDetailsJotai = () => {
    if (assetDetailsArray !== undefined) {
      setAssetDetails(assetDetailsArray);
    }
  };

  /** 주식을 삭제했을 때, Toast 창 띄우기 */
  // const [isShowToast, setIsShowToast] = useState(false);

  const router = useRouter();
  const { deleteAssetDetails } = router.query as {
    deleteAssetDetails?: string;
  };

  const { openSnackbar, closeSnackbar } = useControlSnackbarV2();
  useEffect(() => {
    if (deleteAssetDetails !== undefined) {
      openSnackbar({
        message: '종목이 삭제되었습니다.',
        autoHideDuration: 3 * 1000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        // style: {
        //   position: 'absolute',
        //   left: '50%',
        //   right: 'auto',
        //   bottom: '12%',
        //   transform: 'translateX(-50%)',
        //   width: '398px',
        //   zIndex: '2',
        // },
        onClose: () => {
          closeSnackbar();
        },
      });
    }
    //  else if (
    //   assetDetailsArray !== undefined &&
    //   assetDetailsArray.length !== assetDetails.length
    // ) {
    // }
  }, [deleteAssetDetails]);

  // const handleClose = () => {
  //   setIsShowToast(false);
  // };

  return (
    <>
      <EditStocksUI.TopContainer>
        종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다.
        <tr /> 종목을 탭하면 보유 수량, 평단가를 수정할 수 있습니다.
      </EditStocksUI.TopContainer>
      {assetDetailsArray !== undefined ? (
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
      {/* <Snackbar
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
      </Snackbar> */}
    </>
  );
}

export default EditStocks;
