import { SearchedResultsUI } from './style';
import SearchedResult from '../SearchedResult';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '../../hook/useGetSelectedStocks/state';
import ShowAddedStocks from '../ShowAddedStocks';
import { useGetSearchedResults } from '@/hook/useGetSearchedResults';
import { basic } from '@/styles/palette';
import { useAtom } from 'jotai';
import { useDebounce } from 'use-debounce';
import { CircularProgress } from '@mui/material';
import { useCallback } from 'react';

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
}

function SearchedResults({ value }: SearchResultsProps) {
  /** value를 debounce 처리하여, 일정 시간동안 값이 바뀌면 서버에 get 요청 */
  const [debouncedValue] = useDebounce(value, 1000);

  /** 검색 결과값을 배열로 가져오는 함수 */
  const { getSearchedResultsData, isLoading } =
    useGetSearchedResults(debouncedValue);
  const searchedResultsArray = getSearchedResultsData?.data;

  const containerStyle: React.CSSProperties = {
    height: 'calc(100vh - 72px - 53px - 68.5px)',
    padding: '16px',
    textAlign: 'center',
    lineHeight: 'calc(100vh - 72px - 53px - 68.5px)',
    color: `${basic.gray6}`,
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

  return (
    <>
      <ShowAddedStocks
        selectedStocks={selectedStocks}
        removeSelected={handleRemoveSelected}
      />
      <h6>검색 결과</h6>
      {debouncedValue === '' ? (
        <div style={containerStyle}>검색어 결과가 없습니다.</div>
      ) : isLoading ? (
        <SearchedResultsUI.LoadingContainer>
          <CircularProgress />
        </SearchedResultsUI.LoadingContainer>
      ) : (
        <div>
          {searchedResultsArray !== undefined &&
            searchedResultsArray.map((stock) => {
              return (
                <SearchedResult
                  key={stock.assetId}
                  stock={stock}
                  debouncedValue={debouncedValue}
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
          {searchedResultsArray === undefined && (
            <div style={containerStyle}>검색어 결과가 없습니다.</div>
          )}
          <div style={{ height: 'calc(92px - 56px)' }}></div>
        </div>
      )}
    </>
  );
}

export default SearchedResults;
