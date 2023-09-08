import Backward from '@/components/Backward';
import EditStock from '@/components/EditStock';
import FeedStockInfo from '@/components/FeedStockInfo';
import PopularStock from '@/components/PopularStock';
import RecentSearchWord from '@/components/RecentSearchWord';
import SearchInput from '@/components/SearchInput';
import SearchResult from '@/components/SearchResult';
import styled from '@emotion/styled';

function Search() {
  // data
  // 인기 주식 데이터
  const popularStocks = [
    { name: 'JEPI', fluctuation: true },
    { name: 'SCHD', fluctuation: false },
    { name: 'AAPL', fluctuation: true },
  ];
  // 최근 검색어 데이터
  const recentSearchWords = ['APPL', 'MSFT', 'JEPI'];
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

  const onDeleteRecentSearchWordsAll = () => {
    // 내용 추가
  };

  return (
    <div>
      <section>
        <SearchInput />
      </section>
      <section>
        <Backward
          title={'보유 주식 정보 입력'}
          object={'보유 주식 정보 입력'}
        />
        <Backward title={'보유 주식 편집'} object={'보유 주식 편집'} />
        <Backward title={searchResults[0].name} />
      </section>
      <section>
        <h6 style={{ padding: '16px' }}>인기 주식</h6>
        <div style={{ padding: '16px' }}>
          {popularStocks.map((item, id) => {
            return (
              <PopularStock
                key={id}
                increase={item.fluctuation}
                popularStock={item.name}
              />
            );
          })}
        </div>
      </section>
      <section>
        <RecentSearchWordTitleContainer style={{ padding: '16px' }}>
          <h6>최근 검색</h6>
          <button onClick={onDeleteRecentSearchWordsAll}>전체 삭제</button>
        </RecentSearchWordTitleContainer>
        <div>
          {recentSearchWords.map((item, id) => {
            return <RecentSearchWord key={id} recentSearchWord={item} />;
          })}
        </div>
      </section>
      <section>
        <div>
          {searchResults.map((item, id) => {
            return <EditStock key={id} stockName={item.name} />;
          })}
        </div>
      </section>
      <section>
        <div>{/* SearchResult가 true이면, */}</div>
        <h6 style={{ padding: '16px' }}>검색 결과</h6>
        <div>
          {searchResults.map((item, id) => {
            return (
              <SearchResult
                key={id}
                stockName={item.name}
                stockTickerCode={item.tickercode}
              />
            );
          })}
        </div>
      </section>
      <section>
        {searchResults.map((item, id) => {
          return (
            <FeedStockInfo
              key={id}
              stockName={item.name}
              stockTickerCode={item.tickercode}
            />
          );
        })}
      </section>
    </div>
  );
}

const RecentSearchWordTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Search;
