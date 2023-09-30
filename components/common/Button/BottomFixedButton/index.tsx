import { useAddStocksAtPortfolio } from '@/hook/useAddStocksAtPortfolio';
import { useEditPortfolio } from '@/hook/useEditPortfolio';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import useMakeAssets from '@/hook/useMakeAssets';
import { useMakePortfolio } from '@/hook/useMakePortfolio';
import useUpdateRecentSearchWords from '@/hook/useUpdateRecentSearchWords';
import { Button, ButtonProps, CircularProgress, styled } from '@mui/material';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

interface ButtonCSSProps extends ButtonProps {
  isDisabled: boolean;
  buttonName: string;
}

function BottomFixedButton({
  children,
  color = 'primary',
  variant = 'contained',
  isDisabled = false,
  buttonName,
  ...rest
}: ButtonCSSProps) {
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: string };

  /** 포트폴리오 생성 POST 요청 useFeatureHook */
  const { makePortfolioData } = useMakePortfolio();
  /** 포트폴리오 자산 추가 POST 요청 useFeatureHook */
  const { addStocksAtPortfolioData } = useAddStocksAtPortfolio();
  /** POST 요청에 보낼 Assets 만들기 useMakeAssets */
  const { makeAssets } = useMakeAssets();
  const [selectedStocks] = useAtom(selectedStocksAtom);
  /** TODO: useFeatureHook으로 리팩토링 */
  const makePortfolio = () => {
    /** 1-1.포트폴리오가 없을 경우, 포트폴리오 생성하고 portfolioId 사용 */
    if (!portfolioId) {
      makePortfolioData().then((response) => {
        /** 3. 포트폴리오 자산 추가 POST 요청에 formData로 보낼 객체 생성 */
        console.log(response);
        const formData = {
          portfolioId: response.portfolioId,
          assets: makeAssets(selectedStocks),
        };
        console.log('makePortfolio formData: ', formData);
        addStocksAtPortfolioData(formData);
      });
    }
  };
  /** TODO: useFeatureHook으로 리팩토링 */
  const madePortfolio = () => {
    /** 1-2. 포트폴리오가 있을 경우, 기존의 portfolioId 사용 */
    const formData = {
      portfolioId: Number(portfolioId),
      assets: makeAssets(selectedStocks),
    };
    console.log('madePortfolio formData: ', formData);
    addStocksAtPortfolioData(formData);
  };

  const { updateRecentSearchWords } = useUpdateRecentSearchWords();
  const { isLoading, updatePort } = useEditPortfolio();

  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = async (buttonName: string) => {
    if (buttonName === '다음') {
      console.log('selectedStocks for debouncdedValue: ', selectedStocks);
      if (selectedStocks[0].debouncedValue !== '') {
        updateRecentSearchWords();
        router.push('/fires/add');
      }
    }
    if (buttonName === '추가 완료') {
      if (portfolioId) {
        madePortfolio();
      } else {
        makePortfolio();
      }
      router.push('/');
    }
    if (buttonName === '완료') {
      router.push('/fires/main/full');
    }
    if (buttonName === '수정 완료') {
      try {
        await updatePort();
        router.push('/fires/edit');
      } catch (err) {
        alert(`error 발생 : ${err}`);
      }
    }
  };
  // console.log('isLoading: ', isLoading);

  return (
    <div>
      <span
        style={{
          position: 'fixed',
          minWidth: '320px',
          maxWidth: '430px',
          bottom: 92,
          width: '100%',
          height: '16px',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)',
        }}
      ></span>
      <div
        style={{
          position: 'fixed',
          minWidth: '320px',
          maxWidth: '430px',
          bottom: 0,
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <div style={{ margin: '16px' }}>
          <StyledButton
            color={color}
            variant={variant}
            {...rest}
            disabled={isDisabled}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
            }}
            onClick={() => onMoveOtherPages(buttonName)}
          >
            {isLoading ? <CircularProgress /> : children}
          </StyledButton>
        </div>
      </div>
    </div>
  );
}

const StyledButton = styled(Button)`
  width: 100%;

  text-transform: none;

  font-weight: 300;
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }
`;

export default BottomFixedButton;
