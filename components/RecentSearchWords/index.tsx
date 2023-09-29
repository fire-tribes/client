import { RecentSearchWordsUI } from './style';
import AlertModal from '../common/Modal/AlertModal';
import RecentSearchWord from '../RecentSearchWord';
import { useGetRecentSearchWords } from '@/hook/useGetRecentSearchWords';
import { useDeleteRecentSearchWord } from '@/hook/useDeleteRecentSearchWord';
import { useRemoveRecentSearchWordsAll } from '@/hook/useRemoveRecentSearchWordsAll';
import { CircularProgress } from '@mui/material';

interface RecentSearchWords {
  word: string;
  date: string;
}

function RecentSearchWords() {
  /** exampleDatas */
  // const exampleDatas = [
  //   { word: '일', date: '2023-09-22T13:54:18.239Z' },
  //   { word: '이', date: '2023-09-22T13:54:18.239Z' },
  //   { word: '삼', date: '2023-09-22T13:54:18.239Z' },
  //   { word: '사', date: '2023-09-22T13:54:18.239Z' },
  //   { word: '오', date: '2023-09-22T13:54:18.239Z' },
  //   { word: '육', date: '2023-09-22T13:54:18.239Z' },
  //   { word: '칠', date: '2023-09-22T13:54:18.239Z' },
  // ];

  /** 최근 검색어 데이터 Get */
  const { getRecentSearchWordsData, isLoading } = useGetRecentSearchWords();
  const recentSearchWordsDataArray = getRecentSearchWordsData?.data;
  console.log('recentSearchWordsDataArray: ', recentSearchWordsDataArray);

  // const [recentSearchWords, setRecentSearchWords] = useState(
  //   recentSearchWordsDataArray,
  // );
  // console.log('recentSearchWords: ', recentSearchWords);

  // useEffect(() => {
  //   const refetchRecentSearchWords = async () => {
  //     const array = await getRecentSearchWordsData?.data;
  //     setRecentSearchWords(array);
  //   };
  //   refetchRecentSearchWords();
  // }, []);

  /** 특정 최근 검색어 Delete  */
  const { deleteRecentSearchWordData } = useDeleteRecentSearchWord();
  const handleDeleteRecentSearchWord = (index: number) => {
    recentSearchWordsDataArray !== undefined &&
      deleteRecentSearchWordData(recentSearchWordsDataArray[index].word);
  };

  /** 전체 최근 검색어 초기화 Post */
  const { mutate } = useRemoveRecentSearchWordsAll();
  // console.log('isRemoveRecentSearchWordsAll: ', mutate());

  return (
    <>
      <RecentSearchWordsUI.TopContainer>
        <h6>최근 추가 주식</h6>
        <AlertModal
          title={'최근 검색어 삭제'}
          message={'최근 검색어를 모두 삭제하시겠어요?'}
          onClickEvent={() => mutate()}
          toastMessage={'최근 검색어를 삭제하였습니다.'}
        >
          <button disabled={recentSearchWordsDataArray === undefined}>
            전체 삭제
          </button>
        </AlertModal>
      </RecentSearchWordsUI.TopContainer>
      <div>
        {recentSearchWordsDataArray === undefined ? (
          <RecentSearchWordsUI.NothingRecentSearchWordsContainer>
            <div>
              최근 검색 기록이 없어요.
              <tr />
              주식 이름 혹은 티커를 검색해주세요.
              <tr />
              (예: JEPI, SCHD)
            </div>
          </RecentSearchWordsUI.NothingRecentSearchWordsContainer>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          recentSearchWordsDataArray.map((stock, id) => {
            return (
              <RecentSearchWord
                key={id}
                stock={stock}
                handleDeleteRecentSearchWord={() =>
                  handleDeleteRecentSearchWord(id)
                }
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default RecentSearchWords;
