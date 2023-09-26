import { useAddRecentSearchWord } from '@/hook/useAddRecentSearchWord';
import { useAddStocksAtPortfolio } from '@/hook/useAddStocksAtPortfolio';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import { useMakePortfolio } from '@/hook/useMakePortfolio';
import { Button, ButtonProps, styled } from '@mui/material';
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

  const [selectedStocks] = useAtom(selectedStocksAtom);
  /** 추가 완료 버튼을 눌렀을 때, 실행할 내용
   * 1. 빈 값이 있는지 체크하기, 없을 경우 아래 로직 실행. 있으면 실행되면 안됨
   * 2. 포트폴리오 생성(신규 시)
   * 3. 포트폴리오에 들어갈 자산 배열 만들기
   * 4. 만들어진 배열을 POST의 params 값으로 넣어 '포트폴리오 자산 추가' POST 요청
   */

  /** 2. 포트폴리오에 추가할 자산 목록 */
  const makeAssets = (selectedStocks: SelectedStocksAtomProps[]) => {
    const newAssets = selectedStocks.map((stock) => {
      const newAsset = {
        assetId: stock.assetId,
        count: Number(stock.count),
        price: Number(stock.price),
        currencyType:
          stock.countryType === 'KOR'
            ? 'KRW'
            : stock.countryType === 'USA'
            ? 'USD'
            : 'NONE',
      };

      return newAsset;
    });
    return newAssets;
  };

  /** 다음 버튼을 눌렀을 때, 최근 검색어 데이터 값을 POST 요청하는 함수 */
  const { addRecentSearchWordData } = useAddRecentSearchWord();

  /** 다른 페이지로 이동하는 함수 */
  const onMoveOtherPages = (buttonName: string) => {
    if (buttonName === '다음') {
      if (selectedStocks[0].debouncedValue !== '') {
        addRecentSearchWordData(selectedStocks[0].debouncedValue);
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
      router.push('/fires/edit');
    }
  };

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
            {children}
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
