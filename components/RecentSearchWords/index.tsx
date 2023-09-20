// import RecentSearchWord from '../RecentSearchWord';
import { RecentSearchWordsUI } from './style';
import AlertModal from '../common/Modal/AlertModal';
import APIInstance from '@/core/api/instance';
import { useMutation, useQuery } from '@tanstack/react-query';

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
    onError: (error) => console.log('error: ', error), // TODO: 404 에러 페이지로 이동
    onSuccess: (response) => console.log('success: ', response), // TODO: Toast로 확장 사용
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
  const getRecentSearchWords = useGetRecentSearchWords();
  console.log(
    'getRecentSearchWords.data?.data:',
    getRecentSearchWords.data?.data,
  );

  const { mutate } = useDeleteRecentSearchWords();

  return (
    <>
      <RecentSearchWordsUI.TopContainer>
        <h6>최근 검색</h6>
        <AlertModal
          title={'최근 검색어 삭제'}
          message={'최근 검색어를 모두 삭제하시겠어요?'}
          onClickEvent={() => mutate()}
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
