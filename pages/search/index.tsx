import SearchedResults from '@/components/SearchStockGroup/SearchedResults';
import SearchLayoutV2 from '@/components/commonV2/Layout/SearchLayoutV2';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import BiggerCloseSvg from '@/public/icon/biggerClose.svg';
import SmallerCloseSvg from '@/public/icon/smallerClose.svg';
import SearchInput from '@/components/SearchStockGroup/SearchInput';
import RecentSearchWords from '@/components/SearchStockGroup/RecentSearchWords';
// import PopularStocks from '@/components/SearchStockGroup/PopularStocks';
import useUpdateRecentSearchWords from '@/hook/useUpdateRecentSearchWords';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import { useState } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CircularProgress,
  Slide,
  SlideProps,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import styled from '@emotion/styled';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

function Search() {
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: number };

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
  const handleButtonHidden: React.CSSProperties = {
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

  /** Toast 컴포넌트 작동 로직 */
  const [showToast, setShowToast] = useState<{ open: boolean }>({
    open: false,
  });

  const handleConfirmButton = () => () => {
    setShowToast({
      open: true,
    });
    // setIsShowToast(true);
  };

  const handleClose = () => {
    setShowToast({
      ...showToast,
      open: false,
    });
  };

  /** '다음' 관련 로직 */
  const { updateRecentSearchWords, isLoadingUpdateRecentSearchWords } =
    useUpdateRecentSearchWords();

  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = async () => {
    /** 최근 검색어에 해당 검색어(debouncedValue) 추가 */
    if (selectedStocks[0].debouncedValue !== '') {
      updateRecentSearchWords();
      if (portfolioId) {
        router.push(`/add?portfolioId=${portfolioId}`);
      } else {
        router.push('/add');
      }
    }
  };
  return (
    <SearchLayoutV2
      bottomFixedButton={
        <BottomFixedButton
          isDisabled={selectedStocks.length !== 0 ? false : true}
          onChange={
            selectedStocks.length <= 10
              ? onMoveOtherPages
              : handleConfirmButton()
          }
          isLoading={isLoadingUpdateRecentSearchWords}
        >
          다음
        </BottomFixedButton>
      }
      hasButton={isSearchActive}
      headMetaProps={{
        title: '스노우볼 - 배당 주식 검색',
      }}
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
                  style={handleButtonHidden}
                >
                  <Image src={SmallerCloseSvg} alt="smallerClose Svg" />
                </button>
              }
              biggerCancelButton={
                <Link
                  href={portfolioId ? '/' : '/empty'}
                  style={{ height: '52px' }}
                >
                  <a>
                    <Image
                      src={BiggerCloseSvg}
                      width={24}
                      height={24}
                      alt="Close Icon"
                      onClick={() => setLoading(true)}
                    />
                  </a>
                </Link>
              }
            />
          </section>
          {!isSearchActive ? (
            <>
              {/* <section>
                <PopularStocks />
              </section> */}
              <section>
                <RecentSearchWords
                  onClickRecentSearchWord={onClickRecentSearchWord}
                />
              </section>
            </>
          ) : (
            <>
              <section>
                <SearchedResults value={value} />
              </section>
            </>
          )}
          <Snackbar
            open={showToast.open}
            onClose={handleClose}
            autoHideDuration={3 * 1000}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            TransitionComponent={SlideTransition}
            style={{
              position: 'absolute',
              left: '50%',
              right: 'auto',
              bottom: '12%',
              transform: 'translateX(-50%)',
              width: '398px',
              zIndex: '2',
            }}
          >
            <SnackbarContent
              style={{
                width: '100%',
                justifyContent: 'center',
              }}
              message={
                <span id="client-snackbar">
                  한 번에 10개까지 추가 가능합니다.
                </span>
              }
            />
          </Snackbar>
        </>
      )}
    </SearchLayoutV2>
  );
}

const LoadingContainer = styled.div`
  height: calc(100vh - 16px - 52px - 40px - 19px - 52px - 56px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Search;
