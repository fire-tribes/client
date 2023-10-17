import FeedStockInfos from '@/components/FeedStockInfoGroup/FeedStockInfos';
import { selectedStocksAtom } from '@/hook/useGetSelectedStocks/state';
import Backward from '@/components/common/Backward';
import BottomFixedButton from '@/components/common/Button/BottomFixedButton';
import { useMakePortfolio } from '@/hook/useMakePortfolio';
import { useAddStocksAtPortfolio } from '@/hook/useAddStocksAtPortfolio';
import useMakeAssets from '@/hook/useMakeAssets';
import SearchLayoutV2 from '@/components/commonV2/Layout/SearchLayoutV2';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

function Add() {
  /** '추가 완료' 관련 함수 */
  const router = useRouter();
  const { portfolioId } = router.query as { portfolioId?: string };

  /** 포트폴리오 생성 POST 요청 useFeatureHook */
  const { makePortfolioData, isLoadingMakePortfolioData } = useMakePortfolio();
  /** 포트폴리오 자산 추가 POST 요청 useFeatureHook */
  const { addStocksAtPortfolioData, isLoadingAddStocksAtPortfolioData } =
    useAddStocksAtPortfolio();
  const isLoading =
    isLoadingMakePortfolioData || isLoadingAddStocksAtPortfolioData;
  /** POST 요청에 보낼 Assets 만들기 useMakeAssets */
  const { makeAssets } = useMakeAssets();
  /** 선택한 주식 종목 배열 */
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

  /** 추가 완료 버튼을 눌렀을 때 작동할 기능 */
  const onMoveOtherPages = async () => {
    console.log('portfolioId: ', portfolioId);
    if (portfolioId) {
      madePortfolio();
      /** jotai 초기화 */
      // setSelectedStocks([]);
    } else {
      makePortfolio();
      /** jotai 초기화 */
      // setSelectedStocks([]);
    }
  };

  const hasValueAtCountOrPrice = () => {
    const values: boolean[] = [];
    selectedStocks.forEach((selectedStock) => {
      if (
        selectedStock.count === '0' ||
        selectedStock.price === '0' ||
        selectedStock.count === '' ||
        selectedStock.price === ''
      ) {
        values.push(false);
      }

      values.push(true);
    });

    return values.every((value) => value); // 모든 값이 true인지 확인
  };

  return (
    <SearchLayoutV2
      buttomFixedButton={
        <BottomFixedButton
          isDisabled={
            selectedStocks.length !== 0 && hasValueAtCountOrPrice()
              ? false
              : true
          }
          onChange={onMoveOtherPages}
          isLoading={isLoading}
        >
          추가 완료
        </BottomFixedButton>
      }
      hasButton={selectedStocks.length !== 0 ? true : false}
      headMetaProps={{
        title: '스노우볼 - 배당 정보 입력',
        image: '/icon/snow_logo.png',
      }}
    >
      <section>
        <Backward title={'보유 주식 정보 입력'} />
      </section>
      <section>
        <FeedStockInfos />
      </section>
    </SearchLayoutV2>
  );
}

export default Add;
