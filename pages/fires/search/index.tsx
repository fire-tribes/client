import PopularStock from '@/components/PopularStock';
import RecentSearchWord from '@/components/RecentSearchWord';
import SearchInput from '@/components/SearchInput';
// import SearchResult from '@/components/SearchResult';
import styled from '@emotion/styled';

function Search() {
  // data
  const popularStocks = [
    { name: 'JEPI', fluctuation: true },
    { name: 'SCHD', fluctuation: false },
    { name: 'AAPL', fluctuation: true },
  ]; // 차후, Axios로 데이터 요청
  const recentSearchWords = ['APPL', 'MSFT', 'JEPI']; // 차후, Axios로 데이터 요청 필요

  const onDeleteRecentSearchWordsAll = () => {
    // 내용 추가
  };

  return (
    <div>
      <section>
        <SearchInput />
      </section>
      <section>
        <h6>인기 주식</h6>
        <div>
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
        <RecentSearchWordTitleContainer>
          <h6>최근 검색</h6>
          <button onClick={onDeleteRecentSearchWordsAll}>전체 삭제</button>
        </RecentSearchWordTitleContainer>
        <div>
          {recentSearchWords.map((item, id) => {
            return <RecentSearchWord key={id} recentSearchWord={item} />;
          })}
        </div>
      </section>
      {/* <SearchResult /> */}
    </div>
  );
}

const RecentSearchWordTitleContainer = styled.div`
  display: flex;
`;

export default Search;
