import { useAddRecentSearchWord } from './useAddRecentSearchWord';
import { useGetRecentSearchWords } from './useGetRecentSearchWords';
import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useAtom } from 'jotai';

function useUpdateRecentSearchWords() {
  /** 선택된 주식 종목 */
  const [selectedStocks] = useAtom(selectedStocksAtom);

  /** 다음 버튼을 눌렀을 때, 최근 검색어 데이터 값을 POST 요청하는 함수 */
  const { addRecentSearchWordData } = useAddRecentSearchWord();

  /** 최근 검색어 Get 요청 */
  const { getRecentSearchWordsData } = useGetRecentSearchWords();
  const recentSearchWordsDataArray = getRecentSearchWordsData?.data;

  const updateRecentSearchWords = () => {
    if (recentSearchWordsDataArray === undefined) {
      console.log('첫 번째 조건문: ');
      addRecentSearchWordData(
        selectedStocks[selectedStocks.length - 1].debouncedValue,
      );
    } else if (recentSearchWordsDataArray.length === 0) {
      console.log('두 번째 조건문: ');
      addRecentSearchWordData(
        selectedStocks[selectedStocks.length - 1].debouncedValue,
      );
    } else if (
      recentSearchWordsDataArray[recentSearchWordsDataArray.length - 1].word ===
      selectedStocks[selectedStocks.length - 1].debouncedValue
    ) {
      console.log('세 번째 조건문: ');
    } else {
      console.log('조건문 해당사항 없음');
      addRecentSearchWordData(
        selectedStocks[selectedStocks.length - 1].debouncedValue,
      );
    }
  };

  return {
    updateRecentSearchWords,
  };
}

export default useUpdateRecentSearchWords;
