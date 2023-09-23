import SearchResult from '../SearchResult';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '../../hook/useGetSelectedStocks/state';
import ShowAddedStocks from '../ShowAddedStocks';
import { useGetSearchedResults } from '@/hook/useGetSearchedResults';
import { useAtom } from 'jotai';
import { useDebounce } from 'use-debounce';

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
  const searchedResultsArray = getSearchedResultsData;
  console.log('searchedResultsArray: ', searchedResultsArray);

  const containerStyle: React.CSSProperties = {
    height: 'calc(100vh - 72px - 53px - 68.5px)',
    padding: '16px',
    textAlign: 'center',
    lineHeight: 'calc(100vh - 72px - 53px - 68.5px)',
  };

  /** Jotai의 selectedStocksAtom을 이용해서 선택된 주식을 관리 */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);

  /** 선택 상태를 토글하여 선택된 객체값 배열 핸들링 */
  const handleToggleSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      /** 이미 선택된 주식인지 아닌지 확인하고, 선택 상태 토글 */
      const isNewSelectedStocks = prev.some(
        (selected: SelectedStocksAtomProps) =>
          selected.stockCode === stock.stockCode,
      );
      if (isNewSelectedStocks) {
        const notMatchedStocks = prev.filter(
          (selected: SelectedStocksAtomProps) =>
            selected.stockCode !== stock.stockCode,
        );

        return notMatchedStocks;
      } else {
        const newAddedSelectedStocks = [...prev, stock];

        return newAddedSelectedStocks;
      }
    });
  };
  console.log('handleToggleSelected: ', handleToggleSelected);

  /** 취소버튼 클릭 시, selectedStocks에서 해당 객체값 제거 */
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      return prev.filter(
        (selected: SelectedStocksAtomProps) =>
          selected.stockCode !== stock.stockCode,
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
        <p>Loading...</p>
      ) : (
        <div>
          {searchedResultsArray !== undefined ? (
            searchedResultsArray.map((stock) => {
              return (
                <SearchResult
                  key={stock.assetId}
                  // stock={stock}
                  isSelected={selectedStocks.some(
                    (selected: SelectedStocksAtomProps) =>
                      selected.stockCode === stock.stockCode,
                  )}
                  // toggleSelected={() => handleToggleSelected(stock)}
                />
              );
            })
          ) : (
            <div style={containerStyle}>검색어 결과가 없습니다.</div>
          )}
          {/* {getSearchStocks.data !== undefined &&
            getSearchStocks.data.data.map((item, id) => {
              return (
                <SearchResult
                  key={item.data[id].assetId}
                  stockName={item.data[id].name}
                  stockTickerCode={item.data[id].tickerCode}
                >
                  {isAddStock ? (
                    <button onClick={handleAddStocks}>
                      <Image src={checkTrueSvg} alt="checkTrue Svg" />
                    </button>
                  ) : (
                    <button onClick={handleAddStocks}>
                      <Image src={checkFalseSvg} alt="checkFalse Svg" />
                    </button>
                  )}
                </SearchResult>
              );
            })} */}
        </div>
      )}
    </>
  );
}

export default SearchedResults;
