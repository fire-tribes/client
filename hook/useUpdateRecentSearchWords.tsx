import { useAddRecentSearchWord } from './useAddRecentSearchWord';
import { useGetRecentSearchWords } from './useGetRecentSearchWords';
import { selectedStocksAtom } from './useGetSelectedStocks/state';
import { useAtom } from 'jotai';

function useUpdateRecentSearchWords() {
  /** 선택된 주식 종목 */
  const [selectedStocks] = useAtom(selectedStocksAtom);

  /** 다음 버튼을 눌렀을 때, 최근 검색어 데이터 값을 POST 요청하는 함수 */
  const { addRecentSearchWordData, isLoadingAddRecentSearchWordData } =
    useAddRecentSearchWord();

  /** 최근 검색어 Get 요청 */
  const { getRecentSearchWordsData, isLoadingGetRecentSearchWordsData } =
    useGetRecentSearchWords();
  const recentSearchWordsDataArray = getRecentSearchWordsData?.data;

  const isLoadingUpdateRecentSearchWords: boolean =
    isLoadingAddRecentSearchWordData || isLoadingGetRecentSearchWordsData;

  const updateRecentSearchWords = () => {
    if (recentSearchWordsDataArray === undefined) {
      addRecentSearchWordData(
        selectedStocks[selectedStocks.length - 1].debouncedValue,
      );
    } else if (recentSearchWordsDataArray.length === 0) {
      addRecentSearchWordData(
        selectedStocks[selectedStocks.length - 1].debouncedValue,
      );
    } else if (
      recentSearchWordsDataArray[recentSearchWordsDataArray.length - 1].word !==
      selectedStocks[selectedStocks.length - 1].debouncedValue
    ) {
      addRecentSearchWordData(
        selectedStocks[selectedStocks.length - 1].debouncedValue,
      );
    }
  };

  return {
    updateRecentSearchWords,
    isLoadingUpdateRecentSearchWords,
  };
}

export default useUpdateRecentSearchWords;
