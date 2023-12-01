import FeedStockInfo from '../FeedStockInfo';
import NothingStocks from '@/components/common/NothingStocks';
import CommonButton from '@/components/common/Button/CommonButton';
import {
  SelectedStocksAtomProps,
  selectedStocksAtom,
} from '@/hook/useGetSelectedStocks/state';
import CheckSvg from '@/public/icon/check.svg';
import { basic } from '@/styles/palette';
import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';
import { useExchangeRate } from '@/hook/useExchangeRate';
import {
  checkDecimalPointLength,
  handleDecimalPoint,
} from '@/core/utils/handleNumber';
import { useGetCurrentPriceAllInSelectedStocks } from '@/hook/useGetCurrentPriceAllInSelectedStocks';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

export type HandleCurrencyTypeFunction = (params: {
  newCurrencyType: ExchangeRateSymbol;
  index: number;
}) => void;

function FeedStockInfos() {
  /** COMPLETED: 1. 선택된 주식 배열 가져오기  */
  /* 1-1. Jotai(selectedStocks, 선택된 목록)으로 선택된 배열 가져오기  */
  const [selectedStocks, setSelectedStocks] = useAtom(selectedStocksAtom);
  /* 1-2. 환율 정보 가져오기(GET) */
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
  // const [isPressAllButton, setIsPressAllButton] = useState<boolean[]>([]);
  const [newIsPressAllButton, setNewIsPressAllButton] = useState(false);
  /* 3-2. 서버로 현재가 데이터 GET 요청하기 */
  const { invalidateCurrentPrices } =
    useGetCurrentPriceAllInSelectedStocks(newIsPressAllButton);
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
          selectedStocks.map((stock, index) => {
            /* COMPLETED: 수량 및 가격 데이터 변경하기 */
            /* 2-2-1. count, price 데이터 직접 변경하기 */
            /* onChangeCountEventHandle 함수 */
            const onChangeCountEventHandle = (
              e: ChangeEvent<HTMLInputElement>,
            ) => {
              /* 숫자 또는 소수점 외의 문자 제거 */
              const { value } = e.target;

              const currentCountValueDecimalPointLength =
                checkDecimalPointLength(selectedStocks[index].count) || 0;
              const newCountValueDecimalPointLength =
                checkDecimalPointLength(value) || 0;

              if (newCountValueDecimalPointLength > 2) {
                if (
                  newCountValueDecimalPointLength >
                  currentCountValueDecimalPointLength
                ) {
                  setSelectedStocks((stock) => {
                    const array = [...stock];
                    array[index].count = handleDecimalPoint(
                      Math.floor,
                      value,
                      2,
                    );
                    return array;
                  });
                  return;
                }
              }

              setSelectedStocks((stock) => {
                const array = [...stock];
                array[index].count = value;
                return array;
              });
            };

            /* onChangePriceEventHandle 함수 */
            const onChangePriceEventHandle = (
              e: ChangeEvent<HTMLInputElement>,
            ) => {
              // change event가 발생하면 selectedStocks의 index 값을 통해 접근하여 cached 값을 초기화
              setSelectedStocks((stock) => {
                const array = [...stock];
                array[index].cachedPrice = {
                  KRW: undefined,
                  USD: undefined,
                };

                return array;
              });

              // 기존 로직
              const { value } = e.currentTarget;
              const currentPriceValueDecimalPointLength =
                checkDecimalPointLength(selectedStocks[index].price) || 0;
              const newPriceValueDecimalPointLength =
                checkDecimalPointLength(value) || 0;

              if (stock.currencyType === 'KRW') {
                setSelectedStocks((stock) => {
                  const array = [...stock];
                  const result = handleDecimalPoint(Math.floor, value, 0);
                  array[index].price = result.toString().replace(/[^0-9]/g, '');
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
                    array[index].price = result;
                    return array;
                  });
                  return;
                }
              }

              setSelectedStocks((stock) => {
                const array = [...stock];
                array[index].price = value;
                return array;
              });
            };

            /** COMPLETED: newCurrencyType으로 달러 또는 원화 변경하기 */
            const handleCurrencyType: HandleCurrencyTypeFunction = ({
              newCurrencyType,
              index,
            }) => {
              // 접근
              console.log('selectedStocks:', selectedStocks);
              console.log('selectedStock is :', selectedStocks[index]);
              console.log('index', index);

              const { cachedPrice } = selectedStocks[index];
              const cachedCurrentCurrencyTypeValue =
                cachedPrice[newCurrencyType];

              console.log(
                'cachedCurrentCurrencyTypeValue',
                cachedCurrentCurrencyTypeValue,
              );

              // 현재 변경하려는 타입의 캐시된 데이터가 존재한다면 별다른 로직을 수행하지 않고 그대로 리턴
              if (cachedCurrentCurrencyTypeValue) {
                setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
                  const updatedSelectedStocks = [...prev];
                  // 특정 index의 객체를 찾아서 currencyType를 newCurrencyType으로 변경한다.
                  updatedSelectedStocks[index] = {
                    ...updatedSelectedStocks[index],
                    price: cachedCurrentCurrencyTypeValue,
                    currencyType: newCurrencyType,
                  };

                  return updatedSelectedStocks;
                });

                return;
              }

              if (!cachedCurrentCurrencyTypeValue) {
                if (!EXCHANGE_RATE) return;

                setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
                  const prevPrice = prev[index].price;
                  const newUpdatedSelectedStocks = [...prev];

                  if (newCurrencyType === 'USD') {
                    const newPrice = handleDecimalPoint(
                      Math.floor,
                      Number(prevPrice) / EXCHANGE_RATE,
                      2,
                    );

                    const prevCachedPrice =
                      newUpdatedSelectedStocks[index].cachedPrice;
                    const newCachedPrice = {
                      ...prevCachedPrice,
                      [newCurrencyType]: newPrice,
                    };

                    newUpdatedSelectedStocks[index] = {
                      ...prev[index],
                      price: newPrice,
                      cachedPrice: newCachedPrice,
                      currencyType: newCurrencyType,
                    };

                    return newUpdatedSelectedStocks;
                  }

                  if (newCurrencyType === 'KRW') {
                    const newPrice = handleDecimalPoint(
                      Math.floor,
                      Number(prevPrice) * EXCHANGE_RATE,
                      0,
                    );

                    const prevCachedPrice =
                      newUpdatedSelectedStocks[index].cachedPrice;
                    const newCachedPrice = {
                      ...prevCachedPrice,
                      [newCurrencyType]: newPrice,
                    };

                    newUpdatedSelectedStocks[index] = {
                      ...prev[index],
                      price: newPrice,
                      cachedPrice: newCachedPrice,
                      currencyType: newCurrencyType,
                    };

                    return newUpdatedSelectedStocks;
                  }

                  return prev;
                });
              }
            };

            // return prev

            // }

            //           // return updatedSelectedStocks;

            //       // FIXME: EXCHANGE_RATE는 상수이기 때문에 없을 경우가 존재하지 않는다. exchangeRate 로 변수명 변경필요
            //             /** TODO: 리팩토링 진행
            //          *  let 사용 x
            //          *  else if 말고 if 문만을 여러번 사용
            //          *  공통으로 들어가는 EXCHANGE_RATE !== undefined는 첫번쨰 if 문에서 일괄처리
            //          *
            //          *  USD인 경우 로직 실행 후 리턴
            //          *  KRW인 경우 로직 실행 후 리턴
            //          */

            //     }
            //       // if (EXCHANGE_RATE) {

            //       //   updatedSelectedStocks[index] = {
            //       //     ...updatedSelectedStocks[index],
            //       //     price: newPrice,
            //       //     cachedPrice:
            //       //     currencyType: newCurrencyType,
            //       //   };
            //       //   return updatedSelectedStocks;

            //       // }

            //       // if (newCurrencyType === 'KRW') {
            //       //   newPrice = handleDecimalPoint(
            //       //     Math.floor,
            //       //     Number(newPrice) * EXCHANGE_RATE,
            //       //     0,
            //       //   );
            //       // }
            //       // } else if (
            //       //   newCurrencyType === 'KRW' &&
            //       //   // EXCHANGE_RATE !== undefined
            //       // ) {

            //       // }
            //       // 이전 상태를 복사하여 새로운 배열 생성한다.

            //       // const updatedSelectedStocks = [...prev];
            //       // const newCachedPrice = {
            //       //   ...updatedSelectedStocks[index].cachedPrice,
            //       //   [newCurrencyType]: newPrice,
            //       // },

            //       // 특정 index의 객체를 찾아서 currencyType를 newCurrencyType으로 변경한다.
            //       // updatedSelectedStocks[index] = {
            //       //   ...updatedSelectedStocks[index],
            //       //   price: newPrice,
            //       //   cachedPrice:
            //       //   currencyType: newCurrencyType,
            //       // };
            //       // return updatedSelectedStocks;
            //     });

            //     return;
            //     // newValue를 아래 로직처럼 진행하고 cached 값도 변경해준다.
            //   }

            //   // TODO: EXCHANGE_RATE가 없을 겨우 어떻게 해줄것인가? (아무것도 안해줘도 되지 않을까?)
            //   return;

            //   // setSelectedStocks((prev: SelectedStocksAtomProps[]) => {
            //   //   let newPrice = prev[id].price;
            //   //   if (newCurrencyType === 'USD' && EXCHANGE_RATE !== undefined) {
            //   //     newPrice = handleDecimalPoint(
            //   //       Math.floor,
            //   //       Number(newPrice) / EXCHANGE_RATE,
            //   //       2,
            //   //     );
            //   //   } else if (
            //   //     newCurrencyType === 'KRW' &&
            //   //     EXCHANGE_RATE !== undefined
            //   //   ) {
            //   //     newPrice = handleDecimalPoint(
            //   //       Math.floor,
            //   //       Number(newPrice) * EXCHANGE_RATE,
            //   //       0,
            //   //     );
            //   //   }
            //   //   // 이전 상태를 복사하여 새로운 배열 생성한다.
            //   //   const updatedSelectedStocks = [...prev];
            //   //   // 특정 id의 객체를 찾아서 currencyType를 newCurrencyType으로 변경한다.
            //   //   updatedSelectedStocks[id] = {
            //   //     ...updatedSelectedStocks[id],
            //   //     price: newPrice,
            //   //     currencyType: newCurrencyType,
            //   //   };
            //   //   return updatedSelectedStocks;
            //   // });
            //   // return;
            // };

            console.log('stock', stock);

            // console.log('stock.price: ', stock.price);
            return (
              <FeedStockInfo
                key={index}
                index={index}
                stock={stock}
                removeSelected={handleRemoveSelected}
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
