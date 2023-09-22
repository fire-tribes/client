import type { ExchangeRateSymbol } from '@/@types/models/exchangeRate';

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

export interface MyportfoliAssetDetailModel {
  /** 자산Id */
  portfolioAssetId: string;
  /** 미국주식Id */
  assetId: number;
  /** 미국주식 고유 문자 코드  ex) MSFT */
  tickerCode: string;
  /** 자산수량 */
  count: number;
  /** 평단가 */
  averagePrice: number;
  /** 현재가 */
  currentPrice: number;
  /** 등락율 */
  assetPriceChangeRate: number;
  /** 등략 */
  assetPriceChange: number;
  /** 자산가치 */
  value: number;
  /** 수익률 */
  rateOfReturn: number;
  /** 배당수익률 */
  dividendPriceRatio: number;
  /** 배당주기 */
  dividendMonth: number[];
  /** 통화 */
  currencyType: ExchangeRateSymbol;
}
