import { SearchedResultsUI } from './style';
import SearchedResult from '@/components/SearchStockGroup/SearchedResult';
import ShowAddedStocks from '@/components/SearchStockGroup/ShowAddedStocks';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import { useGetSearchedResults } from '@/hook/useGetSearchedResults';
import {
  SearchedResultsAtomProps,
  searchedResultsAtom,
} from '@/hook/useGetSearchedResults/state';
import { useMyPortFolio } from '@/hook/useMyPortFolio';
import { useAtom } from 'jotai';
import { useDebounce } from 'use-debounce';
import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

interface Stock {
  assetId: number;
  tickerCode: string;
  stockCode: string;
  name: string;
  countryType: 'KOR' | 'USA';
  marketType:
    | 'KRX'
    | 'KRX_KOSPI'
    | 'KRX_KOSDAQ'
    | 'KRX_KONEX'
    | 'NYSE'
    | 'AMEX'
    | 'NASDAQ'
    | 'UNKNOWN';
  assetCategoryType: 'STOCK' | 'ETF' | 'ETN';
}
interface SearchResultsProps {
  /** 입력한 검색어 */
  value: string;
  /** 기존 포트폴리오에 값을 추가인지, 신규 포트폴리오에 값을 추가하는 건지 확인 */
  portfolioId: number | undefined;
}

function SearchedResults({ value, portfolioId }: SearchResultsProps) {
  /** value를 debounce 처리하여, 일정 시간동안 값이 바뀌면 서버에 get 요청 */
  const [debouncedValue] = useDebounce(value, 0.5 * 1000);

  const [nextPageIndex, setNextPageIndex] = useState(1);
  /** 검색 결과값을 배열로 가져오는 함수 */
  const {
    getSearchedResultsData,
    isLoading,
    hasNextPage,
    invalidateSearchedResultsData,
  } = useGetSearchedResults(debouncedValue, nextPageIndex);
  const searchedResultsArray = getSearchedResultsData?.data;

  const [searchedResults, setSearchedResults] = useAtom(searchedResultsAtom);

  useEffect(() => {
    if (searchedResultsArray !== undefined) {
      if (nextPageIndex === 1) {
        setSearchedResults(searchedResultsArray);
      } else {
        setSearchedResults([...searchedResults, ...searchedResultsArray]);
      }
    }
  }, [nextPageIndex, searchedResultsArray, setSearchedResults]);

  useEffect(() => {
    setNextPageIndex(1);
    setSearchedResults([]);
    invalidateSearchedResultsData(debouncedValue, nextPageIndex);

    const newSearchedResultsArray = getSearchedResultsData?.data;
    if (newSearchedResultsArray !== undefined) {
      setSearchedResults(newSearchedResultsArray);
    }
  }, [debouncedValue]);

  const onClickLoadMoreButton = async () => {
    if (!hasNextPage) return;

    setNextPageIndex(nextPageIndex + 1);
  };

  /** Jotai의 selectedStocksAtom을 이용해서 선택된 주식을 관리 */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);

  /** 선택 상태를 토글하여 선택된 객체값 배열 핸들링 */
  const handleToggleSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      /** 이미 선택된 주식인지 아닌지 확인하고, 선택 상태 토글 */
      const isNewSelectedStocks = prev.some(
        (selected: SelectedStocksAtomProps) =>
          stock.tickerCode
            ? selected.tickerCode === stock.tickerCode
            : selected.stockCode === stock.stockCode,
      );
      if (isNewSelectedStocks) {
        const notMatchedStocks = prev.filter(
          (selected: SelectedStocksAtomProps) =>
            stock.tickerCode
              ? selected.tickerCode !== stock.tickerCode
              : selected.stockCode !== stock.stockCode,
        );
        return notMatchedStocks;
      } else {
        const newAddedSelectedStocks = [...prev, stock];

        return newAddedSelectedStocks;
      }
    });
  };

  /** toggleSelected 함수를 useCallback으로 감싸서 debouncedValue가 변경될 때마다 함수가 새로 생성되도록 함 */
  const toggleSelected = useCallback(
    (stock: Stock) => (
      console.log('debouncedValue in toggleSelected: ', debouncedValue),
      handleToggleSelected({
        ...stock,
        count: '',
        price: '',
        debouncedValue: debouncedValue,
      })
    ),
    [debouncedValue, handleToggleSelected],
  );

  /** 취소버튼 클릭 시, selectedStocks에서 해당 객체값 제거 */
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      return prev.filter((selected: SelectedStocksAtomProps) =>
        stock.tickerCode
          ? selected.tickerCode !== stock.tickerCode
          : selected.stockCode !== stock.stockCode,
      );
    });
  };

  /** 이미 있는 자산이라면, 버튼 삭제하는 로직 */
  const { myPortFolioData } = useMyPortFolio();

  /**  */
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
              const hasAlreadyStockInPortfolio = (
                searchedResultsStock: SearchedResultsAtomProps,
              ) => {
                /** portfolioId가 존재한다면(기존 포트폴리오가 있다면), */
                if (portfolioId !== undefined) {
                  /** 기존 포트폴리오의 Ticker와 SearchedStocks의 Ticker를 비교하기  */
                  /** 기존 포트폴리오의 자산 배열 */
                  const portfolioStocks = myPortFolioData?.assetDetails;
                  /** 검색된 자산 배열 */
                  if (portfolioStocks !== undefined) {
                    for (let i = 0; i < portfolioStocks.length; i++) {
                      if (
                        portfolioStocks[i].tickerCode ===
                        searchedResultsStock.tickerCode
                      ) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                  }
                }
              };

              return (
                <SearchedResult
                  key={stock.assetId}
                  stock={stock}
                  debouncedValue={debouncedValue}
                  hasAlreadyStockInPortfolio={hasAlreadyStockInPortfolio(stock)}
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
            <SearchedResultsUI.Button
              onClick={onClickLoadMoreButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <SearchedResultsUI.LoadingContainer>
                  <CircularProgress />
                </SearchedResultsUI.LoadingContainer>
              ) : (
                '더 보기'
              )}
            </SearchedResultsUI.Button>
          )}
          <div style={{ height: 'calc(100px)' }}></div>
        </div>
      )}
    </>
  );
}

export default SearchedResults;
