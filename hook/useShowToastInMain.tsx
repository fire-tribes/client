import CommonFont from '@/components/common/Font';
import { useControlSnackbarV2 } from '@/hook/useControlSnackbarV2';
import { queryKeys } from '@/hook/useQueryHook/queryKeys';
import { useRefetchPortfolioAndDividendAndCalender } from '@/hook/useRefetchPortfolioAndDividendAndCalender';
import { useQueryClient } from '@tanstack/react-query';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const queryClientAtom = atom<{
  status: 'success' | 'loading' | 'error' | 'idle';
}>({
  status: 'idle',
});

export const useShowToastInMain = () => {
  const queryClient = useQueryClient();
  const [statusAtom, setStatusAtom] = useAtom(queryClientAtom);
  const { openSnackbar, closeSnackbar, resetSnackbar } = useControlSnackbarV2();
  const { refetch } = useRefetchPortfolioAndDividendAndCalender();

  const annualDividendKRQueryState = queryClient.getQueryState(
    queryKeys.annualDividendKR(),
  );
  const monthlyCalanderDividendKRQueryState = queryClient.getQueryState(
    queryKeys.monthlyCalanderDividendKR(),
  );
  const myPortfolioQueryState = queryClient.getQueryState(
    queryKeys.myPortFolio(),
  );

  const everyQueries = [
    annualDividendKRQueryState,
    monthlyCalanderDividendKRQueryState,
    myPortfolioQueryState,
  ];

  const isError = everyQueries.some(
    (queryState) => queryState?.status === 'error',
  );

  const isLoading = everyQueries.some(
    (queryState) => queryState?.fetchStatus === 'fetching',
  );

  const isFirstSuccess = everyQueries.some(
    (queryState) => queryState?.status === 'success',
  );

  const isSuccess = everyQueries.every(
    (queryState) => queryState?.status === 'success',
  );

  useEffect(() => {
    if (isLoading) {
      openSnackbar({
        message: '최신 자산으로 업데이트 중입니다.',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => {},
      });
      setStatusAtom({ status: 'loading' });
      return;
    }

    if (isSuccess) {
      const isLoadingAfterSuccess = statusAtom.status === 'loading';
      const isErrorAfterSuccess = statusAtom.status === 'error';

      if (isLoadingAfterSuccess || isErrorAfterSuccess) {
        resetSnackbar();
        setTimeout(
          () =>
            openSnackbar({
              message: '성공',
              autoHideDuration: 1 * 1000,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              },
              onClose: () => {
                closeSnackbar();
              },
            }),
          500,
        );
        setStatusAtom({ status: 'success' });
        return;
      }
    }

    if (isError) {
      setStatusAtom({ status: 'error' });
      openSnackbar({
        action: (
          <button onClick={() => refetch()}>
            <CommonFont component="div" color="point_blue01">
              재시도
            </CommonFont>
          </button>
        ),
        message: '오류가 발생했어요. 다시 시도해주세요.',
        autoHideDuration: 5 * 1000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        onClose: () => {
          closeSnackbar();
        },
      });
      return;
    }
  }, [isError, isLoading, isSuccess]);

  return {
    isError,
    isLoading,
    isFirstSuccess,
    isSuccess,
  };
};
