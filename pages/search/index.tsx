import PopluarStocks from '@/components/PopularStocks';
import RecentSearchWords from '@/components/RecentSearchWords';
import SearchInput from '@/components/SearchInput';
import SearchedResults from '@/components/SearchedResults';
import SearchLayout from '@/components/common/Layout/SearchLayout';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import BiggerCloseSvg from '@/public/icon/biggerClose.svg';
import SmallerCloseSvg from '@/public/icon/smallerClose.svg';
import { useState } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

function Search() {
  const router = useRouter();
  const { portfolioId } = router.query;

  const [value, setValue] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [loading, setLoading] = useState(false);

  /** Input창에 Value가 생기면, SearchResult 화면으로 변경하는 함수 */
  const handleShowSearchResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  /** Input창을 클릭하는 함수 */
  const handleInputClick = () => {
    const searchInput = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;
    searchInput.focus();
    setIsSearchActive(true);
  };
  /** Input 태그가 활성화되면 작은 취소 버튼이 생김 */
  const handlButtonHidden: React.CSSProperties = {
    display: isSearchActive ? 'inline' : 'none',
  };
  /** 작은 취소 버튼을 눌렀을 때, Input의 검색어 초기화 함수 */
  const handleClickSmallerCancelButton = () => {
    setIsSearchActive(false);
    setValue('');
  };

  const [selectedStocks] = useAtom(selectedStocksAtom);

  /** 최근 검색어 결과에서 검색어를 클릭했을 때, input의 value로 전달하는 함수 */
  const onClickRecentSearchWord = (word: string) => {
    setValue(word);

    if (word !== '') {
      const searchInput = document.getElementById(
        'searchInput',
      ) as HTMLInputElement;
      searchInput.focus();
      setIsSearchActive(true);
    }
  };

  /** 다음 쪽까지 렌더링 */
  const [nextPageIndex, setNextPageIndex] = useState(2);
  const incrementPageIndex = () => {
    setNextPageIndex((prev) => prev + 1);
  };

  return (
    <SearchLayout
      hasButton={isSearchActive}
      isDisabled={selectedStocks.length !== 0 ? false : true}
      buttonName={'다음'}
    >
      {loading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <>
          <section>
            <SearchInput
              value={value}
              onFocus={handleInputClick}
              onChange={(e) => handleShowSearchResult(e)}
              smallerCancelButton={
                <button
                  onClick={handleClickSmallerCancelButton}
                  style={handlButtonHidden}
                >
                  <Image src={SmallerCloseSvg} alt="smallerClose Svg" />
                </button>
              }
              biggerCancelButton={
                <Link
                  href={portfolioId ? '/' : '/empty'}
                  style={{ height: '52px' }}
                  onClick={() => setLoading(true)}
                >
                  <Image
                    src={BiggerCloseSvg}
                    width={24}
                    height={24}
                    alt="Close Icon"
                  />
                </Link>
              }
            />
          </section>
          {!isSearchActive ? (
            <>
              <section>
                <PopluarStocks />
              </section>
              <section>
                <RecentSearchWords
                  onClickRecentSearchWord={onClickRecentSearchWord}
                />
              </section>
            </>
          ) : (
            <>
              <section>
                <SearchedResults
                  value={value}
                  nextPageIndex={nextPageIndex}
                  incrementPageIndex={incrementPageIndex}
                />
              </section>
            </>
          )}
        </>
      )}
    </SearchLayout>
  );
}

const LoadingContainer = styled.div`
  height: calc(100vh - 16px - 52px - 40px - 19px - 52px - 56px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Search;
