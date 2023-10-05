import FeedStockInfos from '@/components/FeedStockInfoGroup/FeedStockInfos';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import Backward from '@/components/common/Backward';
import { useAtom } from 'jotai';

function Add() {
  /** 선택한 주식 종목 배열 */
  const [selectedStocks] = useAtom(selectedStocksAtom);

  return (
    <SearchLayout
      hasButton={selectedStocks.length !== 0 ? true : false}
      isDisabled={selectedStocks.length !== 0 ? false : true}
      buttonName={'추가 완료'}
    >
      <section>
        <Backward title={'보유 주식 정보 입력'} />
      </section>
      <section>
        <FeedStockInfos />
      </section>
    </SearchLayout>
  );
}

export default Add;
