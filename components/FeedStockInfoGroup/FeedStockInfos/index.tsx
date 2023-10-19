// import { FeedStockInfosUI } from './style';
import FeedStockInfo from '../FeedStockInfo';
import NothingStocks from '@/components/common/NothingStocks';
import CommonButton from '@/components/common/Button/CommonButton';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import CheckSvg from '@/public/icon/check.svg';
import { basic } from '@/styles/palette';
import { useGetCurrentPriceInSelectedStocks } from '@/hook/useGetCurrentPriceInSelectedStocks';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

// interface Assets {
//   assetId: number;
//   price: string;
//   count: string;
//   currencyType: string;
// }

function FeedStockInfos() {
  /** Jotai의 selectedStocksAtom을 이용해서 선택된 주식을 관리 */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);

  /** [삭제 함수] Jotai로 만든 주식 종목 배열에서 해당 객체 삭제하는 함수 */
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) =>
      prev.filter((selected: SelectedStocksAtomProps) =>
        stock.tickerCode
          ? selected.tickerCode !== stock.tickerCode
          : selected.stockCode !== stock.stockCode,
      ),
    );
  };

  // const { getCurrentPriceData } = useGetCurrentPrice(exampleAssetIds);

  /** TODO: 현재가 자동 입력 함수(미완) */
  // const exampleAssetIds = 1;
  // const { getCurrentPriceData } = useGetCurrentPrice(
  //   exampleAssetIds,
  //   isPressButton,
  // );

  /** 서버로 재요청 유무 확인을 위한 배열 생성
   * selectedStocks가 생겼을 때 배열을 생성
   * 최초 값은 모두 false이며, 재요청할 때 true로 변경하기 위해 배열을 만들어서 사용 */
  const [isPressAllButton, setIsPressAllButton] = useState<boolean[]>([]);
  useEffect(() => {
    const array = Array.from({ length: selectedStocks.length }, () => false);
    setIsPressAllButton(array);
  }, [selectedStocks]);

  // const datas = useQueries({
  //   queries: selectedStocks.map((stock) => ({
  //     queryKey: queryKeys.CurrentPrice(stock.assetId),
  //     queryFn: () => getCurrentPriceAPI.getCurrentPrice(stock.assetId),
  //     enabled: !!isPressAllButton,
  //   })),
  // });
  /** 예시
   * datas = [
   *  {data, isLoading, refetch, ... },
   *  {data, isLoading, refetch, ... },
   *  {data, isLoading, refetch, ... },
   *  ...등등
   * ]
   */

  const [newIsPressAllButton, setNewIsPressAllButton] = useState(false);

  const {
    // getCurrentPriceDatas,
    // shouldSetAtom,
    // newQueires,
    invalidateCurrentPrices,
    invalidateCurrentPrice,
  } = useGetCurrentPriceInSelectedStocks(isPressAllButton, newIsPressAllButton);

  /**
  // TODO: before
  useEffect(() => {
    if (shouldSetAtom) {
      const currentPricesArray = getCurrentPriceDatas.map(
        (data) => data.data?.data.data[0]?.currentPrice,
      );
      
      if (currentPricesArray.length !== 0) {
        setSelectedStocks((prev) =>
          prev.map((value, id) => ({
            ...value,
            price: String(currentPricesArray[id] || ''),
          })),
        );
      }
    }
  }, [shouldSetAtom]);
   */

  /**
   * 1. getCurrentPriceDatas로 현재가로 구성된 배열을 받아온다.
   * 2. selectedStocks의 price에 getCurrentPriceDatas의 현재가를 넣어준다. (map)
   * 3. 변경된 값을 useEffect에서 실행해서, selectedStocks가 변경될 때, 업데이트한다.
   */

  /**
   * 원래는 데이터가 바뀌는지였다.
   * 데이터가 바뀌면, setState를 할 때, useQuery가 한 번 더 호출되고,
   *
   * 지금은 모두 성공인지 아닌지 확인한다.
   * true일 경우, 해당 값을 바꿔준다.
   */

  /** 현재가 개별 버튼 함수 */
  const handleCurrentPriceButton = (assetId: number, index: number) => {
    // getCurrentPriceDatas[id].refetch;
    invalidateCurrentPrice(assetId);
    // 그대로 간다.
    setIsPressAllButton((prev) => {
      const newArray = [...prev];
      newArray[index] = true;
      return newArray;
    });

    // invalidateCurrentPrices()
  };

  /** 전체 Refetch(서버로 재요청) 함수 */
  const refetchAll = () => {
    invalidateCurrentPrices();
    //   getCurrentPriceDatas.forEach((stock) => stock.refetch());
  };
  /** 현재가 전체 버튼 함수 */
  const handleCurrentPriceAllButton = () => {
    refetchAll();
    setNewIsPressAllButton((prev) => !prev);
    // setIsPressAllButton((prev) => {
    //   const newArray = prev.map(() => true);
    //   return newArray;
    // });
  };

  return (
    <>
      {selectedStocks.length !== 0 && (
        <div style={{ marginBottom: '26px' }}>
          <CommonButton
            style={{
              padding: '8px 10px',
              borderRadius: '25px',
              backgroundColor: `${basic.gray1}`,
              color: `${basic.point_blue02}`,
            }}
            onClick={() => handleCurrentPriceAllButton()}
          >
            <Image src={CheckSvg} alt="check Svg" />
            <span style={{ marginLeft: '6px', fontWeight: 700 }}>
              현재가 전체 자동 입력
            </span>
          </CommonButton>
        </div>
      )}
      <div>
        {selectedStocks.length !== 0 ? (
          selectedStocks.map((stock, id) => {
            /** onChangeCountEventHandle 함수 */
            const onChangeCountEventHandle = (
              e: ChangeEvent<HTMLInputElement>,
            ) => {
              // const { value } = e.target;
              /** 숫자 외의 문자 제거 */
              const value = e.target.value.replace(/[^0-9]/g, '');

              setSelectedStocks((stock) => {
                const array = [...stock];
                array[id].count = value;
                return array;
              });
            };

            /** onChangePriceEventHandle 함수 */
            const onChangePriceEventHandle = (
              e: ChangeEvent<HTMLInputElement>,
            ) => {
              // const { value } = e.target;
              /** 숫자 또는 소수점 외의 문자 제거 */
              const value = e.target.value.replace(/[^0-9.]/g, '');

              /** 소수점을 기준으로 2자리까지만 남기기 */
              const formattedValue = value.split('.');
              if (formattedValue[1]) {
                formattedValue[1] = formattedValue[1].slice(0, 2);
              }

              setSelectedStocks((stock) => {
                const array = [...stock];
                array[id].price = formattedValue.join('.');
                return array;
              });
            };
            return (
              <FeedStockInfo
                key={id}
                stock={stock}
                removeSelected={handleRemoveSelected}
                currentPriceButton={() =>
                  handleCurrentPriceButton(stock.assetId, id)
                }
                inputCountValue={stock.count}
                inputPriceValue={stock.price}
                changeCountEventHandle={onChangeCountEventHandle}
                changePriceEventHandle={onChangePriceEventHandle}
              />
            );
          })
        ) : (
          <NothingStocks />
        )}
        <div style={{ height: '100px' }}></div>
      </div>
    </>
  );
}

export default FeedStockInfos;
