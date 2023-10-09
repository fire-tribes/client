import Backward from '@/components/common/Backward';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import NothingStocks from '@/components/common/NothingStocks';
import EditStocks from '@/components/EditStocksGroup/EditStocks';
import { useDeletePortfolio } from '@/hook/useDeletePortfolio';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { useRouter } from 'next/router';

function Edit() {
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: number };
  /** '완료' 관련 로직 */
  const { myPortFolioData } = useMyPortFolio();
  const hasMyPortFolioData = myPortFolioData?.assetDetails.length !== 0;
  const { deletePortfolioData, isLoadingDeletePortfolioData } =
    useDeletePortfolio();

  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = async () => {
    if (!hasMyPortFolioData && portfolioId !== undefined) {
      await deletePortfolioData(portfolioId);
    }
    router.push('/');
  };

  return (
    <SearchLayout
      buttomFixedButton={
        <BottomFixedButton
          isDisabled={false}
          onChange={onMoveOtherPages}
          isLoading={isLoadingDeletePortfolioData}
        >
          완료
        </BottomFixedButton>
      }
      hasButton={true}
    >
      <section>
        <Backward title={'보유 주식 편집'} hasBeforePath={'전체 편집 페이지'} />
      </section>

      {hasMyPortFolioData ? (
        <>
          <section>
            <EditStocks />
          </section>
          <section>
            <div style={{ height: '52px' }}></div>
          </section>
        </>
      ) : (
        <NothingStocks />
      )}
    </SearchLayout>
  );
}

export default Edit;
