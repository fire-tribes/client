import Backward from '@/components/Backward';
import EditStocks from '@/components/EditStocks';
import FeedStockInfo from '@/components/FeedStockInfo';
import FeedStockInfos from '@/components/FeedStockInfos';
import PopluarStocks from '@/components/PopularStocks';
import RecentSearchWords from '@/components/RecentSearchWords';
import SearchInput from '@/components/SearchInput';
import SearchResults from '@/components/SearchResults';
import CommonButton from '@/components/common/Button/CommonButton';
import { useState } from 'react';

function SearchStockPage() {
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

  const [pages, setPages] = useState('first');

  // 2-2에서 2-3으로 넘어가기
  const [stock, setStock] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  // const [value, setValue] = useState('');

  const handleShowSearchResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.value);
  };
  const handleInputClick = () => {
    const searchInput = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;
    searchInput.focus();

    // 검색창이 활성화되면 검색 활성 상태를 true로 변경
    setIsSearchActive(true);
  };
  return (
    <div>
      <button onClick={() => setPages('first')}>first</button>
      {/* 2-2 주식 검색 시작/최근 검색어 보기, 2-3 주식 추가하기 */}
      {pages === 'first' && (
        <>
          <section>
            <SearchInput
              stock={stock}
              onFocus={handleInputClick}
              handleShowSearchResult={(e) => handleShowSearchResult(e)}
            />
          </section>
          {!isSearchActive ? (
            <>
              <section>
                <PopluarStocks />
              </section>
              <section>
                <RecentSearchWords />
              </section>
            </>
          ) : (
            <>
              <section>
                <SearchResults stock={stock} />
              </section>
              <section>
                <CommonButton>다음</CommonButton>
              </section>
            </>
          )}
        </>
      )}
      {/* 2-4 보유 주식 정보 입력 단계 */}
      {pages === 'third' && (
        <>
          <section>
            <Backward title={'보유 주식 정보 입력'} />
          </section>
          <section>
            <FeedStockInfos />
          </section>
          <section>
            <CommonButton>추가 완료</CommonButton>
          </section>
        </>
      )}
      {/* 3-2 주식 편집(전체) */}
      {pages === 'fourth' && (
        <>
          <section>
            <Backward title={'보유 주식 편집'} />
          </section>
          <section>
            <EditStocks />
          </section>
          <section>
            <CommonButton>완료</CommonButton>
          </section>
        </>
      )}
      {/* 3-2 주식 편집(개별) */}
      {pages === 'fifth' && (
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

export default SearchStockPage;
