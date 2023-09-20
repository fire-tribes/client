import { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

export type MyPortfolioModel = {
  /** 포트폴리오 id */
  portfolioId: number;
  /** 총 자산 가격 */
  totalValue: number;
  /** 총 자산 변동금액 */
  totalValueChange: number;
  /** 총 자산 변동률 */
  totalValueChangeRate: number;
  /** 자산별 정보 */
  assetDetails: MyportfoliAssetDetailModel[];
};

export type MyportfoliAssetDetailModel = {
  /** 자산Id */
  assetId: number;
  /** 미국주식코드 */
  tickerCode: string;
  /** 한국주식코드 */
  stockCode: string;
  /** 자산수량 */
  count: number;
  /** 평단가 */
  averagePrice: string;
  /** 현재가 */
  currentPrice: string;
  /** 등락율 */
  assetPriceChangeRate: string;
  /** 등략 */
  assetPriceChange: string;
  /** 자산가치 */
  value: number;
  /** 수익률 */
  rateOfReturn: number;
  /** 배당수익률 */
  dividendYield: number;
  /** 배당주기 */
  dividendMonth: number[];
  /** 통화 */
  currencyType: ExchangeRateSymbol;
};
