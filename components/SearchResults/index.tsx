import SearchResult from '../SearchResult';

interface SearchResultsProps {
  stock: string;
}

function SearchResults({ stock }: SearchResultsProps) {
  // 검색 결과 데이터
  const searchResults = [
    { name: 'abca', tickercode: 'ABCA' },
    { name: 'aaca', tickercode: 'AACA' },
    { name: 'aaaa', tickercode: 'AAAA' },
    { name: 'abbc', tickercode: 'ABBC' },
    { name: 'abbb', tickercode: 'ABBB' },
    { name: '가나다라', tickercode: '000001' },
    { name: '가가다라', tickercode: '000011' },
    { name: '가가가라', tickercode: '001122' },
    { name: '가가가가', tickercode: '112233' },
    { name: '가나나라', tickercode: '113344' },
  ];
  const results = [];

  for (let i = 0; i < searchResults.length; i++) {
    if (
      stock === searchResults[i].name ||
      stock === searchResults[i].tickercode
    ) {
      results.push(searchResults[i]);
    }
  }

  return (
    <>
      <h6 style={{ padding: '16px' }}>검색 결과</h6>
      {stock === '' ? (
        <div>검색어 결과가 없습니다.</div>
      ) : (
        <div>
          {results.map((item, id) => {
            return (
              <SearchResult
                key={id}
                stockName={item.name}
                stockTickerCode={item.tickercode}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchResults;
