import Backward from '@/components/common/Backward';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import SearchLayoutV2 from '@/components/commonV2/Layout/SearchLayoutV2';
import NothingStocks from '@/components/common/NothingStocks';
import EditStocks from '@/components/EditStocksGroup/EditStocks';
import { useDeletePortfolio } from '@/hook/useDeletePortfolio';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { useRefetchPortfolioAndDividendAndCalender } from '@/hook/useRefetchPortfolioAndDividendAndCalender';
import { useRouter } from 'next/router';

function Edit() {
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: number };
  /** '완료' 관련 로직 */
  const { myPortFolioData } = useMyPortFolio();
  const hasMyPortFolioData = myPortFolioData?.assetDetails.length !== 0;
  const { deletePortfolioData, isLoadingDeletePortfolioData } =
    useDeletePortfolio();
  const { refetch } = useRefetchPortfolioAndDividendAndCalender();

  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = async () => {
    if (!hasMyPortFolioData && portfolioId !== undefined) {
      await deletePortfolioData(portfolioId);

      router.push('/empty'); // INFO: router.push()는 비동기이다.
      refetch();
    } else {
      router.push('/');
      refetch();
    }
  };

  return (
    <SearchLayoutV2
      bottomFixedButton={
        <BottomFixedButton
          isDisabled={false}
          onChange={onMoveOtherPages}
          isLoading={isLoadingDeletePortfolioData}
        >
          완료
        </BottomFixedButton>
      }
      hasButton={true}
      headMetaProps={{
        title: '스노우볼 - 배당 주식 편집',
      }}
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
            <div style={{ height: '100px' }}></div>
          </section>
        </>
      ) : (
        <NothingStocks />
      )}
    </SearchLayoutV2>
  );
}

export default Edit;
