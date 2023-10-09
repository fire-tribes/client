import Backward from '@/components/common/Backward';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import EditStocks from '@/components/EditStocksGroup/EditStocks';
import { useMyPortFolio } from '@/hook/useMyPortFolio';

function Edit() {
  const { myPortFolioData } = useMyPortFolio();
  console.log(myPortFolioData);
  return (
    <SearchLayout isDisabled={false} buttonName={'완료'} hasButton={true}>
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
