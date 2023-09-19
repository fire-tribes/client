import type { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

type TransferPrice = (params: {
  currentPrice: number;
  exchangeRate: number;
  inputSymbol: ExchangeRateSymbol;
}) => void;

// const attachSymbol = (price: number | string, symbol: string = '원') => {
//   return price + symbol;
// };

// const attachPercentage = (price: number | string) => {
//   return price + '%';
// };
// 숫자를 변환
// 단위 부착
export const transferPrice: TransferPrice = ({
  currentPrice,
  exchangeRate,
  inputSymbol,
}) => {
  if (inputSymbol === 'USD') {
    return Math.floor(currentPrice * exchangeRate) + '원';
  }
  if (inputSymbol === 'KRW') {
    return Math.floor(currentPrice / exchangeRate) + '$';
  }

  return '';
};
