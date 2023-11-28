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
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { useExchangeRate } from '@/hook/useExchangeRate';
import {
  checkDecimalPointLength,
  handleDecimalPoint,
} from '@/core/utils/handleNumber';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

function FeedStockInfos() {
  /** COMPLETED: 1. 선택된 주식 배열 가져오기  */
  /* 1-1. Jotai(selectedStocks, 선택된 목록)으로 선택된 배열 가져오기  */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);
  /* 1-2. Cache에 있는 환율 정보 가져오기(GET) */
  const { exchangeRate } = useExchangeRate();
  const EXCHANGE_RATE = exchangeRate;

  /** COMPLETED: 2. 가져온 배열에서 객체값 삭제하기 */
  const handleRemoveSelected = (stock: SelectedStocksAtomProps) => {
    setSelectedStocks((prev: SelectedStocksAtomProps[]) =>
      prev.filter((selectedStock: SelectedStocksAtomProps) =>
        stock.tickerCode
          ? selectedStock.tickerCode !== stock.tickerCode
          : selectedStock.stockCode !== stock.stockCode,
      ),
    );
  };

  /** COMPLETED: 3. 현재가 버튼 클릭 시, 가져온 배열에서 현재가 반영하기 */
  /** 3-1. 서버에 재요청 유무를 확인할 수 있는 배열 생성하기
   * '(전체)현재가', '(개별)현재가'가 따로 존재하며, 서버로 요청은 '(개별)현재가'만 존재한다.
   * 전체 현재가 버튼 클릭 시, 한꺼번에 재요청할 수 있도록 핸들링할 수 있는 배열이 필요하다.
   */
  const [isPressAllButton, setIsPressAllButton] = useState<boolean[]>([]);
  const [newIsPressAllButton, setNewIsPressAllButton] = useState(false);
  useEffect(() => {
    const array = Array.from({ length: selectedStocks.length }, () => false);
    setIsPressAllButton(array);
  }, []);
  /* 3-2. 서버로 현재가 데이터 GET 요청하기 */
  const {
    getCurrentPriceDatas,
    invalidateCurrentPrice,
    invalidateCurrentPrices,
  } = useGetCurrentPriceInSelectedStocks(isPressAllButton, newIsPressAllButton);
  /* 2-2. '현재가 입력' 버튼으로 price 데이터 변경하기 */
  const handleCurrentPriceButton = (
    assetId: number,
    index: number,
    currencyType: ExchangeRateSymbol,
  ) => {
    const result = getCurrentPriceDatas[index].data?.data;
    if (result) {
      invalidateCurrentPrice(assetId, currencyType);
      return;
    }

    // if (result) {
    //   const roundedPriceToTwoDecimalPoint = handleDecimalPoint(
    //     Math.round,
    //     result.data[0].currentPrice,
    //     2,
    //   );

    //   setSelectedStocks((prev) => {
    //     const newSelectedStocks = [...prev];
    //     newSelectedStocks[index].price = roundedPriceToTwoDecimalPoint;
    //     return newSelectedStocks;
    //   });
    //   return;
    // }

    // console.log('start');
    setIsPressAllButton((prev) => {
      const newArray = [...prev];
      newArray[index] = true;
      return newArray;
    });
  };
  /* 2-3. '현재가 전체 입력' 버튼으로 price 데이터 전체 변경하기 */
  const handleCurrentPriceAllButton = () => {
    invalidateCurrentPrices();
    setNewIsPressAllButton((prev) => !prev);
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
            /* COMPLETED: 수량 및 가격 데이터 변경하기 */
            /* 2-2-1. count, price 데이터 직접 변경하기 */
            /* onChangeCountEventHandle 함수 */
            const onChangeCountEventHandle = (
              e: ChangeEvent<HTMLInputElement>,
            ) => {
              /* 숫자 또는 소수점 외의 문자 제거 */
              const { value } = e.target;

              const currentCountValueDecimalPointLength =
                checkDecimalPointLength(selectedStocks[id].count) || 0;
              const newCountValueDecimalPointLength =
                checkDecimalPointLength(value) || 0;

              if (newCountValueDecimalPointLength > 2) {
                if (
                  newCountValueDecimalPointLength >
                  currentCountValueDecimalPointLength
                ) {
                  setSelectedStocks((stock) => {
                    const array = [...stock];
                    array[id].count = handleDecimalPoint(Math.round, value, 2);
                    return array;
                  });
                  return;
                }
              }

              setSelectedStocks((stock) => {
                const array = [...stock];
                array[id].count = value;
                return array;
              });
            };

            /* onChangePriceEventHandle 함수 */
            const onChangePriceEventHandle = (
              e: ChangeEvent<HTMLInputElement>,
            ) => {
              const { value } = e.currentTarget;

              const currentPriceValueDecimalPointLength =
                checkDecimalPointLength(selectedStocks[id].price) || 0;
              const newPriceValueDecimalPointLength =
                checkDecimalPointLength(value) || 0;

              if (stock.currencyType === 'KRW') {
                setSelectedStocks((stock) => {
                  const array = [...stock];
                  const result = handleDecimalPoint(Math.floor, value, 0);
                  array[id].price = result.toString().replace(/[^0-9]/g, '');

                  return array;
                });
                return;
              }

              if (newPriceValueDecimalPointLength > 2) {
                if (
                  newPriceValueDecimalPointLength >
                  currentPriceValueDecimalPointLength
                ) {
                  setSelectedStocks((stock) => {
                    const array = [...stock];
                    const result = handleDecimalPoint(Math.floor, value, 2);
                    array[id].price = result;
                    return array;
                  });
                  return;
                }
              }

              setSelectedStocks((stock) => {
                const array = [...stock];
                array[id].price = value;
                return array;
              });
            };

            /** COMPLETED: newCurrencyType으로 달러 또는 원화 변경하기 */
            const handleCurrencyType = (
              newCurrencyType: ExchangeRateSymbol,
            ) => {
              setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
                let newPrice = prev[id].price;
                if (newCurrencyType === 'USD' && EXCHANGE_RATE !== undefined) {
                  newPrice = handleDecimalPoint(
                    Math.round,
                    Number(newPrice) / EXCHANGE_RATE,
                    2,
                  );
                } else if (
                  newCurrencyType === 'KRW' &&
                  EXCHANGE_RATE !== undefined
                ) {
                  newPrice = handleDecimalPoint(
                    Math.round,
                    Number(newPrice) * EXCHANGE_RATE,
                    0,
                  );
                }
                // 이전 상태를 복사하여 새로운 배열 생성한다.
                const updatedSelectedStocks = [...prev];
                // 특정 id의 객체를 찾아서 currencyType를 newCurrencyType으로 변경한다.
                updatedSelectedStocks[id] = {
                  ...updatedSelectedStocks[id],
                  price: newPrice,
                  currencyType: newCurrencyType,
                };
                return updatedSelectedStocks;
              });
            };

            console.log('stock.price: ', stock.price);
            return (
              <FeedStockInfo
                key={id}
                stock={stock}
                removeSelected={handleRemoveSelected}
                handleCurrentPrice={() =>
                  handleCurrentPriceButton(
                    stock.assetId,
                    id,
                    stock.currencyType,
                  )
                }
                inputCountValue={stock.count}
                inputPriceValue={stock.price}
                changeCountEventHandle={onChangeCountEventHandle}
                changePriceEventHandle={onChangePriceEventHandle}
                handleCurrencyType={handleCurrencyType}
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
