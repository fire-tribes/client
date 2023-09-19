import SearchResult from '../SearchResult';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '../../hook/useGetSelectedStocks/state';
import ShowAddedStocks from '../ShowAddedStocks';
import APIInstance from '@/core/api/instance';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useDebounce } from 'use-debounce';

interface SearchResultsProps {
  value: string | undefined;
}

interface Stock {
  data: [
    {
      assetId: 0;
      tickerCode: string;
      stockCode: string;
      name: string;
      category: {
        countryType: 'KOR';
        marketType: 'KRX';
        assetCategoryType: 'STOCK';
      };
    },
  ];
  next: true;
  currentPage: 0;
  pageTotalSize: 0;
}

const useGetSearchStocks = (word: string | undefined) => {
  return useQuery({
    queryKey: ['searchedStocks', word],
    queryFn: () =>
      APIInstance.get<Stock>(`asset/find`, {
        params: {
          category: 'STOCK',
          word: word,
          pageIndex: 1,
          pageSize: 10,
        },
      }),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
    // post, delete는 useMutation
  });
};

function SearchResults({ value }: SearchResultsProps) {
  // value를 debounce 처리하여, 일정 시간동안 값이 바뀌면 서버에 get 요청
  const [debouncedValue] = useDebounce(value, 1000);
  const {
    data: getSearchStocks,
    isLoading,
    isError,
  } = useGetSearchStocks(debouncedValue);

  const containerStyle: React.CSSProperties = {
    height: 'calc(100vh - 72px - 53px - 68.5px)',
    padding: '16px',
    textAlign: 'center',
    lineHeight: 'calc(100vh - 72px - 53px - 68.5px)',
  };

  // Jotai의 selectedStocksAtom을 이용해서 선택된 주식을 관리
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);

  console.log('getSearchStocks?: ', getSearchStocks);
  console.log('getSearchStocks?.data: ', getSearchStocks?.data);
  console.log('getSearchStocks?.data.data: ', getSearchStocks?.data.data);
  console.log('getSearchStocks?.data.data.data: ', getSearchStocks?.data.data);
  // 선택 상태를 토글하여 선택된 객체값 배열 핸들링
  const handleToggleSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
      // 이미 선택된 주식인지 아닌지 확인하고, 선택 상태 토글
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

  // 취소버튼 클릭 시, selectedStocks에서 해당 객체값 제거
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
      ) : isError ? (
        <p>Error loading data</p>
      ) : (
        <div>
          {getSearchStocks?.data.data.length !== 1 ? (
            getSearchStocks?.data.data.map((stock) => {
              return (
                <SearchResult
                  key={stock.assetId}
                  stock={stock}
                  isSelected={selectedStocks.some(
                    (selected: SelectedStocksAtomProps) =>
                      selected.stockCode === stock.stockCode,
                  )}
                  toggleSelected={() => handleToggleSelected(stock)}
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

export default SearchResults;
