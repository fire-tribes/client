import { ExchangeRateSymbol } from './exchangeRate';

/**
 * 현재 가격 Response Interface
 */
export type GetCurrentPrice = {
  /** 해당 종목 자산 아이디 */
  assetId: number;
  /** 해당 종목 현재 가격 */
  currentPrice: number;
  /** 해당 종목 화폐 단위 */
  currencyType: ExchangeRateSymbol;
  /** 해당 종목 현재 가격 검색 시간 */
  accessTime: string;
  /** 해당 종목 대비기호(등락여부) */
  sign: string;
  /** 전일 종가와 당일 현재가의 차이(등락 크기) */
  priceChange: number;
  /** 전일 종가와 당일 현재가의 차이 비율(등락율) */
  priceChangeRate: number;
};
