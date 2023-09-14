import PopluarStocks from '@/components/PopularStocks';
import RecentSearchWords from '@/components/RecentSearchWords';
import SearchInput from '@/components/SearchInput';
import SearchResults from '@/components/SearchResults';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import { useState } from 'react';

function SearchStockPage() {
  // 검색 결과 데이터
  // const searchResults = [
  //   { name: 'abca', tickercode: 'ABCA' },
  //   { name: 'aaca', tickercode: 'AACA' },
  //   { name: 'aaaa', tickercode: 'AAAA' },
  //   { name: 'abbc', tickercode: 'ABBC' },
  //   { name: 'abbb', tickercode: 'ABBB' },
  //   { name: '가나다라', tickercode: '000001' },
  //   { name: '가가다라', tickercode: '000011' },
  //   { name: '가가가라', tickercode: '001122' },
  //   { name: '가가가가', tickercode: '112233' },
  //   { name: '가나나라', tickercode: '113344' },
  // ];
  // 최근 검색어 데이터
  // const recentSearchWords = ['APPL', 'MSFT', 'JEPI'];

  // const [pages, setPages] = useState('first');

  // 2-2에서 2-3으로 넘어가기
  const [value, setValue] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  // const [value, setValue] = useState('');

  const handleShowSearchResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      {/* 2-2 주식 검색 시작/최근 검색어 보기, 2-3 주식 추가하기 */}
      <section>
        <SearchInput
          value={value}
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
            <SearchResults value={value} />
          </section>
          <section>
            <BottomFixedButton isDisabled={false}>다음</BottomFixedButton>
          </section>
        </>
      )}
    </div>
  );
}

export default SearchStockPage;
