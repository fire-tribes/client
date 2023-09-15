import { SearchResultsUI } from './style';
import SearchResult from '../SearchResult';
import ShowAddedStock from '../ShowAddedStock';
import checkFalseSvg from '@/public/icon/checkFalse.svg';
import checkTrueSvg from '@/public/icon/checkTrue.svg';
import removeStockSvg from '@/public/icon/remove_stock.svg';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface SearchResultsProps {
  value: string | undefined;
}

interface Stocks {
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

const useGetSearchStocks = () => {
  return useQuery({
    queryKey: ['searchedStocks'],
    queryFn: () =>
      axios.get<Stocks[]>(
        `http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/asset/find`,
        {
          params: {
            category: 'STOCK',
            word: 'string',
            pageIndex: 1,
            pageSize: 1,
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoyLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2OTQ3NDM0NTB9.FZxDu0a7T0XDZLISeXq0GXQvzvfzerZNd6HUjayf7oUagz1XbtKl7FkxhMGNIKY3PIoY4cmBpq03oKUunHjvNA',
          },
        },
      ),
    onError: (error) => console.log(error), // Toast로 확장 사용
    onSuccess: (response) => console.log(response), // Toast로 확장 사용
    // 포트폴리오 유무에 따라 다르게 처리하기 등도 가능
  });
};
// post, delete는 useMutation
function SearchResults({ value }: SearchResultsProps) {
  const getSearchStocks = useGetSearchStocks();

  console.log('getSearchStocks.data?.data: ', getSearchStocks.data?.data);
  getSearchStocks.status;
  getSearchStocks.refetch; // refetch 조건??
  // 검색 결과 데이터
  const searchResults = [
    { name: 'abca', tickerCode: 'ABCA' },
    { name: 'aaca', tickerCode: 'AACA' },
    { name: 'aaaa', tickerCode: 'AAAA' },
    { name: 'abbc', tickerCode: 'ABBC' },
    { name: 'abbb', tickerCode: 'ABBB' },
    { name: '가나다라', tickerCode: '000001' },
    { name: '가가다라', tickerCode: '000011' },
    { name: '가가가라', tickerCode: '001122' },
    { name: '가가가가', tickerCode: '112233' },
    { name: '가나나라', tickerCode: '113344' },
  ];
  // const results = [];

  // const [stocks, setStocks] = useState<Stocks[]>([]);

  // useEffect(() => {

  //     .then((response) => setStocks(response.data.data));
  // }, [value]);

  // for (let i = 0; i < searchResults.length; i++) {
  //   if (
  //     value === searchResults[i].name ||
  //     value === searchResults[i].tickercode
  //   ) {
  //     results.push(searchResults[i]);
  //   }
  // }

  const containerStyle: React.CSSProperties = {
    height: 'calc(100vh - 72px - 53px - 68.5px)',
    padding: '16px',
    textAlign: 'center',
    lineHeight: 'calc(100vh - 72px - 53px - 68.5px)',
  };

  const [isAddStock, setIsAddStock] = useState(false);
  const handleAddStocks = () => {
    {
      isAddStock ? setIsAddStock(false) : setIsAddStock(true);
    }
  };
  return (
    <>
      <SearchResultsUI.TopContainer>
        {searchResults.map((item, id) => {
          return (
            <ShowAddedStock key={id} stockName={item.name}>
              <button style={{ height: '19px' }}>
                <Image src={removeStockSvg} alt="removeStock Svg" />
              </button>
            </ShowAddedStock>
          );
        })}
      </SearchResultsUI.TopContainer>
      <h6>검색 결과</h6>
      {value === '' ? (
        <div style={containerStyle}>검색어 결과가 없습니다.</div>
      ) : (
        <div>
          {searchResults !== undefined &&
            searchResults.map((item, id) => {
              return (
                <SearchResult
                  key={id}
                  stockName={item.name}
                  stockTickerCode={item.tickerCode}
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
            })}
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
