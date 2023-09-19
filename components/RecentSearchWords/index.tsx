// import RecentSearchWord from '../RecentSearchWord';
import AlertModal from '../common/Modal/AlertModal';
import APIInstance from '@/core/api/instance';
import { useMutation, useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

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
      APIInstance.get<GetRecentSearchWords>(`user/recent-search-word/list`, {
        params: {
          size: 10,
        },
      }),
    onError: (error) => console.log('error: ', error),
    onSuccess: (response) => console.log('success: ', response),
  });
};

const useDeleteRecentSearchWords = () => {
  return useMutation({
    mutationKey: ['deleteRecentSearchWords'],
    mutationFn: () =>
      APIInstance.post<DeleteRecentSearchWords>(`recent-search-word/clear-all`),
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
          toastMessage={'최근 검색어를 삭제하였습니다.'}
        >
          <button>전체 삭제</button>
        </AlertModal>
      </RecentSearchWordTitleContainer>
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

const RecentSearchWordTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  white-space: nowrap;
`;

export default RecentSearchWords;
