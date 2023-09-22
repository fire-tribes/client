import type { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

/** 단위 부착 이게 진짜 필요한가?
 *
 * export const attachSymbol = (
    price: number | string | undefined,
    symbol: string = '원',
    ) => {
    return price ? price + symbol : '';
    }; 
 * 
 */

/** 퍼센테이지 부착 이게 진짜 필요한가?
 *
 * export const attachPercentage = (price: number | string | undefined) => {
 *   return price ? price + '%' : '';
 *  };
 *
 */

type TransferPrice = (params: {
  currentPrice: number | undefined;
  exchangeRate: number | undefined;
  outputSymbol: ExchangeRateSymbol;
  defaultText?: string;
  optionText?: string;
}) => string;

/**
 * 숫자 변환
 * 단위 변환
 * 뒤에 원 or %  + 추가 text
 * 기본값 반환
 *
 */
export const transferPrice: TransferPrice = ({
  currentPrice,
  exchangeRate,
  outputSymbol,
  defaultText = '',
  optionText = '',
}) => {
  if (!currentPrice || !exchangeRate) {
    return defaultText;
  }
  if (outputSymbol === 'KRW') {
    return (
      Math.floor(currentPrice * exchangeRate).toLocaleString('ko-kr') +
      '원' +
      optionText
    );
  }
  if (outputSymbol === 'USD') {
    return Math.floor(currentPrice / exchangeRate) + '$' + optionText;
  }

  return defaultText;
};

/** 얘는 숫자단위에 따라서 만, 원 억 이런걸 달아줘야한다. */
