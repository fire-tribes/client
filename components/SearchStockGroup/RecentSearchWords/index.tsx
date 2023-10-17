import { RecentSearchWordsUI } from './style';
import AlertModal from '@/components/common/Modal/AlertModal';
import RecentSearchWord from '@/components/SearchStockGroup/RecentSearchWord';
import { useGetRecentSearchWords } from '@/hook/useGetRecentSearchWords';
import { useDeleteRecentSearchWord } from '@/hook/useDeleteRecentSearchWord';
import { useRemoveRecentSearchWordsAll } from '@/hook/useRemoveRecentSearchWordsAll';
import { basic } from '@/styles/palette';
// import { GetRecentSearchWords } from '@/@types/models/getRecentSearchWords';
import { CircularProgress } from '@mui/material';

interface RecentSearchWords {
  word: string;
  date: string;
}

interface RecentSearchWordsProps {
  onClickRecentSearchWord: (word: string) => void;
}

function RecentSearchWords({
  onClickRecentSearchWord,
}: RecentSearchWordsProps) {
  /** exampleDatas */

  /** 최근 검색어 데이터 Get */
  const { getRecentSearchWordsData, isLoadingGetRecentSearchWordsData } =
    useGetRecentSearchWords();
  const recentSearchWordsDataArray = getRecentSearchWordsData?.data.reverse();
  console.log('recentSearchWordsDataArray: ', recentSearchWordsDataArray);

  /** 특정 최근 검색어 Delete  */
  const { deleteRecentSearchWordData } = useDeleteRecentSearchWord();
  const handleDeleteRecentSearchWord = (index: number) => {
    recentSearchWordsDataArray !== undefined &&
      deleteRecentSearchWordData(recentSearchWordsDataArray[index].word);
  };

  /** 전체 최근 검색어 초기화 Post */
  const { mutate } = useRemoveRecentSearchWordsAll();
  // console.log('isRemoveRecentSearchWordsAll: ', mutate());
  /** 수정 */

  console.log('recentSearchWordsDataArray: ', recentSearchWordsDataArray);
  return (
    <>
      <RecentSearchWordsUI.TopContainer>
        <h6>최근 추가 주식</h6>
        <AlertModal
          title={'최근 검색어 삭제'}
          message={'최근 검색어를 모두 삭제하시겠어요?'}
          onClickEvent={() => mutate()}
          isShowToast={true}
          toastMessage={'최근 검색어를 모두 삭제하였습니다.'}
        >
          <button
            disabled={
              recentSearchWordsDataArray === undefined ||
              recentSearchWordsDataArray.length === 0
            }
            style={{
              color: `${basic.gray6}`,
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            전체 삭제
          </button>
        </AlertModal>
      </RecentSearchWordsUI.TopContainer>

      {recentSearchWordsDataArray === undefined ||
      recentSearchWordsDataArray.length === 0 ? (
        <RecentSearchWordsUI.NothingRecentSearchWordsContainer>
          <div>
            최근 검색 기록이 없어요.
            <tr />
            주식 이름 혹은 티커를 검색해주세요.
            <tr />
            (예: JEPI, SCHD)
          </div>
        </RecentSearchWordsUI.NothingRecentSearchWordsContainer>
      ) : isLoadingGetRecentSearchWordsData ? (
        <RecentSearchWordsUI.LoadingContainer>
          <CircularProgress />
        </RecentSearchWordsUI.LoadingContainer>
      ) : (
        recentSearchWordsDataArray.map((stock, id) => {
          return (
            <RecentSearchWord
              key={id}
              stock={stock}
              handleDeleteRecentSearchWord={() =>
                handleDeleteRecentSearchWord(id)
              }
              onClickRecentSearchWord={onClickRecentSearchWord}
            />
          );
        })
      )}
    </>
  );
}

export default RecentSearchWords;
