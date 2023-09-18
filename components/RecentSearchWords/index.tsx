import RecentSearchWord from '../RecentSearchWord';
import AlertModal from '../common/Modal/AlertModal';
import { useMutation, useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import axios from 'axios';

interface GetRecentSearchWords {
  success: true;
  data: [
    {
      word: string;
      date: string;
    },
  ];
  errorCode: string;
  message: string;
}

interface DeleteRecentSearchWords {
  success: boolean;
  data: boolean;
  errorCode: string;
  message: string;
}

const useGetRecentSearchWords = () => {
  return useQuery({
    queryKey: ['getRecentSearchWords'],
    queryFn: () =>
      axios.get<GetRecentSearchWords>(
        `http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/user/recent-search-word/list`,
        {
          params: {
            size: 10,
          },
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoyLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2OTQ3NDM0NTB9.FZxDu0a7T0XDZLISeXq0GXQvzvfzerZNd6HUjayf7oUagz1XbtKl7FkxhMGNIKY3PIoY4cmBpq03oKUunHjvNA',
          },
        },
      ),
    onError: (error) => console.log('error: ', error),
    onSuccess: (response) => console.log('success: ', response),
  });
};

const useDeleteRecentSearchWords = () => {
  return useMutation({
    mutationKey: ['deleteRecentSearchWords'],
    mutationFn: () =>
      axios.post<DeleteRecentSearchWords>(
        `http://fire-env-1.eba-xhu334c9.ap-northeast-2.elasticbeanstalk.com/api/v1/user/recent-search-word/clear-all`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcklkIjoyLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJleHAiOjE2OTQ3NDM0NTB9.FZxDu0a7T0XDZLISeXq0GXQvzvfzerZNd6HUjayf7oUagz1XbtKl7FkxhMGNIKY3PIoY4cmBpq03oKUunHjvNA',
          },
        },
      ),
  });
};

function RecentSearchWords() {
  // 서버로부터 최근 검색어 GET
  const getRecentSearchWords = useGetRecentSearchWords();
  console.log(
    'getRecentSearchWords.data?.data:',
    getRecentSearchWords.data?.data,
  );

  const { mutate } = useDeleteRecentSearchWords();
  // 서버에게 모든 최근 검색어 DELETE

  // 서버에게 개별 최근 검색어 DELETE

  return (
    <>
      <RecentSearchWordTitleContainer>
        <h6>최근 검색</h6>
        <AlertModal
          title={'최근 검색어 삭제'}
          message={'최근 검색어를 모두 삭제하시겠어요?'}
          onClickEvent={() => mutate()}
        >
          <button>전체 삭제</button>
        </AlertModal>
      </RecentSearchWordTitleContainer>
      <div>
        {getRecentSearchWords.data !== undefined &&
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
          ))}
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
