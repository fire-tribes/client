import EditStock from '../EditStock';

function EditStocks() {
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

  return (
    <>
      <div>
        종목의 우측 버튼을 통해 순서를 조정하고 삭제할 수 있습니다. 종목을
        탭하면 보유 수량, 평단가를 수정할 수 있습니다.
      </div>
      <div>
        {searchResults.map((item, id) => {
          return <EditStock key={id} stockName={item.name} />;
        })}
      </div>
    </>
  );
}

export default EditStocks;
