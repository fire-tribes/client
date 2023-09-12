import RecentSearchWord from '../RecentSearchWord';
import AlertModal from '../common/Modal/AlertModal';
import styled from '@emotion/styled';

function RecentSearchWords() {
  // 최근 검색어 데이터
  const recentSearchWords = ['APPL', 'MSFT', 'JEPI'];

  const onDeleteRecentSearchWordsAll = () => {
    // 내용 추가
  };

  return (
    <>
      <RecentSearchWordTitleContainer style={{ padding: '16px' }}>
        <h6>최근 검색</h6>
        <AlertModal
          title={'최근 검색어 삭제'}
          message={'최근 검색어를 모두 삭제하시겠어요?'}
        >
          <button onClick={onDeleteRecentSearchWordsAll}>전체 삭제</button>
        </AlertModal>
      </RecentSearchWordTitleContainer>
      <div>
        {recentSearchWords.map((item, id) => {
          return <RecentSearchWord key={id} recentSearchWord={item} />;
        })}
      </div>
    </>
  );
}

const RecentSearchWordTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  white-space: nowrap;
`;

export default RecentSearchWords;
