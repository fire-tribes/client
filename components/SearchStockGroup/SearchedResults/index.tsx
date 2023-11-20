import { SearchedResultsUI } from './style';
import SearchedResult from '@/components/SearchStockGroup/SearchedResult';
import ShowAddedStocks from '@/components/SearchStockGroup/ShowAddedStocks';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import { useGetSearchedResults } from '@/hook/useGetSearchedResults';
import { GetSearchedResultData } from '@/@types/models/getSearchedResults';
import { useIntersectionObserver } from '@/hook/useIntersectionObserver';
import { basic } from '@/styles/palette';
import useGetMyPortfolio from '@/hook/useGetMyPortfolio';
import { useAtom } from 'jotai';
import { useDebounce } from 'use-debounce';
import { CircularProgress } from '@mui/material';
import { useCallback, useRef } from 'react';

interface SearchResultsProps {
  /* INFO: 입력한 검색어 */
  value: string;
}

function SearchedResults({ value }: SearchResultsProps) {
  /** COMPLETED: 1. 검색어에 해당되는 값 가져오기 */
  /* 1-1. Input 창에서 입력한 value를 debounce 처리하기 */
  /* 1-2. debounce 처리한 debounceValue를 서버에 GET 요청하여 가져오기 */
  /** COMPLETED: 2. 검색어에 해당되는 값 더 가져오기(무한스크롤) */
  /* 2-1. useRef로 '더 보기' 요소에 접근하기 */
  /* 2-2. useIntersectionObserver 내부로직 작성 */
  /** COMPLETED: 3. 가져온 배열 값 사용하기 */
  /* 3-1. 선택 버튼 클릭 시, 선택한 값 보여주기 */
  /* 3-2. 선택한 값의 취소 버튼 클릭 시, 취소한 값 제거하기 */
  /* 3-3. ('추가' 로직으로 입장했을 때) 이미 있는 자산은, 선택 버튼 숨기기 */

  /** COMPLETED: 1. 검색어에 해당되는 값 가져오기 */
  /* 1-1. Input 창에서 입력한 value를 debounce 처리하기 */
  const [debouncedValue] = useDebounce(value, 0.5 * 1000);
  /* 1-2. debounce 처리한 debounceValue를 서버에 GET 요청하여 가져오기 */
  const { getSearchedResultsData, isLoading, fetchNextPage, hasNextPage } =
    useGetSearchedResults(debouncedValue);
  const searchedResults = getSearchedResultsData;

  /** COMPLETED: 2. 검색어에 해당되는 값 더 가져오기(무한스크롤) */
  /* 2-1. useRef로 '더 보기' 요소에 접근하기 */
  const ref = useRef<HTMLDivElement>(null);
  /* 2-2. useIntersectionObserver 내부로직 작성 */
  useIntersectionObserver(ref, () => fetchNextPage());

  /** COMPLETED: 3. 가져온 배열 값 사용하기 */
  /* 3-1. 선택 버튼 클릭 시, 선택한 값 보여주기 */
  /* 3-1-1. 선택한 주식을 담을 Jotai 설정하기 */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);
  /* 3-1-2. 선택 상태를 Toggle로 Jotai에 선택적으로 담을 수 있도록 다루기 */
  const handleToggleSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      // some() 함수는 조건에 만족하는 값을 발견되는 즉시 true로 반환한다.
      /* 조건: Jotai(SelectedStocks, 선택된 목록)에 이미 stock 객체값이 들어있는지 여부를
      tickerCode, stockCode로 확인한다. */
      const isNewSelectedStocks = prev.some(
        (selectedStock: SelectedStocksAtomProps) =>
          stock.tickerCode
            ? selectedStock.tickerCode === stock.tickerCode
            : selectedStock.stockCode === stock.stockCode,
      );

      // Jotai(SelectedStock, 선택된 목록)에 해당 주식(stock 객체값)이 존재한다면,
      if (isNewSelectedStocks) {
        /* 해당 주식을 목록에서 제거하여 선택을 해제한다. */
        const notMatchedStocks = prev.filter(
          (selectedStock: SelectedStocksAtomProps) =>
            stock.tickerCode
              ? selectedStock.tickerCode !== stock.tickerCode
              : selectedStock.stockCode !== stock.stockCode,
        );
        return notMatchedStocks;
      } else {
        // Jotai(SelectedStock, 선택된 목록)에 해당 주식(stock 객체값)이 존재하지 않는다면,
        /* 해당 주식을 목록에 추가하여 선택한다. */
        const newAddedSelectedStocks = [...prev, stock];
        return newAddedSelectedStocks;
      }
    });
  };
  /* 3-1-3. debouncedValue가 변경될 때마다 handleToggleSelected() 함수를 초기화하기 */
  const toggleSelected = useCallback(
    (stock: GetSearchedResultData) =>
      handleToggleSelected({
        ...stock,
        count: '',
        price: '',
        currencyType: stock.countryType === 'KOR' ? 'KRW' : 'USD',
        debouncedValue: debouncedValue,
      }),
    // [debouncedValue],
    [debouncedValue, handleToggleSelected],
  );
  /* 3-2. 선택한 값의 취소 버튼 클릭 시, 취소한 값 제거하기 */
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      return prev.filter((selectedStock: SelectedStocksAtomProps) =>
        stock.tickerCode
          ? selectedStock.tickerCode !== stock.tickerCode
          : selectedStock.stockCode !== stock.stockCode,
      );
    });
  };
  /* 3-3. ('추가' 로직으로 입장했을 때) 이미 있는 자산은, 선택 버튼 숨기기 */
  const { myPortfolioCacheData } = useGetMyPortfolio();
  const portfolioStocksInCache = myPortfolioCacheData?.data?.assetDetails;
  const isHaveStockAlready = (searchedResult: GetSearchedResultData) => {
    if (portfolioStocksInCache) {
      return portfolioStocksInCache.some(
        (portfolioStock) =>
          portfolioStock.tickerCode === searchedResult.tickerCode,
      );
    }
    return false;
  };

  return (
    <>
      <ShowAddedStocks
        selectedStocks={selectedStocks}
        removeSelected={handleRemoveSelected}
      />
      <h6>검색 결과</h6>
      {debouncedValue === '' || searchedResults === undefined ? (
        <SearchedResultsUI.SearchNothingContainer>
          검색어 결과가 없습니다.
        </SearchedResultsUI.SearchNothingContainer>
      ) : isLoading ? (
        <SearchedResultsUI.LoadingContainer>
          <CircularProgress />
        </SearchedResultsUI.LoadingContainer>
      ) : (
        <div>
          {searchedResults !== undefined &&
            searchedResults.map((stock) => {
              return (
                <SearchedResult
                  key={stock.assetId}
                  stock={stock}
                  debouncedValue={debouncedValue}
                  hasAlreadyStockInPortfolio={isHaveStockAlready(stock)}
                  isSelected={selectedStocks.some(
                    (selected: SelectedStocksAtomProps) =>
                      stock.tickerCode
                        ? selected.tickerCode === stock.tickerCode
                        : selected.stockCode === stock.stockCode,
                  )}
                  toggleSelected={() => toggleSelected(stock)}
                />
              );
            })}
          {hasNextPage && (
            <SearchedResultsUI.BottomContainer
              // onClick={onClickLoadMoreButton}
              // disabled={isLoading}
              ref={ref}
              style={{
                marginBottom: '120px',
                color: `${basic.gray4}`,
              }}
            >
              {isLoading ? (
                <SearchedResultsUI.LoadingContainer>
                  <CircularProgress />
                </SearchedResultsUI.LoadingContainer>
              ) : (
                '더 보기'
              )}
            </SearchedResultsUI.BottomContainer>
          )}
        </div>
      )}
    </>
  );
}

export default SearchedResults;
