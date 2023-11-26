import { EditStocksUI } from './style';
import NothingStocks from '@/components/common/NothingStocks';
import EditStock from '@/components/EditStocksGroup/EditStock';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';
import useGetMyPortfolio from '@/hook/useGetMyPortfolio';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function EditStocks() {
  const router = useRouter();

  /** COMPLETED: 1-1. 포트폴리오 Cache 가져오기(GET) */
  const { myPortfolioCacheData } = useGetMyPortfolio();
  const assetDetails = myPortfolioCacheData?.data.assetDetails;

  /** COMPLETED: 5-2. 주식을 삭제했을 때, Toast 창 띄우기 */
  const { deleteAssetDetails } = router.query as {
    deleteAssetDetails: string;
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
        onClose: () => {
          closeSnackbar();
        },
      });
    }
  }, [deleteAssetDetails]);

  return (
    <>
      <EditStocksUI.TopContainer>
        종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다. <tr />{' '}
        종목을 탭하면 보유 수량, 평단가를 수정할 수 있습니다.
      </EditStocksUI.TopContainer>
      {assetDetails !== undefined ? (
        assetDetails.map((stock) => {
          return <EditStock key={stock.assetId} stock={stock} />;
        })
      ) : (
        <NothingStocks />
      )}
    </>
  );
}

export default EditStocks;
