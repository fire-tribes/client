// import RecentSearchWord from '../RecentSearchWord';
import { RecentSearchWordsUI } from './style';
import AlertModal from '../common/Modal/AlertModal';
import { useGetRecentSearchWords } from '@/hook/useGetRecentSearchWords';
import { useDeleteRecentSearchWord } from '@/hook/useDeleteRecentSearchWord';
import { useRemoveRecentSearchWordsAll } from '@/hook/useRemoveRecentSearchWordsAll';

function RecentSearchWords() {
  /** 최근 검색어 데이터 Get */
  const { getRecentSearchWordsData } = useGetRecentSearchWords();
  const recentSearchWordsDataArray = getRecentSearchWordsData;
  console.log('recentSearchWordsDataArray: ', recentSearchWordsDataArray);

  /** 특정 최근 검색어 Delete  */
  const { deleteRecentSearchWordData } = useDeleteRecentSearchWord('삼성전자');
  const isDeleteRecentSearchWord = deleteRecentSearchWordData?.data;
  console.log('isDeleteRecentSearchWord: ', isDeleteRecentSearchWord);

  /** 전체 최근 검색어 초기화 Post */
  const { removeRecentSearchWordsAllData } = useRemoveRecentSearchWordsAll();
  const isRemoveRecentSearchWordsAll = removeRecentSearchWordsAllData?.data;
  console.log('isRemoveRecentSearchWordsAll: ', isRemoveRecentSearchWordsAll);

  return (
    <>
      <RecentSearchWordsUI.TopContainer>
        <h6>최근 검색</h6>
        <AlertModal
          title={'최근 검색어 삭제'}
          message={'최근 검색어를 모두 삭제하시겠어요?'}
          // onClickEvent={() => mutate()}
          toastMessage={'최근 검색어를 삭제하였습니다.'}
        >
          <button>전체 삭제</button>
        </AlertModal>
      </RecentSearchWordsUI.TopContainer>
      <div>
        {/* {getRecentSearchWords.data !== undefined &&
          (getRecentSearchWords.data.data.length !== 1 ? (
            getRecentSearchWords.data.data.map((item, id) => {
              return <RecentSearchWord key={id} item={item} />;
            })
          ) : (
            <div>
              최근 검색 기록이 없어요.
              <tr />
              주식 이름 혹은 티커를 검색해주세요.
              <tr />
              (예: JEPI, SCHD)
            </div>
          ))} */}
      </div>
    </>
  );
}

export default RecentSearchWords;
