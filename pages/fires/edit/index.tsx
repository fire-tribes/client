import Backward from '@/components/Backward';
import EditStocks from '@/components/EditStocks';
import FeedStockInfo from '@/components/FeedStockInfo';
import CommonButton from '@/components/common/Button/CommonButton';

function Edit() {
  // 검색 결과 데이터
  const searchResults = [
    { name: 'abca', tickercode: 'ABCA' },
    { name: 'aaca', tickercode: 'AACA' },
    { name: 'aaaa', tickercode: 'AAAA' },
    { name: 'abbc', tickercode: 'ABBC' },
    { name: 'abbb', tickercode: 'ABBB' },
    { name: '가나다라', tickercode: '000001' },
    { name: '가가다라', tickercode: '000011' },
    { name: '가가가라', tickercode: '001122' },
    { name: '가가가가', tickercode: '112233' },
    { name: '가나나라', tickercode: '113344' },
  ];
  return (
    <div>
      <section>
        <Backward title={'보유 주식 편집'} />
      </section>
      <section>
        <EditStocks />
      </section>
      <section>
        <CommonButton>완료</CommonButton>
      </section>
      {false && (
        <>
          <section>
            <Backward title={searchResults[0].name} />
          </section>
          <section>
            <FeedStockInfo
              stockName={searchResults[0].name}
              stockTickerCode={searchResults[0].tickercode}
            />
          </section>
          <section>
            <CommonButton>수정 완료</CommonButton>
          </section>
        </>
      )}
    </div>
  );
}

export default Edit;
