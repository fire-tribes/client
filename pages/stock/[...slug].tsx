import Backward from '@/components/common/Backward';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import EditStockInfo from '@/components/EditStocksGroup/EditStockInfo';
import { useEditPortfolio } from '@/hook/useEditPortfolio';
import { useRouter } from 'next/router';

const Post = () => {
  /** '수정 완료' 관련 로직 */
  const router = useRouter();
  const { slug } = router.query as { slug: string[] };

  const portfolioId = Number(slug?.[0]);
  const { updatePort, isLoadingUpdatePortfolioData } = useEditPortfolio();

  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = async () => {
    try {
      await updatePort();
      router.push(`/edit?portfolioId=${portfolioId}`);
    } catch (err) {
      alert(`error 발생 : ${err}`);
    }
  };

  return (
    <SearchLayout
      buttomFixedButton={
        <BottomFixedButton
          isDisabled={false}
          onChange={onMoveOtherPages}
          isLoading={isLoadingUpdatePortfolioData}
        >
          수정 완료
        </BottomFixedButton>
      }
      hasButton={true}
    >
      <section>
        <Backward title={'보유 주식 편집'} hasBeforePath={'개별 편집 페이지'} />
      </section>
      <section>
        <EditStockInfo />
      </section>
    </SearchLayout>
  );
};

export default Post;
