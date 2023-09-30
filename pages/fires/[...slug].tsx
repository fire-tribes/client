import Backward from '@/components/common/Backward';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import EditStockInfo from '@/components/EditStockInfo';

const Post = () => {
  return (
    <SearchLayout isDisabled={false} buttonName={'수정 완료'} hasButton={true}>
      <section>
        <Backward title={'보유 주식 편집'} />
      </section>
      <section>
        <EditStockInfo />
      </section>
    </SearchLayout>
  );
};

export default Post;
