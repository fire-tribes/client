import Backward from '@/components/common/Backward';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import EditStocks from '@/components/EditStocks';

function Edit() {
  return (
    <SearchLayout
      isDisabled={true}
      buttonName={'완료'}
      hasButton={
        // assetDetailsArray ? false : true
        true
      }
    >
      <section>
        <Backward title={'보유 주식 편집'} />
      </section>
      <section>
        <EditStocks />
      </section>
    </SearchLayout>
  );
}

export default Edit;
