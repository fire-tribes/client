import PopluarStocks from '@/components/PopularStocks';
import RecentSearchWords from '@/components/RecentSearchWords';
import SearchInput from '@/components/SearchInput';
import SearchResults from '@/components/SearchResults';
import CloseSvg from '@/public/icon/close.svg';
import SearchLayout from '@/components/common/Layout/SearchLayout';
// import FirstComp from '@/components/Test/firstComp';
// import SecondComp from '@/components/Test/secondComp';
import { selectedStocksAtom } from '@/hook/useAtom/state';
import { useState } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';

function Search() {
  // 2-2에서 2-3으로 넘어가기
  const [value, setValue] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  // const [isBottomButton, setIsBottomButton] = useState('');

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
  const handleClickCancel = () => {
    setIsSearchActive(false);
    // input창에 value값 초기화
    setValue('');
  };

  // 결과값
  const [selectedStocks] = useAtom(selectedStocksAtom);

  return (
    <SearchLayout
      isDisabled={selectedStocks.length !== 0 ? false : true}
      buttonName={'다음'}
      isSearchActive={isSearchActive}
    >
      {/* 2-2 주식 검색 시작/최근 검색어 보기, 2-3 주식 추가하기 */}
      <section>
        <SearchInput
          value={value}
          onFocus={handleInputClick}
          onChange={(e) => handleShowSearchResult(e)}
        >
          <button onClick={handleClickCancel} style={{ height: '52px' }}>
            <Image src={CloseSvg} width={24} height={24} alt="Close Icon" />
          </button>
        </SearchInput>
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
        </>
      )}
    </SearchLayout>
  );
}

export default Search;
